import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';
import { Progress } from '../Progress/Progress';

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
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  buttonTag?: ElementType;
  /** Nome del file */
  fileName: string;
  /** Peso del file */
  fileWeight?: string;
  /** Valore della barra progress in caso uploadStatus sia uploading */
  progressValue?: number;
  /** Indica che gli item list hanno l'immagine come anteprima */
  previewImage?: boolean;
  previewImageSrc?: string;
  previewImageAlt?: string;
  testId?: string;
}

export const UploadListItem: FC<UploadListItemProps> = ({
  className,
  icon = 'it-file',
  uploadStatus = 'success',
  buttonTag = 'button',
  progressValue,
  previewImage,
  previewImageSrc,
  previewImageAlt,
  fileName,
  fileWeight,
}) => {
  const classes = classNames(
    'upload-file',
    { success: uploadStatus === 'success', uploading: uploadStatus === 'uploading', error: uploadStatus === 'error' },
    className
  ),
    classesProgress = classNames({ 'progress-image': previewImage }),
    ButtonTag = buttonTag;

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
      {previewImage
        ? <div className="upload-image">
          <img src={previewImageSrc} alt={previewImageAlt} />
        </div>
        :
        <Icon icon={icon} size='sm' />
      }
      <p>
        <span className='visually-hidden'>{elementiListItem[uploadStatus].testoVHFile}</span>
        {fileName} {uploadStatus === 'success' && <span className='upload-file-weight'>{fileWeight}</span>}
      </p>
      <ButtonTag disabled={uploadStatus === 'success' ? true : false}>
        <span className='visually-hidden'>{elementiListItem[uploadStatus].testoVHRightIcon}</span>
        <Icon icon={elementiListItem[uploadStatus].rightIcon} />
      </ButtonTag>
      {uploadStatus === 'uploading' && <Progress value={progressValue} wrapperClassName={classesProgress} />}
    </li>
  );
};
