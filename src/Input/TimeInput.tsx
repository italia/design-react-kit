import React, { HTMLAttributes, ReactNode, useState } from 'react';
import classNames from 'classnames';

import { noop } from '../utils';
import { Input, InputProps } from './Input';
import { Icon } from '../Icon/Icon';
import { getClasses, getInfoTextControlClass } from './utils';

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

interface TimeInputContainerProps extends HTMLAttributes<HTMLElement> {
  wrapperClass: string;
  infoTextClass: string;
  label: string | ReactNode | undefined;
  infoText: string | undefined;
  invalid: boolean;
  id: string;
  button: ReactNode;
  children: ReactNode;
}

const TimeInputContainer = ({
  wrapperClass,
  children,
  label,
  id,
  infoText,
  button,
  infoTextClass,
  invalid
}: TimeInputContainerProps) => {
  const infoId = id ? `${id}Description` : undefined;
  const activeClass = 'active';

  return (
    <div className={classNames(wrapperClass)}>
      <div className='input-group'>
        {children}
        <label
          htmlFor={id}
          className={classNames(activeClass, { 'error-label': invalid })}
        >
          {label}
        </label>
        <small id={infoId} className={infoTextClass}>
          {infoText}
        </small>
        <div className='input-group-append'>{button}</div>
      </div>
    </div>
  );
};

type UnusedProps = 'plaintext' | 'onBlur' | 'value' | 'type';

export interface TimeInputProps extends Omit<InputProps, UnusedProps> {
  id: string;
  /** Etichetta della sezione per il controllo delle ore e dei minuti - non visibile a schermo */
  controlsLabel?: string;
  /** Determina l'uso del tema scuro per la sezione di selezione di ore e minuti */
  dark?: boolean;
  /** Il valore del campo */
  value?: string;
  /** Funzione callback */
  onBlur?: (time: string) => void;
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
}

export const TimeInput = ({
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
  decreaseMinutesLabel,
  ...attributes
}: TimeInputProps) => {
  const [initialHours, initialMinutes] = value.split(':');
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(initialHours || '00');
  const [minutes, setMinutes] = useState(initialMinutes || '00');
  const [time, setTime] = useState(
    initialHours && initialMinutes ? `${initialHours}:${initialMinutes}` : ''
  );
  const [isFocused, toggleFocus] = useState(false);

  const button = (
    <button
      className='btn-time'
      onClick={() => {
        setIsOpen(!isOpen);
        if (isOpen) onBlur(time);
      }}
    >
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

  const infoTextControlClass = getInfoTextControlClass(
    attributes,
    attributes.cssModule
  );

  const { infoTextClass, wrapperClass } = getClasses(
    attributes.className,
    {
      ...attributes,
      normalized: Boolean(attributes.normalized),
      inputPassword: false,
      formControlClass: 'form-control',
      infoTextControlClass,
      isFocused,
      originalWrapperClass:
        attributes.wrapperClassName || attributes.wrapperClass
    },
    attributes.cssModule
  );

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
              <TimeInputContainer
                wrapperClass={wrapperClass}
                infoTextClass={infoTextClass}
                label={label}
                infoText={attributes.infoText}
                id={id}
                button={button}
                invalid={invalid}
              >
                <Input
                  {...attributes}
                  type='text'
                  label={label}
                  id={id}
                  placeholder={placeholder}
                  value={time}
                  onFocus={() => {
                    setIsOpen(false);
                    toggleFocus(true);
                  }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onTimeChange(e.target.value)
                  }
                  invalid={invalid}
                  onBlur={() => {
                    toggleFocus(false);
                    onBlur(time);
                  }}
                  noWrapper
                />
              </TimeInputContainer>
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onHoursChange(e.target.value)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onMinutesChange(e.target.value)
              }
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
