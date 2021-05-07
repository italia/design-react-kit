import React, {FC, HTMLAttributes, ElementType, ReactNode} from 'react';
import classNames from 'classnames'
import {Icon} from '../Icon/Icon'

const variants = {
  'confirmed': 'confirmed',
  'active': 'active',
  'done': 'done',
  'mobile': 'steppers-index',
  // @deprecated
  'steppers-index':'steppers-index'
} as const;

export interface StepperHeaderElementProps extends HTMLAttributes<HTMLLIElement>{
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente StepperHeader */
  className?: string;
  /** 
   * Il tipo di step: 
   * * confirmed (confermato),
   * * active (attivo - su mobile viene mostrato solo questo) 
   * * done (completato)
   * * mobile (visibile solo su mobile, usato per mostrare lo stato attuale di progresso)
   * * steppers-index (deprecato) usare mobile
   * */
  variant?: keyof typeof variants,
  /** Icona da mostrare alla destra dell'etichetta dello step */
  appendIcon?: string;
  /** Icona da mostrare alla sinistra dell'etichetta dello step */
  prependIcon?: string,
  /** Utilizzare questo attributo per elementi aggiuntivi da mostrare su dispositivi mobile per lo step attivo */
  stepperNumber?: ReactNode,
  /** Nasconde il bordo inferiore azzurro per lo step */
  noLine?: boolean;
  /** Deprecato: usare `appendIcon` */
  icon?: string;
  /** Deprecato: usare `prependIcon` */
  iconName?: string;
}

export const StepperHeaderElement: FC<StepperHeaderElementProps> = ({
  tag: Tag,
  variant,
  appendIcon,
  prependIcon,
  icon,
  iconName,
  noLine,
  stepperNumber,
  children,
  className,
  ...attributes
}) => {
  const wrapperClasses = classNames(variant, className, { 'no-line': noLine })
  const iconClass = classNames('icon', 'steppers-success')
  const spanClass = classNames('steppers-number')

  const iconToAppend = appendIcon || icon;
  const iconToPepend = prependIcon || iconName;
  return (
    <li {...attributes} className={wrapperClasses}>
      {iconToPepend && <Icon icon={iconToPepend} />}
      {stepperNumber && <span className={spanClass}>{stepperNumber}</span>}
      {children}
      {iconToAppend && <Icon icon={iconToAppend} className={iconClass} />}
    </li>
  )
}
