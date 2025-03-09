import React from 'react';
import { Icon } from '../Icon/Icon';
import { useTransferContext } from './useTransferContext';

const ResetButton = () => {
  const { reset, isChanged } = useTransferContext();
  const handleReset = () => {
    reset();
  };
  return (
    <>
      <a
        className={`reset ${isChanged ? 'active' : ''}`}
        href='#'
        role='button'
        aria-label='Reset'
        onClick={handleReset}
      >
        <Icon icon='it-restore' />
      </a>
      <span className='visually-hidden'>Etichetta per icona di reset</span>
    </>
  );
};

export { ResetButton };
