import React from 'react';
import { render, screen } from '@testing-library/react';

import { Hero, HeroBackground, HeroButton, HeroTitle } from '../src';

describe('Hero component', () => {
  it('should work as container for children elements', () => {
    render(<Hero>Content</Hero>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(<Hero className='myclass'>Content</Hero>);

    expect(container.firstChild).toHaveClass('myclass');
  });

  describe('with background', () => {
    it('should render an image', () => {
      render(
        <Hero>
          <HeroBackground
            src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
            title='image title'
            alt='imagealt'
          />
        </Hero>
      );

      expect(screen.getByRole('img')).not.toBe(null);
    });

    it('should apply an overlay on top of the image', () => {
      const { container } = render(
        <Hero overlay='dark'>
          <HeroBackground
            src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
            title='image title'
            alt='imagealt'
          />
        </Hero>
      );

      expect(container.firstChild).toHaveClass('it-overlay', 'it-dark');
    });
  });

  describe('with title', () => {
    it('should render the title with a custom tag', () => {
      const { container } = render(
        <Hero>
          <HeroTitle tag='h3'>My Title</HeroTitle>
        </Hero>
      );

      expect(container.querySelector('h3')).toHaveTextContent('My Title');
    });
  });

  describe('with call to action', () => {
    it('should append the wrapper class to the button container', () => {
      render(
        <Hero>
          <HeroButton wrapperClassName='myclass'>Button</HeroButton>
        </Hero>
      );

      expect(screen.getByRole('button').parentElement).toHaveClass('myclass');
    });
  });
});

it('should have a testId for resilient UI changes', () => {
  render(<Hero testId='test-id-hero'>Content</Hero>);

  expect(screen.getByTestId('test-id-hero')).toBeTruthy();
});
