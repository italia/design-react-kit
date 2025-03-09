import React from 'react';
import { useTransferContext } from './useTransferContext';

const TransferButton = () => {
  const { sourceCandidates, sourceItems, targetItems, setSourceItems, setTargetItems, setSourceCandidates } =
    useTransferContext();
  const handleTransfer = () => {
    const newSourceItems = sourceItems.filter((item) => !sourceCandidates.includes(item.id));
    const newTargetItems = targetItems.concat(sourceItems.filter((item) => sourceCandidates.includes(item.id)));
    setSourceItems({ items: newSourceItems });
    setTargetItems({ items: newTargetItems });
    setSourceCandidates([]);
  };
  return <button onClick={handleTransfer}>transfer </button>;
};

export { TransferButton };
