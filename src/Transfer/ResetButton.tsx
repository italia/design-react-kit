import React from 'react';
import { useTransferContext } from './useTransferContext';

const ResetButton = () => {
  const { reset } = useTransferContext();
  const handleReset = () => {
    reset();
  };
  return <button onClick={handleReset}>reset </button>;
};

export { ResetButton };
