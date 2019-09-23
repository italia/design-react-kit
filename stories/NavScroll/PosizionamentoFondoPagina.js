import React, { Fragment } from "react";

class PosizionamentoFondoPagina extends React.Component {
  state = {
    isNavOpen: false
  };

  onNavScrollToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isNavOpen: !prevState.isNavOpen
    }));
  };

  render() {
    return (
      <Fragment>
        <nav className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side">
          <button
            className={
              this.state.isNavOpen
                ? "custom-navbar-toggler focus--mouse"
                : "custom-navbar-toggler"
            }
            type="button"
            aria-controls="navbarNav"
            aria-expanded={this.state.isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            data-target="#navbarNav"
            onClick={this.onNavScrollToggle}
          >
            <span className="it-list"></span>1. Introduzione
          </button>
          <div
            className={
              this.state.isNavOpen
                ? "navbar-collapsable expanded"
                : "navbar-collapsable"
            }
            id="navbarNav"
            style={
              this.state.isNavOpen ? { display: "block" } : { display: "none" }
            }
          >
            <div
              className="overlay"
              style={
                this.state.isNavOpen
                  ? { display: "block" }
                  : { display: "none" }
              }
            ></div>
            <div className="close-div sr-only">
              <button className="btn close-menu" type="button">
                <span className="it-close"></span>close
              </button>
            </div>
            <a
              className="it-back-button"
              href="#"
              style={
                this.state.isNavOpen
                  ? { display: "block" }
                  : { display: "none" }
              }
              onClick={this.onNavScrollToggle}
            >
              <svg className="icon icon-sm icon-primary align-top">
                <use xlinkHref="/svg/sprite.svg#it-chevron-left"></use>
              </svg>
              <span>Back </span>
            </a>
            <div className="menu-wrapper">
              <div className="link-list-wrapper">
                <h3 className="no_toc">header</h3>
                <ul className="link-list">
                  <li className="nav-item active">
                    <a className="nav-link active" href="#">
                      <span>1. Introduzione </span>
                    </a>
                    <ul className="link-list">
                      <li className="nav-link active">
                        <a className="nav-link active" href="#">
                          <span>1.1 Nested Item (active) </span>
                        </a>
                        <ul className="tertiary link-list">
                          <li className="nav-link">
                            <a className="nav-link" href="#">
                              <span>1.1.1 Nested Item </span>
                            </a>
                          </li>
                          <li className="nav-link">
                            <a className="nav-link" href="#">
                              <span>1.1.2 Nested Item </span>
                            </a>
                          </li>
                          <li className="nav-link">
                            <a className="nav-link" href="#">
                              <span>1.1.3 Nested Item </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-link">
                        <a className="nav-link" href="#">
                          <span>1.2 Nested Item </span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a className="nav-link" href="#">
                          <span>1.3 Nested Item </span>
                        </a>
                      </li>
                    </ul>
                    <a className="nav-link" href="#">
                      <span>2. List item </span>
                    </a>
                    <ul className="link-list">
                      <li className="nav-link">
                        <a className="nav-link" href="#">
                          <span>2.1 Nested Item </span>
                        </a>
                        <ul className="tertiary link-list">
                          <li className="nav-link">
                            <a className="nav-link" href="#">
                              <span>2.1.1 Nested Item </span>
                            </a>
                          </li>
                          <li className="nav-link">
                            <a className="nav-link" href="#">
                              <span>2.1.2 Nested Item </span>
                            </a>
                          </li>
                          <li className="nav-link">
                            <a className="nav-link" href="#">
                              <span>2.1.3 Nested Item </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-link">
                        <a className="nav-link" href="#">
                          <span>2.2 Nested Item </span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a className="nav-link" href="#">
                          <span>2.3 Nested Item </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default PosizionamentoFondoPagina;
