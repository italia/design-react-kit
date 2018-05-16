import React, { Fragment } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Scrollspy
} from "../../src";

class ScrollspyExample extends React.Component {
  state = {
    isNavOpen: false,
    chapters: {
      1: false,
      2: false,
      3: false,
      31: false,
      32: false
    }
  };

  onNavToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isNavOpen: !prevState.isNavOpen
    }));
  };

  onToggle = (id, status) => {
    this.setState(prevState => ({
      ...prevState,
      chapters: {
        ...prevState.chapters,
        [id]: status
      }
    }));
  };

  isActive = ids => {
    if (Array.isArray(ids)) {
      const found = ids.filter(id => {
        return this.state.chapters[id];
      });
      return found.length ? true : false;
    }

    if (this.state.chapters[ids]) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <Fragment>
        <Navbar light expand="lg" className="bg-light">
          <NavbarBrand href="#">Navbar</NavbarBrand>

          <Collapse isOpen navbar />

          <Nav className="mr-auto" pills>
            <NavItem>
              <NavLink href="#" active={this.isActive(1)}>
                Capitolo 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" active={this.isActive(2)}>
                Capitolo 2
              </NavLink>
            </NavItem>

            <Dropdown
              nav
              inNavbar
              isOpen={this.state.isNavOpen}
              toggle={() => {}}
            >
              <NavLink
                href="#"
                active={this.isActive([31, 32, 33])}
                onClick={this.onNavToggle}
              >
                <span className="dropdown-toggle">Capitolo 3</span>
              </NavLink>
              <DropdownMenu>
                <DropdownItem active={this.isActive(31)}>
                  Capitolo 3 - 1
                </DropdownItem>
                <DropdownItem active={this.isActive(32)}>
                  Capitolo 3 - 2
                </DropdownItem>
                <DropdownItem active={this.isActive(33)}>
                  Capitolo 3 - 3
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Navbar>

        <div className="p-3" style={{ height: 200, overflow: "scroll" }}>
          <h4 id="cap-1">Capitolo 1</h4>
          <Scrollspy
            onEnter={() => this.onToggle(1, true)}
            onLeave={() => this.onToggle(1, false)}
          >
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
          </Scrollspy>

          <h4 id="cap-2">Capitolo 2</h4>
          <Scrollspy
            onEnter={() => this.onToggle(2, true)}
            onLeave={() => this.onToggle(2, false)}
          >
            <p>
              Veniam marfa mustache skateboard, adipisicing fugiat velit
              pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
              Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
              cosby sweater food truck, mcsweeney's quis non freegan vinyl.
              Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
              quis gentrify. Brooklyn adipisicing craft beer vice keytar
              deserunt.
            </p>
          </Scrollspy>

          <h4 id="cap-3-1">Capitolo 3 - 1</h4>
          <Scrollspy
            onEnter={() => this.onToggle(31, true)}
            onLeave={() => this.onToggle(31, false)}
          >
            <p>
              Occaecat commodo aliqua delectus. Fap craft beer deserunt
              skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea
              sunt next level locavore single-origin coffee in magna veniam.
              High life id vinyl, echo park consequat quis aliquip banh mi
              pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim
              messenger bag. Cred ex in, sustainable delectus consectetur fanny
              pack iphone.
            </p>
          </Scrollspy>

          <h4 id="cap-3-2">Capitolo 3 - 2</h4>
          <Scrollspy
            onEnter={() => this.onToggle(32, true)}
            onLeave={() => this.onToggle(32, false)}
          >
            <p>
              In incididunt echo park, officia deserunt mcsweeney's proident
              master cleanse thundercats sapiente veniam. Excepteur VHS elit,
              proident shoreditch +1 biodiesel laborum craft beer. Single-origin
              coffee wayfarers irure four loko, cupidatat terry richardson
              master cleanse. Assumenda you probably haven't heard of them art
              party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf
              nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf
              voluptate, lo-fi ea portland before they sold out four loko.
              Locavore enim nostrud mlkshk brooklyn nesciunt.
            </p>
          </Scrollspy>

          <h4 id="cap-3-3">Capitolo 3 - 3</h4>
          <Scrollspy
            onEnter={() => this.onToggle(33, true)}
            onLeave={() => this.onToggle(33, false)}
          >
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat. Keytar twee blog, culpa messenger bag
              marfa whatever delectus food truck. Sapiente synth id assumenda.
              Locavore sed helvetica cliche irony, thundercats you probably
              haven't heard of them consequat hoodie gluten-free lo-fi fap
              aliquip. Labore elit placeat before they sold out, terry
              richardson proident brunch nesciunt quis cosby sweater pariatur
              keffiyeh ut helvetica artisan. Cardigan craft beer seitan
              readymade velit. VHS chambray laboris tempor veniam. Anim mollit
              minim commodo ullamco thundercats.
            </p>
          </Scrollspy>
        </div>
      </Fragment>
    );
  }
}

export default ScrollspyExample;
