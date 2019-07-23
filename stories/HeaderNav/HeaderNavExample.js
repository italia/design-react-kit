import React from "react";


class HeaderNavExample extends React.Component {


    state = {
            isDropdownOpen: false,
            isMegamenuOpen: false,
            isMainMenuOpen: false
        };
    toggleDropdown = () => {
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    };
    toggleMegamenu = () => {
        this.setState({ isMegamenuOpen: !this.state.isMegamenuOpen });
    };
    toggleMainMenu = () => {
        this.setState({ isMainMenuOpen: !this.state.isMainMenuOpen });
    }

  render() {

    return (
        <div className="it-header-navbar-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*start nav */}
              <nav className="navbar navbar-expand-lg has-megamenu">
                <button className="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded={this.state.isMainMenuOpen?"true":"false"} aria-label="Toggle navigation" data-target="#nav1"
                        onClick={this.toggleMainMenu}>
                    <svg className="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-burger"></use></svg>
                </button>
                <div className={this.state.isMainMenuOpen?"navbar-collapsable expanded":"expanded"} id="nav1" style={{display: this.state.isMainMenuOpen?'block':'none'}}>
                  <div className="overlay" style={{display: this.state.isMainMenuOpen?'block':'none'}} onClick={this.toggleMainMenu}></div>
                  <div className="close-div sr-only">
                    <button className="btn close-menu" type="button"><span className="it-close"></span>close</button>
                  </div>
                  <div className="menu-wrapper">
                    <ul className="navbar-nav">
                      <li className="nav-item active"><a className="nav-link active" href="#"><span>link 1 active </span><span className="sr-only">current</span></a></li>
                      <li className="nav-item"><a className="nav-link disabled" href="#"><span>link 2 </span></a></li>
                      <li className="nav-item"><a className="nav-link" href="#"><span>link 3 </span></a></li>
                      <li className="nav-item"><a className="nav-link" href="#"><span>link 4</span></a></li>
                      <li className="nav-item dropdown" onClick={this.toggleDropdown}>
                        <a className="nav-link dropdown-toggle" href=" javascript:void(0)" data-toggle="dropdown" aria-expanded="false">
                          <span>Dropdown item</span>
                           <svg className="icon icon-xs"><use xlinkHref="/svg/sprite.svg#it-expand"></use></svg>
                        </a>
                        <div className={this.state.isDropdownOpen?"dropdown-menu show":"dropdown-menu"}>
                          <div className="link-list-wrapper">
                            <ul className="link-list">
                              <li>
                                <h3 className="no_toc" id="heading-es-1">Heading</h3>
                              </li>
                              <li><a className="list-item" href="#"><span>Link list 1</span></a></li>
                              <li><a className="list-item" href="#"><span>Link list 2</span></a></li>
                              <li><a className="list-item" href="#"><span>Link list 3</span></a></li>
                              <li><span className="divider"></span></li>
                              <li><a className="list-item" href="#"><span>Link list 4</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li onClick={this.toggleMegamenu} className={this.state.isMegamenuOpen?"nav-item dropdown megamenu show":"nav-item dropdown megamenu"}>
                        <a className="nav-link dropdown-toggle" href=" javascript:void(0)" data-toggle="dropdown" aria-expanded="false">
                          <span>Megamenu Label</span>
                          <svg className="icon icon-xs"><use xlinkHref="/svg/sprite.svg#it-expand"></use></svg>
                        </a>
                        <div className={this.state.isMegamenuOpen?"dropdown-menu show":"dropdown-menu"}>
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">Heading 1</h3>
                                  </li>
                                  <li><a className="list-item" href="#"><span>Link list 1 </span></a></li>
                                  <li><a className="list-item" href="#"><span>Link list 2 </span></a></li>
                                  <li><a className="list-item" href="#"><span>Link list 3 </span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">Heading 2</h3>
                                  </li>
                                  <li><a className="list-item" href="#"><span>Link list 1 </span></a></li>
                                  <li><a className="list-item" href="#"><span>Link list 2 </span></a></li>
                                  <li><a className="list-item" href="#"><span>Link list 3 </span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">Heading 3</h3>
                                  </li>
                                  <li><a className="list-item" href="#"><span>Link list 1 </span></a></li>
                                  <li><a className="list-item" href="#"><span>Link list 2 </span></a></li>
                                  <li><a className="list-item" href="#"><span>Link list 3</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderNavExample
