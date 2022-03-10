import React, { Ref, ReactNode, TextareaHTMLAttributes } from 'react';

import { InputContainer } from './InputContainer';
import { getClasses, getInfoTextControlClass, useFocus } from './utils';
import type { CSSModule } from 'reactstrap';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Etichetta del campo TextArea. */
  label?: string | ReactNode;
  /** Testo di esempio da utilizzare per il campo. */
  placeholder?: string;
  /** Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `TextArea` abbia la prop `id` impostata. */
  infoText?: string;
  /** Il valore nel campo TextArea. */
  value?: string | number;
  /** Da utilizzare per impedire la modifica del valore contenuto. */
  readOnly?: boolean;
  /** Associato all'attributo readOnly mostra il campo con lo stile classico, mantenento lo stato di sola lettura. */
  normalized?: boolean;
  /** Utilizzare per mostrare il successo nella validazione del valore nel campo TextArea */
  valid?: boolean;
  /** Utilizzare per mostrare il fallimento nella validazione del valore nel campo TextArea */
  invalid?: boolean;
  innerRef?: Ref<HTMLTextAreaElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Classi aggiuntive da usare per il wrapper del componente TextArea */
  wrapperClassName?: string;
  /** Classi aggiuntive da usare per il componente TextArea */
  className?: string;
  testId?: string;
}

export const TextArea = ({
  id,
  className,
  cssModule,
  innerRef,
  label,
  infoText,
  placeholder,
  normalized,
  value,
  wrapperClassName: originalWrapperClass,
  valid,
  invalid,
  testId,
  ...attributes
}: TextAreaProps) => {
  const {
    toggleFocusLabel,
    toggleBlurLabel,
    isFocused
  } = useFocus<HTMLTextAreaElement>({
    onFocus: attributes.onFocus,
    onBlur: attributes.onBlur
  });

  const infoTextControlClass = getInfoTextControlClass(
    { valid, invalid },
    cssModule
  );

  const extraAttributes: { ['aria-describedby']?: string } = {};

  // associate the input field with the help text
  const infoId = id ? `${id}Description` : undefined;
  if (id) {
    extraAttributes['aria-describedby'] = infoId;
  }

  // Styling
  const { activeClass, infoTextClass, inputClasses, wrapperClass } = getClasses(
    className,
    {
      valid,
      invalid,
      placeholder,
      value,
      label,
      infoText,
      normalized: Boolean(normalized),
      infoTextControlClass,
      isFocused,
      originalWrapperClass
    },
    cssModule
  );

  // set of attributes always shared by the Input components
  const sharedAttributes = {
    id,
    onFocus: toggleFocusLabel,
    onBlur: toggleBlurLabel,
    value,
    ref: innerRef
  };

  // set of attributes always shared by the wrapper component
  const containerProps = {
    id,
    infoId,
    activeClass,
    label,
    infoTextClass,
    infoText,
    wrapperClass
  };

  if (placeholder) {
    return (
      <InputContainer {...containerProps}>
        <textarea
          {...attributes}
          {...extraAttributes}
          {...sharedAttributes}
          className={inputClasses}
          placeholder={placeholder}
          data-testid={testId}
        />
      </InputContainer>
    );
  }

  if (normalized) {
    return (
      <InputContainer {...containerProps}>
        <textarea
          {...attributes}
          {...extraAttributes}
          {...sharedAttributes}
          className={inputClasses}
          readOnly
          data-testid={testId}
        />
      </InputContainer>
    );
  }
  if (label || infoText) {
    return (
      <InputContainer {...containerProps}>
        <textarea
          {...attributes}
          {...extraAttributes}
          {...sharedAttributes}
          className={inputClasses}
          data-testid={testId}
        />
      </InputContainer>
    );
  }

  return (
    <textarea
      {...attributes}
      {...extraAttributes}
      className={inputClasses}
      {...sharedAttributes}
      ref={innerRef}
      data-testid={testId}
    />
  );
};
