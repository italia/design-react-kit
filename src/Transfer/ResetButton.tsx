import React from 'react';
import { useTransferContext } from './useTransferContext';

const ResetButton = () => {
  const {
    originalSourceItems,
    originalTargetItems,
    setSourceItems,
    setTargetItems,
    setSourceCandidates,
    setTargetCandidates
  } = useTransferContext();
  const handleReset = () => {
    setSourceItems(originalSourceItems);
    setTargetItems(originalTargetItems);
    setSourceCandidates([]);
    setTargetCandidates([]);
  };
  return <button onClick={handleReset}>reset </button>;
};

export { ResetButton };
