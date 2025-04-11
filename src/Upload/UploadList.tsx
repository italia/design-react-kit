import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import { UploadContext } from './useUploadContext';

export interface UploadListProps extends HTMLAttributes<HTMLUListElement> {
  /** Classi aggiuntive da usare per il componente lista del UploadList */
  className?: string;
  /** Indica che gli item list hanno l'immagine come anteprima */
  previewImage?: boolean;
  /** Indica la tipologia di lista
   * @default file
   */
  tipologia: 'file' | 'gallery';
  testId?: string;
}

export const UploadList: FC<UploadListProps> = ({ className, previewImage, tipologia = 'file', ...attributes }) => {
  const classes = classNames(
    { 'upload-file-list': tipologia == 'file' },
    { 'upload-pictures-wall': tipologia == 'gallery' },
    { 'upload-file-list-image': previewImage },
    className
  );

  return (
    <UploadContext.Provider value={{ tipologia }}>
      <ul {...attributes} className={classes} />
    </UploadContext.Provider>
  );
};
