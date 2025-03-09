import React from 'react';
import { Icon } from '../Icon/Icon';
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
  return (
    <>
      <a
        className={`transfer ${sourceCandidates.length > 0 ? 'active' : ''}`}
        href='#'
        role='button'
        aria-label='Sposta avanti'
        onClick={handleTransfer}
      >
        <Icon icon='it-arrow-right' />
      </a>
      <span className='visually-hidden'>Etichetta per freccia destra</span>
    </>
  );
};

export { TransferButton };
