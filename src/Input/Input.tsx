import React, { InputHTMLAttributes, ElementType, Ref, ReactNode, useCallback, useState } from 'react';
import isNumber from 'is-number';

import { InputContainer } from './InputContainer';
import { Icon } from '../Icon/Icon';
import { getTag, getFormControlClass, getClasses, getValidationTextControlClass, useFocus } from './utils';
import type { CSSModule } from 'reactstrap/types/lib/utils';
import { notifyDeprecation } from '../utils';
// taken from reactstrap types
type InputType =
  | 'text'
  | 'email'
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'button'
  | 'reset'
  | 'submit'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'password'
  | 'datetime'
  | 'time'
  | 'color';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Il tipo specifico di input da utilizzare. Il valore di default è `text`. */
  type?: InputType;
  /** Dimensione personalizzate del campo di Input secondo le classi Bootstrap/Bootstrap Italia. */
  bsSize?: 'lg' | 'sm';
  size?: number;
  /** Etichetta del campo Input. */
  label?: string | ReactNode;
  /** Testo di esempio da utilizzare per il campo. */
  placeholder?: string;
  /** Testo di validazione per l'elemento del moduleo form. */
  validationText?: string;
  /** Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `Input` abbia la prop `id` impostata. */
  infoText?: string;
  /** Il valore nel campo Input. */
  value?: string | number;
  /** Da utilizzare per impedire la modifica del valore contenuto. */
  readOnly?: boolean;
  /** Associato all'attributo readOnly mostra il campo con lo stile classico, mantenendo lo stato di sola lettura. */
  normalized?: boolean;
  /** Utilizzare per mostrare il successo nella validazione del valore nel campo Input */
  valid?: boolean;
  /** Utilizzare per mostrare il fallimento nella validazione del valore nel campo Input */
  invalid?: boolean;
  innerRef?: Ref<HTMLInputElement>;
  /** Utilizzare per mostrare testo statico non modificabile. */
  plaintext?: boolean;
  /** Utilizzare per mostrare un elemento addon a fianco (prima o dopo) il campo input all'interno del componente */
  addon?: boolean;
  /** Utilizzare per mostrare un elemento un simbolo attivando la proprietà addon nel campo input all'interno del componente */
  addonText?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Classi aggiuntive da usare per il wrapper del componente Input */
  wrapperClassName?: string;
  /**
   * Classi aggiuntive da usare per il wrapper del componente Input.
   * @deprecated. Usare `wrapperClassName`.
   * */
  wrapperClass?: string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Input */
  className?: string;
  /**
   * Usare "valid" o "invalid" per indicare lo stato del componente.
   * @deprecated
   */
  state?: string;
  /**
   * Usare "plaintext".
   * @deprecated
   */
  static?: boolean;
  /** Quando attivo rimuove il componente contenitore dell'Input. Utile per un controllo maggiore dello styling */
  noWrapper?: boolean;
  testId?: string;
}

export const Input = ({
  id,
  className,
  cssModule,
  type = 'text',
  state,
  tag,
  addon,
  addonText,
  static: staticInput,
  plaintext,
  innerRef,
  label,
  validationText,
  infoText,
  placeholder,
  normalized,
  value,
  wrapperClass: originalWrapperClassOld,
  wrapperClassName: originalWrapperClass,
  size,
  testId,
  noWrapper = false,
  ...attributes
}: InputProps) => {
  const [isHidden, setHidden] = useState(true);
  const [hasIcon, toggleIcon] = useState(true);

  const { toggleFocusLabel, toggleBlurLabel, isFocused } = useFocus<HTMLInputElement>({
    onFocus: attributes.onFocus,
    onBlur: attributes.onBlur
  });

  const toggleShow = useCallback(() => {
    setHidden(!isHidden);
    toggleIcon(!hasIcon);
  }, [hasIcon, isHidden]);

  let { bsSize, valid, invalid, ...rest } = attributes;

  const Tag = getTag({ tag, plaintext, staticInput, type });
  const formControlClass = getFormControlClass(
    {
      plaintext,
      staticInput,
      type,
      addon,
      normalized
    },
    cssModule
  );
  const validationTextControlClass = getValidationTextControlClass({ valid, invalid }, cssModule);

  if (state && valid == null && invalid == null) {
    invalid = state === 'danger';
    valid = state === 'success';
  }

  const extraAttributes: {
    type?: InputType;
    size?: number;
    ['aria-describedby']?: string;
  } = {};
  if (size && !isNumber(size)) {
    notifyDeprecation('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
    bsSize = size as unknown as InputProps['bsSize'];
  } else {
    extraAttributes.size = size;
  }

  if (Tag === 'input' || typeof tag !== 'string') {
    extraAttributes.type = type;
  }

  // associate the input field with the help text
  const infoId = id ? `${id}Description` : undefined;
  if (id) {
    extraAttributes['aria-describedby'] = infoId;
  }

  if (
    attributes.children &&
    !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')
  ) {
    notifyDeprecation(
      `Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`
    );
    delete attributes.children;
  }

  const inputPassword = extraAttributes.type === 'password';

  const indeterminateCheckboxInput = type === 'checkbox' && className?.includes('semi-checked');

  // Styling
  const { activeClass, validationTextClass, inputClasses, wrapperClass } = getClasses(
    className,
    type,
    {
      valid,
      invalid,
      bsSize,
      placeholder,
      value,
      label,
      validationText,
      normalized: Boolean(normalized),
      inputPassword,
      formControlClass,
      validationTextControlClass,
      isFocused: isFocused,
      originalWrapperClass: originalWrapperClass || originalWrapperClassOld
    },
    cssModule
  );

  // set of attributes always shared by the Input components
  const sharedAttributes = {
    id,
    onFocus: toggleFocusLabel,
    onBlur: toggleBlurLabel,
    value: value,
    ref: innerRef
  };

  // set of attributes always shared by the wrapper component
  const containerProps = {
    id,
    infoId,
    infoText,
    activeClass,
    label,
    validationTextClass,
    validationText,
    wrapperClass
  };

  if (noWrapper) {
    return (
      <Tag
        {...rest}
        {...extraAttributes}
        className={inputClasses}
        {...sharedAttributes}
        placeholder={placeholder}
        data-testid={testId}
      />
    );
  }

  if (addon && addonText) {
    return (
      <InputContainer {...containerProps}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>{addonText}</div>
          </div>
          <Tag {...rest} {...extraAttributes} {...sharedAttributes} className={inputClasses} data-testid={testId} />
        </div>
      </InputContainer>
    );
  }

  if (addon && addonText) {
    return (
      <InputContainer {...containerProps}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>{addonText}</div>
          </div>
          <Tag {...rest} {...extraAttributes} {...sharedAttributes} className={inputClasses} data-testid={testId} />
        </div>
      </InputContainer>
    );
  }

  if (addon && addonText) {
    return (
      <InputContainer {...containerProps}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>{addonText}</div>
          </div>
          <Tag {...rest} {...extraAttributes} {...sharedAttributes} className={inputClasses} data-testid={testId} />
        </div>
      </InputContainer>
    );
  }

  if (placeholder) {
    return (
      <InputContainer {...containerProps}>
        <Tag
          {...rest}
          {...extraAttributes}
          {...sharedAttributes}
          className={inputClasses}
          placeholder={placeholder}
          data-testid={testId}
        />
      </InputContainer>
    );
  }

  if (indeterminateCheckboxInput) {
    return (
      <InputContainer {...containerProps}>
        <Tag
          {...rest}
          {...extraAttributes}
          {...sharedAttributes}
          className={inputClasses}
          data-testid={testId}
          indeterminate={'true'}
        />
      </InputContainer>
    );
  }

  if (inputPassword) {
    return (
      <InputContainer {...containerProps}>
        <Tag
          {...rest}
          {...extraAttributes}
          {...sharedAttributes}
          type={isHidden ? 'password' : 'text'}
          className={inputClasses}
          placeholder={placeholder}
          data-testid={testId}
        />
        <span className='password-icon' aria-hidden='true'>
          <Icon
            size='sm'
            icon={`it-password-${hasIcon ? 'visible' : 'invisible'}`}
            className='password-icon-visible'
            onClick={toggleShow}
          />
        </span>
      </InputContainer>
    );
  }
  if (normalized) {
    return (
      <InputContainer {...containerProps}>
        <Tag
          {...rest}
          {...extraAttributes}
          {...sharedAttributes}
          className={inputClasses}
          data-testid={testId}
          readOnly
        />
      </InputContainer>
    );
  }
  if (label || validationText) {
    return (
      <InputContainer {...containerProps}>
        <Tag {...rest} {...extraAttributes} {...sharedAttributes} className={inputClasses} data-testid={testId} />
      </InputContainer>
    );
  }

  return <Tag {...rest} {...extraAttributes} className={inputClasses} {...sharedAttributes} data-testid={testId} />;
};
