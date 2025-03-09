import React from 'react';
import { useTransferContext } from './useTransferContext';

const BacktransferButton = () => {
  const { targetCandidates, sourceItems, targetItems, setSourceItems, setTargetItems, setTargetCandidates } =
    useTransferContext();
  const handleTransfer = () => {
    const newTargetItems = targetItems.filter((item) => !targetCandidates.includes(item.id));
    const newSourceItems = sourceItems.concat(targetItems.filter((item) => targetCandidates.includes(item.id)));
    setSourceItems({ items: newSourceItems });
    setTargetItems({ items: newTargetItems });
    setTargetCandidates([]);
  };
  return <button onClick={handleTransfer}>backtransfer </button>;
};

export { BacktransferButton };
