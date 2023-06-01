import classNames from 'classnames';
import React, { ElementType, FC, useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export interface CalloutMoreFooterProps {
  id?: string;
  /** Utilizzarlo in caso si utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente */
  className?: string;
  fileUrl?: string;
}

export const CalloutMoreFooter: FC<CalloutMoreFooterProps> = ({
  id = 'cm-footer',
  tag = 'div',
  className,
  fileUrl,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('collapse-div', className);

  const [isOpen, setOpen] = useState(false);

  return (
    <Tag {...attributes} className={classes}>
      <div className='collapse-header' id={`${id}-heading`}>
        <Button
          color='primary'
          className='callout-more-toggle'
          onClick={() => setOpen(!isOpen)}
          aria-controls={`${id}-collapse`}
          aria-expanded={isOpen}
          style={{ fontFamily: 'var(--bs-font-sans-serif)', fontSize: '1rem' }}
        >
          Leggi tutto <span></span>
        </Button>
        {fileUrl && (
          <a
            className='callout-more-download'
            href={fileUrl}
            style={{
              fontFamily: 'var(--bs-font-sans-serif)',
              fontSize: '1rem'
            }}
          >
            <Icon icon='it-download' />
            <span className='visually-hidden'>PDF</span>Download
          </a>
        )}
      </div>
      <div
        className={`collapse ${isOpen ? 'show' : ''}`}
        role='tabpanel'
        id={`${id}-collapse`}
        aria-labelledby={`${id}-heading`}
      >
        <div className='collapse-body'>{children}</div>
      </div>
    </Tag>
  );
};
