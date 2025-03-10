import React from 'react';
import { Icon } from '../Icon/Icon';
import { useTransferContext } from './useTransferContext';

const TransferButton = () => {
  const { sourceCandidates, sourceItems, targetItems, setSourceItems, setTargetItems, setSourceCandidates } =
    useTransferContext();
  const handleTransfer: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const newSourceItems = sourceItems.filter((item) => !sourceCandidates.includes(item.id));
    const newTargetItems = targetItems.concat(sourceItems.filter((item) => sourceCandidates.includes(item.id)));
    setSourceItems({ items: newSourceItems });
    setTargetItems({ items: newTargetItems });
    setSourceCandidates([]);
  };
  return (
    <>
      <a
        data-testid='transfer-button'
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
