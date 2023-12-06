import React, { FC, HTMLAttributes } from 'react';
import { ModalFooter as InnerModalFooter } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

export interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

export const ModalFooter: FC<ModalFooterProps> = (props) => <InnerModalFooter {...props} />;
