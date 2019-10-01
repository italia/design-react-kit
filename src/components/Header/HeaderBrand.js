import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavbarBrand } from 'reactstrap'
import HeaderContext, { CENTER } from './HeaderContext'
import Icon from '../Icon/Icon'

const propTypes = {
  ...NavbarBrand.propTypes,
  /** Da usare con il componente Header Nav in versione "responsive" */
  responsive: PropTypes.bool
}

const defaultProps = {
  ...NavbarBrand.defaultProps,
  responsive: false
}

export default class HeaderBrand extends PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps
  static contextType = HeaderContext

  addChildClasses(child, i) {
    // convention here: first item is the main title, while others subtext
    const className = classNames(
      child.props.className,
      'no_toc',
      { 'd-none d-md-block': i } // subtext is anything but first element
    )

    const props = {
      className
    }

    return React.cloneElement(child, props)
  }

  render() {
    const {
      className,
      href,
      iconName,
      children,
      responsive,
      ...attributes
    } = this.props
    const { type } = this.context
    if (type !== CENTER) {
      const classes = classNames('d-lg-block', className, {
        'd-none': !responsive
      })
      return (
        <NavbarBrand className={classes} href={href} {...attributes}>
          {children}
        </NavbarBrand>
      )
    }
    return (
      <div className="it-brand-wrapper">
        <a href={href}>
          {iconName && <Icon icon={iconName} />}
          <div className="it-brand-text">
            {React.Children.map(children, (child, i) =>
              this.addChildClasses(child, i)
            )}
          </div>
        </a>
      </div>
    )
  }
}
