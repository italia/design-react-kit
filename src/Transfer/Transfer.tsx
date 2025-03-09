import React from 'react';
import { BacktransferButton } from './BacktransferButton';
import { Item } from './Item';
import { ResetButton } from './ResetButton';
import { Source } from './Source';
import { Target } from './Target';
import { TransferButton } from './TransferButton';
import { TransferContextProvider, useTransfer } from './useTransferContext';

const Transfer = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransferContextProvider>
      <div data-testid='test-id-transfer'>{children}</div>
    </TransferContextProvider>
  );
};

Transfer.Source = Source;
Transfer.Target = Target;

Transfer.Item = Item;

Transfer.TransferButton = TransferButton;

Transfer.BacktransferButton = BacktransferButton;

Transfer.ResetButton = ResetButton;

Transfer.useTransfer = useTransfer;

export { Transfer };
