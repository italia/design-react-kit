import classNames from 'classnames';
import { useCallback, useState } from 'react';
import type { CSSModule } from 'reactstrap/types/lib/utils';
import { mapToCssModules } from '../utils';
import type { InputProps } from './Input';

type ValidationProps = Pick<InputProps, 'valid'>;
type TypeProps = Pick<InputProps, 'plaintext' | 'type'> & {
  staticInput?: boolean;
};
type FormControlProps = Pick<InputProps, 'normalized'> & TypeProps;

function getFormControlClassInternal({ plaintext, staticInput, type = 'text', normalized }: FormControlProps) {
  const formControlClass = 'form-control';
  if (plaintext || staticInput || normalized) {
    return `${formControlClass}-plaintext`;
  }
  if (type === 'file') {
    return `${formControlClass}-file`;
  }
  if (['radio', 'checkbox'].indexOf(type) > -1) {
    return null;
  }
  return formControlClass;
}

export function getFormControlClass(props: FormControlProps, cssModule?: CSSModule) {
  return mapToCssModules(getFormControlClassInternal(props), cssModule);
}

export function getValidationTextControlClass({ valid }: ValidationProps, cssModule?: CSSModule) {
  return mapToCssModules(
    classNames({
      'form-text': true,
      'form-feedback just-validate-error-label': valid == false
    }),
    cssModule
  );
}

export function getTag({ tag, plaintext, staticInput, type = 'text' }: Pick<InputProps, 'tag'> & TypeProps) {
  if (tag) {
    return tag;
  }
  if (['radio', 'checkbox'].indexOf(type) > -1) {
    return 'input';
  }
  if (plaintext || staticInput) {
    return 'p';
  }
  return 'input';
}

type InputClassesParams = ValidationProps &
  Pick<InputProps, 'bsSize' | 'placeholder' | 'value' | 'label' | 'validationText' | 'normalized'> & {
    isFocused: boolean;
    inputPassword?: boolean;
    formControlClass?: string;
    validationTextControlClass?: string;
    originalWrapperClass: InputProps['wrapperClassName'];
  };

export function getClasses(
  className: string | undefined,
  type: string,
  {
    isFocused,
    valid,
    bsSize,
    placeholder,
    value,
    label,
    validationText,
    normalized,
    inputPassword,
    formControlClass,
    validationTextControlClass,
    originalWrapperClass
  }: InputClassesParams,
  cssModule?: CSSModule
) {
  const hasPlainCondition = placeholder || label || validationText;
  const baseCondition = hasPlainCondition && !normalized && !inputPassword;
  const passwordOnlyCondition = inputPassword && !hasPlainCondition && !normalized;
  const normalizedOnlyCondition = normalized && !hasPlainCondition && !inputPassword;

  const classes = mapToCssModules(
    classNames(
      className,
      {
        'is-invalid': valid == false,
        'just-validate-success-field': valid,
        [`form-control-${bsSize}`]: bsSize
      },
      formControlClass
    ),
    cssModule
  );
  const wrapperClass = mapToCssModules(classNames(originalWrapperClass, 'form-group'), cssModule);
  const validationTextClass = mapToCssModules(
    classNames(
      {
        'valid-feedback': valid,
        'invalid-feedback form-feedback just-validate-error-label': valid == false
      },
      validationTextControlClass
    ),
    cssModule
  );

  const inputClasses = mapToCssModules(
    classNames(
      classes,
      !baseCondition && {
        // we can model here only if stylings
        'form-control-plaintext': normalizedOnlyCondition,
        'form-control': passwordOnlyCondition,
        'input-password': passwordOnlyCondition
      }
    ),
    cssModule
  );

  const activeClass = mapToCssModules(
    classNames({
      active: isFocused || placeholder || value || ['date', 'time'].includes(type)
    }),
    cssModule
  );

  const extraLabelClass = mapToCssModules(
    classNames({
      'input-number-label': ['number', 'currency', 'adaptive', 'percentage'].includes(type)
    })
  );

  return {
    wrapperClass,
    inputClasses,
    activeClass,
    extraLabelClass,
    validationTextClass
  };
}

export function useFocus<T extends HTMLInputElement | HTMLTextAreaElement>({
  onFocus,
  onBlur
}: {
  onFocus: React.FocusEventHandler<T> | undefined;
  onBlur: React.FocusEventHandler<T> | undefined;
}) {
  const [isFocused, setFocus] = useState(false);

  const toggleFocusLabel = useCallback(
    (e: React.FocusEvent<T>) => {
      setFocus(true);
      onFocus?.(e);
    },
    [onFocus]
  );

  const toggleBlurLabel = useCallback(
    (e: React.FocusEvent<T>) => {
      if (e.target.value === '') {
        setFocus(!isFocused);
      }
      onBlur?.(e);
    },
    [isFocused, onBlur]
  );

  return { toggleFocusLabel, toggleBlurLabel, isFocused };
}
