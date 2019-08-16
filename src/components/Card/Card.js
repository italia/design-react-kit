import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { default as Icon } from '../Icon/Icon'
import { Button } from 'reactstrap'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  isBig: PropTypes.bool,
  hasShade: PropTypes.bool,
  hasSpace: PropTypes.bool,
  hasCTA: PropTypes.bool,
  hasLinkOnTitle: PropTypes.bool,
  isIconCard: PropTypes.bool,
  isSpecialCard: PropTypes.bool,
  isArticleCard: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  after: PropTypes.string,
  articleCategoryName: PropTypes.string,
  articleCategoryLink: PropTypes.string,
  articleDate: PropTypes.string,
  signature: PropTypes.string,
  link: PropTypes.string,
  iconName: PropTypes.string,
  tags: PropTypes.array,
  imageSrc: PropTypes.string,
  imageTitle: PropTypes.string,
  imageAlt: PropTypes.string
}

const defaultProps = {
  tag: 'div',
  link: false
}

class Card extends React.Component {
  render () {
    const {
      tag: Tag
    } = this.props

    const cardWrapperClasses = classNames(
      this.props.hasSpace ? 'card-space' : false,
      'card-wrapper'
    )
    const innerCardWrapperClasses = classNames(
      this.props.hasShade ? 'card-bg' : false,
      this.props.isBig ? 'card-big' : false,
      this.props.imageSrc ? 'card-img' : false,
      this.props.isSpecialCard ? 'special-card' : false,
      this.props.after ? 'no-after' : false,
      'card'
    )

    const iconTag = (this.props.isIconCard)
      ? <div className='categoryicon-top'>
        <Icon icon={this.props.iconName} />
        <span className='text'>{this.props.articleCategoryName}</span>
      </div> : false
    let titleTag = <h5 className='card-title'>{this.props.title}</h5>
    const imageTag = (this.props.imageSrc)
      ? <div className='img-responsive-wrapper'>
        <div className='img-responsive'>
          <figure className='img-wrapper'>
            <img src={this.props.imageSrc}
              title={this.props.imageTitle}
              alt={this.props.imageAlt} />
          </figure>
        </div>
      </div> : false
    const dateTag = (this.props.articleDate)
      ? <span className='data'>{this.props.articleDate}</span> : false
    const signatureTag = (this.props.signature) ? <span
      className='card-signature'>{this.props.signature}</span> : false
    const callToActionTag = (this.props.hasCTA)
      ? <Button outline color='primary' size='sm'>Action</Button> : false
    const cardFooterTag = (signatureTag || callToActionTag)
      ? <div className='it-card-footer'>
        {signatureTag}
        {callToActionTag}
      </div> : false

    let cardHeaderTag
    let readMoreTag

    if (this.props.link) {
      if (this.props.hasLinkOnTitle) {
        titleTag = <a href={this.props.link}>
          <h5 className='card-title'>{this.props.title}</h5>
        </a>
      } else {
        readMoreTag = <a className='read-more' href={this.props.link}>
          <span className='text'>Leggi di più</span>
          <Icon icon={'it-arrow-right'} />
        </a>
      }
    }

    if (this.props.isArticleCard) {
      cardHeaderTag = <div className='category-top'>
        <a className='category'
          href='{this.props.articleCategoryLink}'>{this.props.articleCategoryName}</a>
        {dateTag}
      </div>
    } else if (this.props.tags && this.props.tags.split(',').length) {
      cardHeaderTag = <div className='head-tags'>
        {this.props.tags.split(',').map((item, index) => (
          <span className='card-tag' key={index}>{item}</span>
        ))}
        {dateTag}
      </div>
    }

    return (
      <Tag className={cardWrapperClasses}>
        <div className={innerCardWrapperClasses}>
          {imageTag}
          <div className='card-body'>
            {cardHeaderTag}
            {iconTag}
            {titleTag}
            <p className='card-text'>{this.props.text}</p>
            {cardFooterTag}
            {readMoreTag}
          </div>
        </div>
      </Tag>
    )
  }
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export default Card
