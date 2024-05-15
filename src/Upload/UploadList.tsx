import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

export interface UploadListProps extends HTMLAttributes<HTMLUListElement> {
  /** Classi aggiuntive da usare per il componente lista del UploadList */
  className?: string;
  testId?: string;
}

export const UploadList: FC<UploadListProps> = ({
  className,
  testId,
  ...attributes
}) => {
  const classes = classNames('upload-file-list', className);

  return (
    <ul {...attributes} className={classes}></ul>
  );
};
