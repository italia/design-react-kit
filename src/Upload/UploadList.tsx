import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

export interface UploadListProps extends HTMLAttributes<HTMLUListElement> {
  /** Classi aggiuntive da usare per il componente lista del UploadList */
  className?: string;
  /** Indica che gli item list hanno l'immagine come anteprima */
  previewImage?: boolean;
  testId?: string;
}

export const UploadList: FC<UploadListProps> = ({ className, previewImage, ...attributes }) => {
  const classes = classNames('upload-file-list', { 'upload-file-list-image': previewImage }, className);

  return <ul {...attributes} className={classes}></ul>;
};
