import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import { Icon } from '../Icon/Icon';

export interface DimmerProps extends HTMLAttributes<HTMLElement> {
  /** Il nome dell'icona da mostrare */
  icon?: string;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary';
  /** Classi aggiuntive da usare per il componente Dimmer */
  className?: string;
  /** Mostra il wrapper */
  show?: boolean;
  /**
   * Classi aggiuntive da usare per il componente contenitore del Dimmer
   * Per replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,
   * passare `true`.
   * */
  wrapperClassName?: string | true;
  testId?: string;
}

export const Dimmer: FC<DimmerProps> = ({
  icon,
  color,
  className,
  show = true,
  wrapperClassName,
  testId,
  ...attributes
}) => {
  const { children, ...rest } = attributes,
    classes = classNames('dimmer fade', { show: show }, wrapperClassName === true ? className : wrapperClassName, {
      [`dimmer-${color}`]: color
    }),
    innerClasses = classNames('dimmer-inner', className),
    dimmerIcon = icon && (
      <div className='dimmer-icon'>
        <Icon icon={icon} />
      </div>
    );

  return (
    <div className={classes} {...rest} data-testid={testId} aria-hidden={show ? undefined : true}>
      <div className={innerClasses} {...rest}>
        {dimmerIcon}
        {children}
      </div>
    </div>
  );
};
