import React, { ElementType, FC, ReactNode } from 'react';

import { Label, Input } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';
import { InputProps } from '../Input/Input';

export interface ToggleProps extends InputProps {
  /** Label da mostrare per il componente */
  label: string | ReactNode;
  /** Dimensioni ammissibili per il componente */
  bsSize?: 'lg' | 'sm';
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: React.Ref<HTMLInputElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  testId?: string;
}

export const Toggle: FC<ToggleProps> = ({ label, testId, ...rest }) => {
  return (
    <div className='toggles' data-testid={testId}>
      <Label check>
        {label}
        <Input {...rest} type='checkbox' />
        <span className='lever' />
      </Label>
    </div>
  );
};
