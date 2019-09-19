import React, { PureComponent } from 'react';

const propTypes = {
};

const defaultProps = {};

class HeaderLinkZone extends PureComponent {

    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {...attributes } = this.props;
        return (
            <div className="nav-mobile">
                <nav {...attributes}/>
            </div>);
    }
}

export default HeaderLinkZone;