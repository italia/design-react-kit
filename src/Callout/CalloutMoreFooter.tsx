import classNames from 'classnames';
import React, { ElementType, FC, useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export interface CalloutMoreFooterProps {
  /** Utilizzarlo in caso si utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente */
  className?: string;
  fileUrl?: string;
}

export const CalloutMoreFooter: FC<CalloutMoreFooterProps> = ({
  tag = 'div',
  className,
  fileUrl = '#',
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('collapse-div', className);

  const [isOpen, setOpen] = useState(false);

  return (
    <Tag {...attributes} className={classes}>
      <div className='collapse-header' id='heading1'>
        <Button
          color='primary'
          className='callout-more-toggle'
          onClick={() => setOpen(!isOpen)}
          aria-controls='collapse1'
          aria-expanded={isOpen}
          style={{ fontFamily: 'var(--bs-font-sans-serif)', fontSize: '1rem' }}
        >
          Leggi tutto <span></span>
        </Button>
        <a
          className='callout-more-download'
          href={fileUrl}
          style={{ fontFamily: 'var(--bs-font-sans-serif)', fontSize: '1rem' }}
        >
          <Icon icon='it-download' />
          <span className='visually-hidden'>PDF</span>Download
        </a>
      </div>
      <div
        className={`collapse ${isOpen ? 'show' : ''}`}
        role='tabpanel'
        id='collapse1'
        aria-labelledby='heading1'
      >
        <div className='collapse-body'>{children}</div>
      </div>
    </Tag>
  );
};
