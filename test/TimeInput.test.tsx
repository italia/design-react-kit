import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TimeInput } from '../src';
import { addTime, subtractTime, formatTime } from '../src/Input/TimeInput';

const renderTimeInput = (value: string = '') =>
  render(
    <TimeInput
      id='timeInput'
      label='Time'
      hoursLabel='Hours'
      minutesLabel='Minutes'
      increaseHoursLabel='Add hour'
      decreaseHoursLabel='Subtract hour'
      increaseMinutesLabel='Add minute'
      decreaseMinutesLabel='Subtract minute'
      value={value}
    />
  );

describe('TimeInput', () => {
  it('Should have the spinner controls closed by default', () => {
    const { container } = renderTimeInput();
    expect(container.querySelector('.spinner-control')).toHaveStyle({
      display: 'none'
    });
  });

  it('Should open the spinner controls when clicking the button', () => {
    const { container } = renderTimeInput();
    fireEvent.click(container.querySelector('.btn-time') as HTMLElement);
    expect(container.querySelector('.spinner-control')).not.toHaveStyle({
      display: 'none'
    });
  });

  it('Should update the time, the hours and the minutes when changing the main Time field', () => {
    const { getByLabelText } = renderTimeInput();
    fireEvent.change(getByLabelText('Time'), {
      target: { value: '23:59' }
    });
    expect(getByLabelText('Time')).toHaveValue('23:59');
    expect(getByLabelText('Hours')).toHaveValue(23);
    expect(getByLabelText('Minutes')).toHaveValue(59);
  });

  describe('Hours', () => {
    it('Should update the time and the hours when changing the Hours field', () => {
      const { getByLabelText } = renderTimeInput('23:59');
      fireEvent.change(getByLabelText('Hours'), {
        target: { value: '0' }
      });
      expect(getByLabelText('Time')).toHaveValue('00:59');
      expect(getByLabelText('Hours')).toHaveValue(0);
      expect(getByLabelText('Minutes')).toHaveValue(59);
    });

    it('Should update the time and the hours when clicking the Hour Up and Down buttons', () => {
      const { getByLabelText } = renderTimeInput('22:59');

      // Add 1
      fireEvent.click(getByLabelText('Add hour'));
      expect(getByLabelText('Time')).toHaveValue('23:59');
      expect(getByLabelText('Hours')).toHaveValue(23);
      expect(getByLabelText('Minutes')).toHaveValue(59);

      // Do nothing as already maximum value
      fireEvent.click(getByLabelText('Add hour'));
      expect(getByLabelText('Time')).toHaveValue('23:59');
      expect(getByLabelText('Hours')).toHaveValue(23);
      expect(getByLabelText('Minutes')).toHaveValue(59);

      // Remove 1
      fireEvent.click(getByLabelText('Subtract hour'));
      expect(getByLabelText('Time')).toHaveValue('22:59');
      expect(getByLabelText('Hours')).toHaveValue(22);
      expect(getByLabelText('Minutes')).toHaveValue(59);
    });
  });

  describe('Minutes', () => {
    it('Should update the time and the minutes when changing the Minutes field', () => {
      const { getByLabelText } = renderTimeInput('23:59');
      fireEvent.change(getByLabelText('Minutes'), {
        target: { value: '0' }
      });
      expect(getByLabelText('Time')).toHaveValue('23:00');
      expect(getByLabelText('Hours')).toHaveValue(23);
      expect(getByLabelText('Minutes')).toHaveValue(0);
    });

    it('Should update the time and the minutes when clicking the Minute Up and Down buttons', () => {
      const { getByLabelText } = renderTimeInput('23:58');

      // Add 1
      fireEvent.click(getByLabelText('Add minute'));
      expect(getByLabelText('Time')).toHaveValue('23:59');
      expect(getByLabelText('Hours')).toHaveValue(23);
      expect(getByLabelText('Minutes')).toHaveValue(59);

      // Do nothing as already maximum value
      fireEvent.click(getByLabelText('Add minute'));
      expect(getByLabelText('Time')).toHaveValue('23:59');
      expect(getByLabelText('Hours')).toHaveValue(23);
      expect(getByLabelText('Minutes')).toHaveValue(59);

      // Remove 1
      fireEvent.click(getByLabelText('Subtract minute'));
      expect(getByLabelText('Time')).toHaveValue('23:58');
      expect(getByLabelText('Hours')).toHaveValue(23);
      expect(getByLabelText('Minutes')).toHaveValue(58);
    });
  });

  describe('addTime', () => {
    it('Should add 1 to the value while below the maxValue', () => {
      const maxValue = 1;
      expect(addTime('-1', maxValue)).toBe('0');
      expect(addTime('0', maxValue)).toBe('1');
      expect(addTime('1', maxValue)).toBe('1');
      expect(addTime('2', maxValue)).toBe('2');
    });
  });

  describe('subtractTime', () => {
    it('Should subtract 1 to the value while above the minValue', () => {
      const minValue = -1;
      expect(subtractTime('1', minValue)).toBe('0');
      expect(subtractTime('0', minValue)).toBe('-1');
      expect(subtractTime('-1', minValue)).toBe('-1');
      expect(subtractTime('-2', minValue)).toBe('-2');
    });
  });

  describe('formatTime', () => {
    it('Should format the time to always be 2 digits', () => {
      expect(formatTime(0)).toBe('00');
      expect(formatTime('0')).toBe('00');
      expect(formatTime(5)).toBe('05');
      expect(formatTime('5')).toBe('05');
      expect(formatTime(10)).toBe('10');
    });
  });
});
