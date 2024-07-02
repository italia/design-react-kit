import React from 'react';
import { act, fireEvent, Matcher, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NotificationId, NotificationManager, notify, preloadIcons } from '../src';

type MatcherType = 'title' | 'message' | 'closeButton';

function waitForNotificationToDisappear(pattern: Matcher, type: MatcherType = 'title') {
  const selector = type === 'title' ? 'h5' : undefined;
  return waitForElementToBeRemoved(() => screen.queryAllByText(pattern, { selector }));
}

describe('Notifications', () => {
  // Icons are now async, so preload them to make it behave in an sync way
  beforeAll(() => preloadIcons(['it-tool', 'it-close-circle', 'it-info-circle', 'it-error', 'it-check-circle']));

  describe('NotificationManager', () => {
    it('should use the containerId as node id', () => {
      render(<NotificationManager containerId='foo' />);

      expect(document.getElementById('foo')).not.toBe(null);
    });

    it('should clear all notification when dismiss() is called', async () => {
      render(<NotificationManager duration={0} />);

      act(() => {
        notify('coucou1');
        notify('coucou2');
      });

      await waitFor(async () => {
        const notifications = await screen.findAllByText(/coucou/, {
          selector: 'h5'
        });
        expect(notifications.length).toBe(2);
      });

      act(() => {
        notify.dismiss();
      });

      await waitForNotificationToDisappear(/coucou/);
    });

    it('should clear only the notification when dismiss() is called with a specific id', async () => {
      render(<NotificationManager duration={0} />);

      let id: NotificationId;
      act(() => {
        id = notify('coucou1');
        notify('coucou2');
      });

      await waitFor(async () => {
        const notifications = await screen.findAllByText(/coucou/, {
          selector: 'h5'
        });
        expect(notifications.length).toBe(2);
      });

      act(() => {
        notify.dismiss(id);
      });

      await waitForNotificationToDisappear('coucou1');
      expect(screen.queryByText('coucou2', { selector: 'h5' })).toBeInTheDocument();
    });

    it('should auto close the notification by default after some time', async () => {
      render(<NotificationManager duration={500} />);

      act(() => {
        notify('coucou1');
        notify('coucou2');
      });
      await waitFor(async () => {
        const notifications = await screen.findAllByText(/coucou/, {
          selector: 'h5'
        });
        expect(notifications.length).toBe(2);
      });

      await waitForNotificationToDisappear(/coucou/);
    });

    it('should prevent to close the notification on click when disabled', async () => {
      render(<NotificationManager duration={0} closeOnClick={false} />);

      act(() => {
        notify('coucou');
      });

      await screen.findAllByText(/coucou/, {
        selector: 'h5'
      });

      act(() => {
        fireEvent.click(screen.getByText('coucou'));
      });

      await expect(waitForNotificationToDisappear(/coucou/)).rejects.toThrowError();
    });

    it('should show the close button and keep the auto close behaviour', async () => {
      render(<NotificationManager duration={500} />);

      act(() => {
        notify('coucou1', { dismissable: true });
      });

      const closeButton = await screen.findAllByText(/Chiudi notifica/);

      expect(closeButton.length).toBe(1);

      await waitForNotificationToDisappear(/coucou/);
    });

    it('should close the notification when clicking on the close button', async () => {
      render(<NotificationManager duration={0} />);

      act(() => {
        notify('coucou1');
      });

      const closeButton = await screen.findAllByText(/Chiudi notifica/);
      expect(closeButton.length).toBe(1);

      act(() => {
        fireEvent.click(screen.getByRole('button'));
      });
      expect(screen.queryAllByText(/coucou/).length).toBe(0);
    });

    it('should apply the fixed position', async () => {
      render(<NotificationManager fix={'right'} />);

      act(() => {
        notify('coucou1');
      });

      await screen.findAllByText(/coucou/, {
        selector: 'h5'
      });

      expect(document.querySelector('.notification')).toHaveStyle({
        borderLeft: 'none',
        borderTop: 'none',
        borderBottom: 'none'
      });
    });

    it('should call the onOpen and onClose callbacks when passed', async () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();

      render(<NotificationManager duration={500} />);

      act(() => {
        notify('coucou1', { onOpen, onClose });
      });

      await screen.findAllByText(/coucou/);

      expect(onOpen).toHaveBeenCalled();

      await waitForNotificationToDisappear(/coucou/);

      expect(onClose).toHaveBeenCalled();
    });

    describe('local overrides', () => {});
  });

  describe('Notification content', () => {
    it('should render a notification with title and body', async () => {
      render(<NotificationManager duration={500} />);

      act(() => {
        notify('coucou1', 'Notification body');
      });

      // will throw if no matches exist
      await screen.findAllByText('Notification body');
    });

    it('should render a custom icon when passed via options', async () => {
      render(<NotificationManager duration={500} />);

      act(() => {
        notify('coucou1', 'Notification body', { icon: 'it-tool' });
      });

      // will throw if no matches exist
      await screen.findAllByRole('img');
    });

    it('should render a custom icon when passed via options', async () => {
      render(<NotificationManager duration={500} />);

      act(() => {
        notify('coucou1', 'Notification body', { state: 'success' });
      });

      // together with the state an icon should be assigned
      await screen.findAllByRole('img');
    });

    it('should ignore an invalid state', async () => {
      render(<NotificationManager duration={500} />);

      act(() => {
        // @ts-expect-error
        notify('coucou1', 'Notification body', { state: 'invalid-state' });
      });

      // waiting for an icon should fail
      await expect(screen.findAllByRole('img')).rejects.toThrowError();
    });

    it('should apply a state styling and relative icon when set', () => {});
  });
});
