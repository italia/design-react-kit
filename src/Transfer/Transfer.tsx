import React from 'react';
import { BacktransferButton } from './BacktransferButton';
import { Item } from './Item';
import { ResetButton } from './ResetButton';
import { Source } from './Source';
import { Target } from './Target';
import { TransferButton } from './TranferButton';

const Transfer = ({ children }: { children: React.ReactNode }) => {
  return <>Transfer {children}</>;
};

Transfer.Source = Source;
Transfer.Target = Target;

Transfer.Item = Item;

Transfer.TransferButton = TransferButton;

Transfer.BacktransferButton = BacktransferButton;

Transfer.ResetButton = ResetButton;

export { Transfer };
