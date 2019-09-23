import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from 'jquery'

class Table extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    bordered: PropTypes.bool,
    compact: PropTypes.bool,
    striped: PropTypes.bool,
    hoverable: PropTypes.bool,
    responsive: PropTypes.bool
  }

  defaultProps = {
    bordered: true
  }

  componentDidMount() {
    if (this.props.responsive) {
      $(this.table).trigger('enhance.tablesaw')
    }
  }

  render() {
    const {
      children,
      className,
      bordered,
      compact,
      striped,
      hoverable,
      responsive,
      ...rest
    } = this.props

    if (responsive) {
      // eslint-disable-next-line
      console.info('TODO: responsive behaviour not implemented yet!');
    }

    const styles = classnames(
      {
        Table: true,
        'Table--withBorder': bordered,
        'Table--compact': compact,
        'Table--striped': striped,
        'Table--hover': hoverable
      },
      className
    )

    return (
      <table
        ref={el => {
          this.table = el
        }}
        className={styles}
        {...rest}>
        {children}
      </table>
    )
  }
}

export default Table
