import React, { Fragment } from "react";

import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Scrollspy
} from "../../src";

class ComponenteBarraDiNavigazione extends React.Component {
    state = { isNavOpen: false, inView: null };

    onNavToggle = () => {
        this.setState(prevState => ({
            ...prevState,
            isNavOpen: !prevState.isNavOpen
        }));
    };

    componentDidMount() {
        setTimeout(() => {
            document.getElementById("scrollable-element").scrollTop = 0;
        }, 0);
    }

    render() {
        const { inView } = this.state;

        return (
            <Fragment>
                <Scrollspy
                    items={["cap-1", "cap-2", "cap-3-1", "cap-3-2", "cap-3-3"]}
                    rootEl="#scrollable-element"
                    componentTag="div"
                    onUpdate={el => {
                        const inView = el ? el.id : null;
                        this.setState({ inView });
                    }}
                >
                    <Navbar light expand="lg" className="bg-light">
                        <NavbarBrand href="#">Navbar</NavbarBrand>
                        <Collapse isOpen navbar />
                        <Nav className="mr-auto" pills>
                            <NavItem>
                                <NavLink
                                    href="#cap-1"
                                    active={inView === "cap-1"}
                                >
                                    Capitolo 1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#cap-2"
                                    active={inView === "cap-2"}
                                >
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
                                    onClick={this.onNavToggle}
                                    active={
                                        inView && inView.startsWith("cap-3")
                                    }
                                >
                                    <span className="dropdown-toggle">
                                        Capitolo 3
                                    </span>
                                </NavLink>
                                <DropdownMenu>
                                    <DropdownItem active={inView === "cap-3-1"} href="#cap-3-1" >
                                        Capitolo 3 - 1
                                    </DropdownItem>
                                    <DropdownItem active={inView === "cap-3-2"} href="#cap-3-2">
                                        Capitolo 3 - 2
                                    </DropdownItem>
                                    <DropdownItem active={inView === "cap-3-3"} href="#cap-3-3">
                                        Capitolo 3 - 3
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Navbar>
                </Scrollspy>

                <div
                    id="scrollable-element"
                    className="p-3"
                    style={{
                        position: "relative",
                        height: 400,
                        overflow: "auto",
                        marginTop: ".5rem"
                    }}
                >
                    <h4 id="cap-1">Capitolo 1</h4>
                    <p>
                        Ad leggings keytar, brunch id art party dolor labore.
                        Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                        farm-to-table bicycle rights whatever. Anim keffiyeh
                        carles cardigan. Velit seitan mcsweeney&apos;s photo
                        booth 3 wolf moon irure. Cosby sweater lomo jean shorts,
                        williamsburg hoodie minim qui you probably haven&apos;t
                        heard of them et cardigan trust fund culpa biodiesel wes
                        anderson aesthetic. Nihil tattooed accusamus, cred irony
                        biodiesel keffiyeh artisan ullamco consequat.
                    </p>

                    <h4 id="cap-2">Capitolo 2</h4>
                    <p>
                        Veniam marfa mustache skateboard, adipisicing fugiat
                        velit pitchfork beard. Freegan beard aliqua cupidatat
                        mcsweeney&apos;s vero. Cupidatat four loko nisi, ea
                        helvetica nulla carles. Tattooed cosby sweater food
                        truck, mcsweeney&apos;s quis non freegan vinyl. Lo-fi
                        wes anderson +1 sartorial. Carles non aesthetic
                        exercitation quis gentrify. Brooklyn adipisicing craft
                        beer vice keytar deserunt.
                    </p>

                    <h4 id="cap-3-1">Capitolo 3 - 1</h4>
                    <p>
                        Occaecat commodo aliqua delectus. Fap craft beer
                        deserunt skateboard ea. Lomo bicycle rights adipisicing
                        banh mi, velit ea sunt next level locavore single-origin
                        coffee in magna veniam. High life id vinyl, echo park
                        consequat quis aliquip banh mi pitchfork. Vero VHS est
                        adipisicing. Consectetur nisi DIY minim messenger bag.
                        Cred ex in, sustainable delectus consectetur fanny pack
                        iphone.
                    </p>

                    <h4 id="cap-3-2">Capitolo 3 - 2</h4>
                    <p>
                        In incididunt echo park, officia deserunt
                        mcsweeney&apos;s proident master cleanse thundercats
                        sapiente veniam. Excepteur VHS elit, proident shoreditch
                        +1 biodiesel laborum craft beer. Single-origin coffee
                        wayfarers irure four loko, cupidatat terry richardson
                        master cleanse. Assumenda you probably haven&apos;t
                        heard of them art party fanny pack, tattooed nulla
                        cardigan tempor ad. Proident wolf nesciunt sartorial
                        keffiyeh eu banh mi sustainable. Elit wolf voluptate,
                        lo-fi ea portland before they sold out four loko.
                        Locavore enim nostrud mlkshk brooklyn nesciunt.
                    </p>

                    <h4 id="cap-3-3">Capitolo 3 - 3</h4>
                    <p>
                        Ad leggings keytar, brunch id art party dolor labore.
                        Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                        farm-to-table bicycle rights whatever. Anim keffiyeh
                        carles cardigan. Velit seitan mcsweeney&apos;s photo
                        booth 3 wolf moon irure. Cosby sweater lomo jean shorts,
                        williamsburg hoodie minim qui you probably haven&apos;t
                        heard of them et cardigan trust fund culpa biodiesel wes
                        anderson aesthetic. Nihil tattooed accusamus, cred irony
                        biodiesel keffiyeh artisan ullamco consequat. Keytar
                        twee blog, culpa messenger bag marfa whatever delectus
                        food truck. Sapiente synth id assumenda. Locavore sed
                        helvetica cliche irony, thundercats you probably
                        haven&apos;t heard of them consequat hoodie gluten-free
                        lo-fi fap aliquip. Labore elit placeat before they sold
                        out, terry richardson proident brunch nesciunt quis
                        cosby sweater pariatur keffiyeh ut helvetica artisan.
                        Cardigan craft beer seitan readymade velit. VHS chambray
                        laboris tempor veniam. Anim mollit minim commodo ullamco
                        thundercats.
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default ComponenteBarraDiNavigazione;
