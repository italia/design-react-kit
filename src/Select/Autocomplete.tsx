import React from 'react';
import { components, OptionProps } from 'react-select';
import AsyncSelect from 'react-select/async';
import { Icon } from '../Icon/Icon';
import type {
  IndicatorProps,
  OptionTypeBase,
  GroupTypeBase,
  InputProps
} from 'react-select';
import { Props as AsyncSelectProps } from 'react-select/async';
import { styles } from './shared';

const AutocompleteInput = (props: InputProps) => {
  if (props.isHidden) {
    return <components.Input {...props} />;
  }
  return (
    <div style={{ border: `1px dotted blue}` }}>
      <components.Input {...props} />
    </div>
  );
};

const AutocompleteDropdownIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <span style={{ padding: '0px 5px' }} aria-hidden='true'>
        <Icon icon='it-search' aria-hidden size='sm' />
      </span>
    </components.DropdownIndicator>
  );
};

export interface AutocompleteProps<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType>
> extends AsyncSelectProps<OptionType, IsMulti, GroupType> {
  /**
   * Utilizzare questo attributo per renderizzare ciascun singolo risultato in modo personalizzato.
   * Per maggiore documentazione fare riferimento al componente Option di react-select: https://react-select.com/props#components
   * */
  optionRender?: (
    props: OptionProps<OptionType, IsMulti, GroupType> & {
      originalComponent: typeof components.Option;
    }
  ) => JSX.Element;
}

export const Autocomplete = <
  OptionType extends OptionTypeBase = { label: string; value: string },
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  cacheOptions = true,
  placeholder = 'Testo da cercare',
  optionRender,
  ...props
}: AutocompleteProps<OptionType, IsMulti, GroupType>) => {
  const selectComponents = {
    ...props.components,
    // probably we want to memoize this in the future
    Option: optionRender
      ? (props: OptionProps<OptionType, IsMulti, GroupType>) =>
          optionRender({ ...props, originalComponent: components.Option })
      : components.Option,
    Input: AutocompleteInput,
    DropdownIndicator: AutocompleteDropdownIndicator,
    IndicatorSeparator: null
  };
  return (
    <AsyncSelect
      components={selectComponents}
      cacheOptions={cacheOptions}
      placeholder={placeholder}
      styles={styles}
      {...props}
    />
  );
};
