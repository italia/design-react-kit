import React from 'react';
import { Icon } from '../Icon/Icon';
import { useTransferContext } from './useTransferContext';

const BacktransferButton = () => {
  const { targetCandidates, sourceItems, targetItems, setSourceItems, setTargetItems, setTargetCandidates } =
    useTransferContext();
  const handleTransfer: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const newTargetItems = targetItems.filter((item) => !targetCandidates.includes(item.id));
    const newSourceItems = sourceItems.concat(targetItems.filter((item) => targetCandidates.includes(item.id)));
    setSourceItems({ items: newSourceItems });
    setTargetItems({ items: newTargetItems });
    setTargetCandidates([]);
  };
  return (
    <>
      <a
        className={`backtransfer ${targetCandidates.length > 0 ? 'active' : ''}`}
        href='#'
        role='button'
        aria-label='Sposta indietro'
        onClick={handleTransfer}
        data-testid='backtransfer-button'
      >
        <Icon icon='it-arrow-left' />
      </a>
      <span className='visually-hidden'>Etichetta per freccia sinistra</span>
    </>
  );
};

export { BacktransferButton };
