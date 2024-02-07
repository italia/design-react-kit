import React, { FC, HTMLAttributes } from 'react';
import { ModalBody as InnerModalBody } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

export interface ModalBodyProps extends HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

export const ModalBody: FC<React.PropsWithChildren<React.PropsWithChildren<ModalBodyProps>>> = (props) => <InnerModalBody {...props} />;
