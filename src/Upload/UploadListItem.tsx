import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import { Button } from 'reactstrap';
import { Icon } from '../Icon/Icon';

export interface UploadListItemProps extends HTMLAttributes<HTMLUListElement> {
  /** Classi aggiuntive da usare per il componente lista del UploadList */
  className?: string;
  /**
   * Indica l'icona del file
   * @default it-file
   */
  icon?: string;
  /**
   * Indica lo stato dell'upload
   * @default success
   */
  uploadStatus?: 'success' | 'uploading' | 'error';
  /** Nome del file */
  fileName: string;
  /** Peso del file */
  fileWeight: string;
  testId?: string;
}

export const UploadListItem: FC<UploadListItemProps> = ({
  className,
  icon = 'it-file',
  uploadStatus = 'success',
  fileName,
  fileWeight,
  testId,
  ...attributes
}) => {
  const classes = classNames(
    'upload-file',
    { success: uploadStatus === 'success', uploading: uploadStatus === 'uploading', error: uploadStatus === 'error' },
    className
  );

  const elementiListItem = {
    success: {
      testoVHFile: 'File caricato:',
      testoVHRightIcon: 'Caricamento ultimato',
      rightIcon: 'it-check'
    },
    uploading: {
      testoVHFile: 'File caricato:',
      testoVHRightIcon: 'Annulla caricamento',
      rightIcon: 'it-close'
    },
    error: {
      testoVHFile: 'Errore caricamento file:',
      testoVHRightIcon: 'Elimina file caricato',
      rightIcon: 'it-close'
    }
  };

  return (
    <li className={classes}>
      <Icon icon={icon} />
      <p>
        <span className='visually-hidden'>{elementiListItem[uploadStatus].testoVHFile}</span>
        {fileName} {uploadStatus === 'success' && <span className='upload-file-weight'>{fileWeight}</span>}
      </p>
      <Button disabled>
        <span className='visually-hidden'>{elementiListItem[uploadStatus].testoVHRightIcon}</span>
        <Icon icon={elementiListItem[uploadStatus].rightIcon} />
      </Button>
    </li>
  );
};
