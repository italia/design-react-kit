import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as Utils from '../src/utils';
import { isCustomLegendObject } from '../src/Rating/Rating';
import { Rating, preloadIcons } from '../src';

jest.mock('./../src/utils', () => {
  const utilModule = jest.requireActual('./../src/utils');
  return { ...utilModule, noop: jest.fn() };
});

describe('Rating', () => {
  // Icons are now async, so preload them to make it behave in an sync way
  beforeAll(() => preloadIcons(['it-star-full']));
  it('Should not apply className to the wrapper', () => {
    const { container } = render(
      <Rating
        value={4}
        inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
        name='rating'
        className={'myClass'}
      />
    );
    expect(container.firstChild).not.toHaveClass('myClass');
  });

  it('Should apply wrapperClassName to the wrapper', () => {
    const { container } = render(
      <Rating
        value={4}
        inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
        name='rating'
        wrapperClassName={'myClass'}
      />
    );
    expect(container.firstChild).toHaveClass('myClass');
  });

  describe('Read only', () => {
    it('Should not apply readOnly className to the wrapper by default', () => {
      const { container } = render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          wrapperClassName={'myClass'}
        />
      );
      expect(container.firstChild).not.toHaveClass('rating-read-only');
    });

    it('Should apply readOnly className to the wrapper when readOnly', () => {
      const { container } = render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          wrapperClassName={'myClass'}
          readOnly
        />
      );
      expect(container.firstChild).toHaveClass('rating-read-only');
    });

    it('Should not apply set aria-hidden by default', () => {
      const { container } = render(
        <Rating value={4} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' />
      );
      const ariaHiddenInputs = container.querySelectorAll('input[aria-hidden="true"]');
      expect(ariaHiddenInputs).toHaveLength(0);
    });

    it('Should set aria-hidden when readOnly', () => {
      const { container } = render(
        <Rating value={4} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' readOnly />
      );
      const ariaHiddenInputs = container.querySelectorAll('input[aria-hidden="true"]');
      expect(ariaHiddenInputs).toHaveLength(5);
    });

    it('Should use onChangeRating props by default', () => {
      const onChangeRating = jest.fn();
      const { container } = render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          onChangeRating={onChangeRating}
        />
      );
      const input = container.querySelectorAll('input')[0];
      fireEvent.click(input);
      expect(onChangeRating).toHaveBeenCalledWith(5, 'rating');
      expect(onChangeRating).toHaveBeenCalledTimes(1);
    });

    it('Should use noop props when readOnly', () => {
      const { container } = render(
        <Rating value={4} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' />
      );
      const input = container.querySelectorAll('input')[0];
      fireEvent.click(input);
      expect(Utils.noop).toHaveBeenCalledTimes(1);
    });

    it('Should not make input disabled by default', () => {
      const { container } = render(
        <Rating value={4} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' />
      );
      const inputs = container.querySelectorAll('input');
      inputs.forEach((input) => expect(input.disabled).toBeFalsy());
    });

    it('Should make input disabled when readOnly', () => {
      const { container } = render(
        <Rating value={4} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' readOnly />
      );
      const inputs = container.querySelectorAll('input');
      inputs.forEach((input) => expect(input.disabled).toBeTruthy());
    });
  });

  describe('isCustomLegendObject', () => {
    it('Should return true', () => {
      expect(isCustomLegendObject({ content: true, srOnly: true })).toBeTruthy();
    });

    it('Should return false', () => {
      expect(isCustomLegendObject(null)).toBeFalsy();
      expect(isCustomLegendObject('null')).toBeFalsy();
      expect(isCustomLegendObject(<></>)).toBeFalsy();
    });
  });

  describe('Legend', () => {
    it('Should render <legend> tag when legend is a string', () => {
      const { container } = render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          legend='This is a legend'
        />
      );
      const legend = container.querySelectorAll('legend');
      expect(legend).toHaveLength(1);
    });

    it('Should render <legend> tag when using a custom legend', () => {
      const { container } = render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          legend={{ content: 'This is a legend', srOnly: false }}
        />
      );
      const legend = container.querySelectorAll('legend');
      expect(legend).toHaveLength(1);
    });

    it('Should render legend as is', () => {
      const { container } = render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          legend={<div id='legend' />}
        />
      );
      const legend = container.querySelectorAll('#legend');
      expect(legend).toHaveLength(1);
    });
  });

  describe('Label Template', () => {
    it('Should use default label template', () => {
      render(<Rating value={4} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' />);
      const legend = screen.getByText('Valuta 1 stelle su 5');
      expect(legend).not.toBe(null);
    });

    it('Should use customer label template', () => {
      render(
        <Rating
          value={4}
          inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
          name='rating'
          labelTemplate={(vote) => `Vote ${vote}/5`}
        />
      );
      const legend = screen.getByText('Vote 1/5');
      expect(legend).not.toBe(null);
    });
  });
});

test('should have a testId for resilient UI changes', () => {
  render(<Rating inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='rating' testId='test-id-rating' />);

  expect(screen.getByTestId('test-id-rating')).toBeTruthy();
});
