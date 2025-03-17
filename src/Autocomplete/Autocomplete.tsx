import React, { FC, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore non ci sono i types
import BaseAutocomplete from 'accessible-autocomplete/react';
// Reference to https://www.npmjs.com/package/accessible-autocomplete
// Implementation example: https://github.com/alphagov/accessible-autocomplete/blob/main/examples/react/index.html

export interface AutocompleteAttributes {
  /** Identificativo */
  id: string;
  /** Label */
  label: string;
  /** Valori all'interno della select */
  source: (query: string, syncResults: () => void) => void;
  /** Valori chiave - valore all'interno della select */
  onConfirm?: (value: string) => void;
  /** Placeholder (default: ``) */
  placeholder?: string;
  /** Valore di default (default: ``) */
  defaultValue?: string;
  /** Modalità display menu (default: `inline`) */
  displayMenu?: string;
  /** Utilizzare per mostrare il successo nella validazione del valore nel campo Input */
  valid?: boolean;
  /** Testo di validazione per l'elemento del moduleo form. */
  validationText?: string;
  /** Funzione ritornante stringa in caso di nessun risultato */
  tNoResults?: () => string;
  /** Funzione ritornante stringa di suggerimento */
  tAssistiveHint?: () => string;
  /** Funzione ritornante stringa se la query è troppo corta */
  tStatusQueryTooShort?: () => string;
  /** Funzione ritornante stringa se non ci sono risultati di ricerca */
  tStatusNoResults?: () => string;
  /** Funzione ritornante stringa che identifica l'opzione selezionata */
  tStatusSelectedOption?: () => string;
  /** Funzione ritornante stringa che identifica i risultati */
  tStatusResults?: () => string;
  /** Classi aggiuntive da usare per il componente Button */
  className?: string;
  testId?: string;
}

const tAssistiveHintDefault = () =>
  'Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento';
const tNoResultsDefault = () => 'Nessun risultato trovato';
const tStatusQueryTooShortDefault = (minQueryLength: number) =>
  `Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`;
const tStatusNoResultsDefault = () => 'Nessun risultato di ricerca';
const tStatusSelectedOptionDefault = (selectedOption: number, length: number, index: number) =>
  `${selectedOption} ${index + 1} di ${length} è sottolineato`;
const tStatusResultsDefault = (length: number, contentSelectedOption: number) => {
  const words = {
    result: length === 1 ? 'risultato' : 'risultati',
    is: length === 1 ? 'è' : 'sono',
    available: length === 1 ? 'disponibile' : 'disponibili'
  };

  return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`;
};

export const Autocomplete: FC<AutocompleteAttributes> = ({
  tAssistiveHint = tAssistiveHintDefault,
  tNoResults = tNoResultsDefault,
  tStatusQueryTooShort = tStatusQueryTooShortDefault,
  tStatusNoResults = tStatusNoResultsDefault,
  tStatusSelectedOption = tStatusSelectedOptionDefault,
  tStatusResults = tStatusResultsDefault,
  placeholder = '',
  defaultValue = '',
  displayMenu = 'inline',
  source,
  validationText,
  onConfirm,
  ...attributes
}) => {
  const { id, valid } = attributes;
  const validityCheck = valid === true || valid === false;

  useEffect(() => {
    const inputElement: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
    const labelElement = inputElement?.parentElement?.parentElement?.getElementsByTagName('label')[0];

    if (inputElement.value !== '') {
      labelElement?.classList.add('active');
    }

    inputElement?.addEventListener('focus', () => {
      labelElement?.classList.add('active');
    });
    inputElement?.addEventListener('blur', () => {
      if (inputElement.value === '') {
        labelElement?.classList.remove('active');
      }
      if (onConfirm) {
        onConfirm(inputElement.value);
      }
    });
  }, [id]);

  return (
    <>
      <label htmlFor={attributes.id}>{attributes.label}</label>
      <BaseAutocomplete
        source={source}
        placeholder={placeholder}
        defaultValue={defaultValue}
        displayMenu={displayMenu}
        tAssistiveHint={tAssistiveHint}
        tNoResults={tNoResults}
        tStatusQueryTooShort={tStatusQueryTooShort}
        tStatusNoResults={tStatusNoResults}
        tStatusSelectedOption={tStatusSelectedOption}
        tStatusResults={tStatusResults}
        onConfirm={onConfirm}
        inputClasses={`form-control ${validityCheck && (valid === false ? 'is-invalid' : 'just-validate-success-field')}`}
        showNoOptionsFound={true}
        hintClasses='app-hint'
        autoselect={false}
        showAllValues={false}
        templates={undefined}
        confirmOnBlur={false}
        menuAttributes={null}
        menuClasses={null}
        {...attributes}
      />
      <div className='form-feedback just-validate-error-label form-text form-feedback just-validate-error-label'>
        {!valid && validationText}
      </div>
    </>
  );
};
