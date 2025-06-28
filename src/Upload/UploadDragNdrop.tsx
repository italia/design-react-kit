import classNames from 'classnames';
import React, { DragEventHandler, FC, useState } from 'react';
import DragandDropIcon from '../assets/upload-drag-drop-icon.svg';
import { Icon } from '../Icon/Icon';

interface UploadDragNdropProps {
  /**
   * Array di file per il caricamento del file
   */
  files: File[];
  /**
   * Funzione per impostare lo stato dei files
   */
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export const UploadDragNdrop: FC<UploadDragNdropProps> = ({ files, setFiles }) => {
  const [dragOverClass, setDragOverClass] = useState(false),
    dragOverClasses = classNames('upload-dragdrop', {
      dragover: dragOverClass,
      success: files.length > 0
    });

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
      handleDrag(event);
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length > 0) {
        setFiles(Array.from(droppedFiles));
      }
      setDragOverClass(false);
    },
    handleDrag: DragEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
    handleDragOver: DragEventHandler<HTMLDivElement> = (event) => {
      handleDrag(event);
      setDragOverClass(true);
    },
    handleDragLeave: DragEventHandler<HTMLDivElement> = (event) => {
      handleDrag(event);
      setDragOverClass(false);
    };

  const byteConverter = (bytes: number) => {
    const K_UNIT = 1024;
    const SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

    if (bytes == 0) return '0 Byte';

    const i = Math.floor(Math.log(bytes) / Math.log(K_UNIT)),
      resp = parseFloat((bytes / Math.pow(K_UNIT, i)).toFixed(2)) + ' ' + SIZES[i];

    return resp;
  };

  return (
    <div className={dragOverClasses}>
      <div
        className='upload-dragdrop-image'
        onDrop={handleDrop}
        onDrag={handleDrag}
        onDragStart={handleDrag}
        onDragEnd={handleDrag}
        onDragExit={handleDrag}
        onDragOver={handleDragOver}
        onDragEnter={handleDrag}
        onDragLeave={handleDragLeave}
      >
        <img src={DragandDropIcon} alt='descrizione immagine' aria-hidden='true' />
        {files.length > 0 && (
          <div className='upload-dragdrop-success'>
            <Icon icon='it-check' size='xs' />
          </div>
        )}
      </div>
      <div className='upload-dragdrop-text'>
        {files.length > 0 && (
          <p className='upload-dragdrop-weight'>
            <Icon icon='it-file' size='xs' />
            {files.map((file) => file.type + ' ' + byteConverter(file.size))}
          </p>
        )}
        {files.length > 0 ? (
          <>
            <h5>{files.map((file) => file.name)}</h5>
            <p>Caricamento completato</p>
          </>
        ) : (
          <>
            <h5>Trascina il file per caricarlo</h5>
            <p>
              oppure <input type='file' name='upload7' id='upload7' className='upload-dragdrop-input' />
              <label htmlFor='upload7'>selezionalo dal dispositivo</label>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
