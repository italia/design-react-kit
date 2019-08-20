import React, { Fragment } from "react";
import PropTypes from 'prop-types';



class ComponenteMenuInline extends React.Component {

    render() {
        return (
            <Fragment>
                <nav className="inline-menu">
                    <div className="link-list-wrapper">
                        <ul className="link-list">
                            <ComponenteMenuList collapseN="One"></ComponenteMenuList>
                            <ComponenteMenuList collapseN="Two"></ComponenteMenuList>
                            <ComponenteMenuList collapseN="Three"></ComponenteMenuList>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default ComponenteMenuInline;


class ComponenteMenuList extends React.Component {

      constructor(props) {
            super(props);
      }

      state = { isNavOpen: false };

      onNavScrollToggle = (e) => {
            e.preventDefault();
          this.setState(prevState => ({
              ...prevState,
              isNavOpen: !prevState.isNavOpen
          }));
      };

      render() {
            const collapseN = this.props.collapseN;
            return (
                <li>
                    <a className={this.state.isNavOpen?"list-item large medium right-icon":"list-item large medium right-icon collapsed"} href={`#collapse${collapseN}`} data-toggle="collapse" aria-expanded="false" aria-controls="collapseOne" onClick={(e)=>this.onNavScrollToggle(e)}>
                        <span>Link list 1</span>
                        <svg className="icon icon-primary icon-sm"><use xlinkHref="/svg/sprite.svg#it-expand"></use></svg>
                    </a>
                    <ul className={this.state.isNavOpen?"link-sublist collapse show":"link-sublist collapse"} id="collapseOne">
                        <li><a className="list-item" href="#"><span>Link list 1</span></a></li>
                        <li><a className="list-item" href="#"><span>Link list 1</span></a></li>
                        <li><a className="list-item" href="#"><span>Link list 1</span></a></li>
                    </ul>
                </li>

            );
      }

}


ComponenteMenuList.propTypes = {
      collapseN: PropTypes.string
};

