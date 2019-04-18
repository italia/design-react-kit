import React from "react";


class HeaderNavExample extends React.Component {
    

    state = {
            isOpen: false,
            isOpen2: false
        };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };   
    toggle2 = () => {
      this.setState({
          isOpen2: !this.state.isOpen2
      });
  }; 

  render() {
      
    return (
        <div class="it-header-navbar-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/*start nav */}
              <nav class="navbar navbar-expand-lg has-megamenu">
                <button class="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav1">
                   {/*Add Icon Later*/}
                </button>
                <div class="navbar-collapsable" id="nav1" style={{display: 'none'}}>
                  <div class="overlay" style={{display: 'none'}}></div>
                  <div class="close-div sr-only">
                    <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
                  </div>
                  <div class="menu-wrapper">
                    <ul class="navbar-nav">
                      <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                      <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                      <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                      <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                      <li class="nav-item dropdown" onClick={this.toggle}>
                        <a class="nav-link dropdown-toggle" href=" javascript:void(0)" data-toggle="dropdown" aria-expanded="false">
                          <span>Dropdown item</span>
                           {/*Add Icon Later*/}
                        </a>
                        <div class={this.state.isOpen?"dropdown-menu show":"dropdown-menu"}>
                          <div class="link-list-wrapper">
                            <ul class="link-list">
                              <li>
                                <h3 class="no_toc" id="heading-es-1">Heading</h3>
                              </li>
                              <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                              <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                              <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                              <li><span class="divider"></span></li>
                              <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li onClick={this.toggle2} class={this.state.isOpen2?"nav-item dropdown megamenu show":"nav-item dropdown megamenu"}>
                        <a class="nav-link dropdown-toggle" href=" javascript:void(0)" data-toggle="dropdown" aria-expanded="false">
                          <span>Megamenu Label</span>
                           {/*Add Icon Later*/}
                        </a>
                        <div class={this.state.isOpen2?"dropdown-menu show":"dropdown-menu"}>
                          <div class="row">
                            <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <h3 class="no_toc">Heading 1</h3>
                                  </li>
                                  <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                  <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                  <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <h3 class="no_toc">Heading 2</h3>
                                  </li>
                                  <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                  <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                  <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <h3 class="no_toc">Heading 3</h3>
                                  </li>
                                  <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                  <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                  <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
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
