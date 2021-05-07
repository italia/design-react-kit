import React, { FC, ReactNode, ElementType } from 'react';
import classNames from 'classnames'

export interface AccordionHeaderProps {
  tag?: ElementType,
  className?: string,
  active?: boolean,
  onToggle?: () => void,
  append?: ReactNode
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({ className, tag: Tag = 'button', active, append, onToggle, ...attributes }) => {
  const classes = classNames('collapse-header')
  const toggleClasses = classNames(className, {
    collapsed: active
  })

  return (
    <div className={classes}>
      <Tag
        data-toggle="collapse"
        aria-expanded={active ? 'true' : 'false'}
        className={toggleClasses}
        onClick={onToggle}
        {...attributes}
      />
      {append}
    </div>
  )
}

// AccordionHeader.propTypes = propTypes
// AccordionHeader.defaultProps = defaultProps
