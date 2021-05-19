import React, { FC, ReactElement } from 'react';
import SelectBase, { components } from 'react-select';
import { Icon } from '../Icon/Icon';
import type {
  Props as SelectBaseProps,
  IndicatorProps,
  OptionTypeBase,
  GroupTypeBase,
  OptionProps
} from 'react-select';

export interface SelectProps<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType>
> extends SelectBaseProps<OptionType, IsMulti, GroupType> {
  icon?: boolean;
  clearText?: string;
}

const DropdownIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon='it-arrow-down-triangle' aria-hidden />
    </components.DropdownIndicator>
  );
};

const Option = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: OptionProps<OptionType, IsMulti, GroupType>
) => {
  return (
    <div className='select-pill text-primary'>
      <components.Option {...props} />
    </div>
  );
};

const black = '#000';
const primary = '#06c';
const primaryDark = '#435a70';
const primaryDarker = '#17324d';

// Types here depend of react-select internal emotion dep + more parametric stuff
// @TODO: fix it this way for now, will review later on
const styles = {
  container: (provided: any) => ({ ...provided, height: '2.5rem' }),
  control: (provided: any) => ({
    ...provided,
    height: '2.5rem',
    borderRadius: '0',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: `solid ${primaryDark} 1px`,
    boxShadow: 'none',
    '&:hover': { borderBottom: `solid ${primaryDark} 1.25px` } // border style on hover
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    fill: primaryDark
  }),
  option: (provided: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...provided,
    background: 'white',
    textDecoration: isFocused || isSelected ? 'underline' : 'none',
    color: isSelected ? primaryDarker : primary,
    cursor: isDisabled ? 'not-allowed' : 'pointer'
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fill: primaryDark
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: black,
    fontWeight: 'bold'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: '2.5rem'
  })
};

const CustomClearText: FC<{ clearText: string }> = ({ clearText }) => (
  <>{clearText}</>
);

export const Select = <
  OptionType extends OptionTypeBase = { label: string; value: string },
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  clearText = 'Annulla',
  icon = false,
  ...props
}: SelectProps<OptionType, IsMulti, GroupType>): ReactElement<
  SelectProps<OptionType, IsMulti, GroupType>
> => {
  // @TODO: move it outside when migrating to hooks
  const ClearIndicator = <
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
  >(
    clearIndicatorProps: IndicatorProps<OptionType, IsMulti, GroupType>
  ) => {
    const {
      children = <CustomClearText clearText={clearText} />,
      innerProps: { ref, ...restInnerProps }
    } = clearIndicatorProps;
    return (
      <div className='select-pill text-primary' {...restInnerProps} ref={ref}>
        <div style={{ padding: '0px 5px' }}>{children}</div>
      </div>
    );
  };

  const selectComponents = {
    ...props.components,
    Option,
    DropdownIndicator,
    IndicatorSeparator: null
  };

  if (props.isClearable) {
    selectComponents.ClearIndicator = ClearIndicator;
  }
  return (
    <SelectBase {...props} components={selectComponents} styles={styles} />
  );
};

export default Select;
