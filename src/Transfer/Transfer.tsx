import React from 'react';

const Transfer = ({ children }: { children: React.ReactNode }) => {
  return <>Transfer {children}</>;
};

const Source = ({ children }: { children: React.ReactNode }) => {
  return <>Source {children}</>;
};

Source.Header = () => {
  return <>Source.Header</>;
};

Transfer.Source = Source;

const Target = ({ children }: { children: React.ReactNode }) => {
  return <>Target {children}</>;
};

Target.Header = () => {
  return <>Target.Header</>;
};

Transfer.Target = Target;

Transfer.Item = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <>
      Item {id} {children}
    </>
  );
};

Transfer.TransferButton = () => {
  return <>TransferButton</>;
};

Transfer.BacktransferButton = () => {
  return <>BacktransferButton</>;
};

Transfer.ResetButton = () => {
  return <>ResetButton</>;
};

export { Transfer };
