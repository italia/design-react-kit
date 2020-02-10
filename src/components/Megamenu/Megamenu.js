import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Dropdown, DropdownMenu, DropdownToggle, Nav } from 'reactstrap'

const propTypes = {
    className: PropTypes.string,
}

class Megamenu extends React.Component {
    constructor() {
        super()
        this.state = {
            megamenuOpen: false
        }
        this.toggleShow = this.toggleShow.bind(this)
    }


    toggleShow = () => {
        this.setState({
            megamenuOpen: !this.state.megamenuOpen
        })
    }

    render() {
        const {
            className,
        } = this.props
        const classes = classNames(className, 'nav-item', 'dropdown', 'megamenu')
        return (
            <Nav>
                <Dropdown
                    className={classes}
                    isOpen={this.state.megamenuOpen}
                    toggle={this.toggleShow}
                    direction={"down"}
                    inNavbar
                    nav
                >
                    <DropdownToggle
                        className={`nav-link`}
                        tag={'a'}
                        caret
                    >
                        Megamenu
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.children}
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        )
    }
}

Megamenu.propTypes = propTypes
export default Megamenu
