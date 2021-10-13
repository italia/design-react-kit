import React, { FC, HTMLAttributes } from 'react';
import { CSSModule, ModalBody as InnerModalBody } from 'reactstrap';

export interface ModalBodyProps extends HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

export const ModalBody: FC<ModalBodyProps> = (props) => (
  <InnerModalBody {...props} />
);
