import React, { useState } from 'react';
import classNames from 'classnames';

import { noop } from '../utils';
import { Input } from './Input';
import { Icon } from '../Icon/Icon';

export const addTime = (value: string, maxValue: number): string => {
  const currTime = Number(value);
  return currTime >= maxValue ? value : (currTime + 1).toString();
};

export const subtractTime = (value: string, minValue: number): string => {
  const currTime = Number(value);
  return currTime <= minValue ? value : (currTime - 1).toString();
};

export const formatTime = (value: number | string): string =>
  `0${value}`.substr(-2);

export const TimeInput = (props: {
  /** ID del campo */
  id?: string;
  /** Etichetta del campo */
  label: string;
  /** Etichetta della sezione per il controllo delle ore e dei minuti - non visibile a schermo */
  controlsLabel?: string;
  /** Determina l'uso del tema scuro per la sezione di selezione di ore e minuti */
  dark?: boolean;
  /** Funzione callback */
  onBlur?: Function;
  /** Utilizzare per mostrare il fallimento nella validazione del valore nel campo */
  invalid?: boolean;
  /** Il valore del campo */
  value?: string;
  /** Testo di esempio da utilizzare per il campo */
  placeholder?: string;
  /** Testo esplicativo per dispositivi screen reader */
  srText?: string;
  /** Etichetta del campo per la selezione delle ore -  non visibile a schermo */
  hoursLabel?: string;
  /** Etichetta del campo per la selezione dei minuti -  non visibile a schermo */
  minutesLabel?: string;
  /** Etichetta del bottone per incrementare le ore -  non visibile a schermo */
  increaseHoursLabel?: string;
  /** Etichetta del bottone per incrementare i minuti -  non visibile a schermo */
  increaseMinutesLabel?: string;
  /** Etichetta del bottone per diminuire le ore -  non visibile a schermo */
  decreaseHoursLabel?: string;
  /** Etichetta del bottone per diminuire i minuti -  non visibile a schermo */
  decreaseMinutesLabel?: string;
}) => {
  const {
    dark = false,
    onBlur = noop,
    label,
    controlsLabel,
    invalid = false,
    value = '',
    id,
    placeholder,
    srText,
    hoursLabel,
    minutesLabel,
    increaseHoursLabel,
    increaseMinutesLabel,
    decreaseHoursLabel,
    decreaseMinutesLabel
  } = props;

  const [initialHours, initialMinutes] = value.split(':');
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(initialHours || '00');
  const [minutes, setMinutes] = useState(initialMinutes || '00');
  const [time, setTime] = useState(
    initialHours && initialMinutes ? `${initialHours}:${initialMinutes}` : ''
  );

  const button = (
    <button className='btn-time' onClick={() => setIsOpen(!isOpen)}>
      <Icon icon='it-clock' />
    </button>
  );

  const onHoursChange = (value: string) => {
    const formattedValue = formatTime(value);
    setHours(isNaN(Number(formattedValue)) ? `00` : formattedValue);
    setTime(`${formattedValue}:${minutes}`);
  };

  const onMinutesChange = (value: string) => {
    const formattedValue = formatTime(value);
    setMinutes(isNaN(Number(formattedValue)) ? `00` : formattedValue);
    setTime(`${hours}:${formattedValue}`);
  };

  const onTimeChange = (value: string) => {
    const [hours, minutes] = value.split(':');
    onHoursChange(hours?.trim());
    onMinutesChange(minutes?.trim());
    setTime(value);
  };

  return (
    <div
      className={classNames('it-timepicker-wrapper', {
        'theme-dark': dark
      })}
    >
      <section className='time-spinner'>
        <div className='error_container' role='alert' aria-atomic='true'></div>
        <fieldset>
          <legend>
            <span className='sr-only'>{srText}</span>
          </legend>
          <div>
            <div className='calendar-input-container'>
              <Input
                type='time'
                label={label}
                id={id}
                placeholder={placeholder}
                button={button}
                value={time}
                onFocus={() => setIsOpen(false)}
                onChange={(e) => onTimeChange(e.target.value)}
                invalid={invalid}
                onBlur={() => onBlur(time)}
              />
            </div>
          </div>
        </fieldset>
        <div
          className='spinner-control'
          aria-hidden='true'
          role='region'
          aria-label={controlsLabel}
          tabIndex={-1}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <div className='spinner-hour spinner'>
            <Input
              className='spinnerHour form-control'
              aria-label={hoursLabel}
              type='number'
              value={hours}
              role='spinbutton'
              maxLength={2}
              aria-valuenow={Number(hours)}
              aria-valuemax={23}
              aria-valuemin={0}
              onChange={(e) => onHoursChange(e.target.value)}
            />
            <div className='button-wrapper'>
              <button
                className='button-hour btnHourUp'
                aria-label={increaseHoursLabel}
                aria-hidden='true'
                tabIndex={-1}
                onClick={() => onHoursChange(addTime(hours, 23))}
              >
                <span className='icon-up'></span>
              </button>
              <button
                className='button-hour btnHourDown'
                aria-label={decreaseHoursLabel}
                aria-hidden='true'
                tabIndex={-1}
                onClick={() => onHoursChange(subtractTime(hours, 0))}
              >
                <span className='icon-down'></span>
              </button>
            </div>
          </div>
          <div className='spinner-min spinner'>
            <Input
              className='spinnerMin form-control'
              aria-label={minutesLabel}
              type='number'
              value={minutes}
              role='spinbutton'
              maxLength={2}
              aria-valuenow={Number(minutes)}
              aria-valuemax={59}
              aria-valuemin={0}
              onChange={(e) => onMinutesChange(e.target.value)}
            />
            <div className='button-wrapper'>
              <button
                className='btnMinUp button-minute'
                aria-label={increaseMinutesLabel}
                aria-hidden='true'
                tabIndex={-1}
                onClick={() => onMinutesChange(addTime(minutes, 59))}
              >
                <span className='icon-up'></span>
              </button>
              <button
                className='btnMinDown button-minute'
                aria-label={decreaseMinutesLabel}
                aria-hidden='true'
                tabIndex={-1}
                onClick={() => onMinutesChange(subtractTime(minutes, 0))}
              >
                <span className='icon-down'></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
