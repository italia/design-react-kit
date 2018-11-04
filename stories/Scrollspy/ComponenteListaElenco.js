import React from "react";

import { ListGroup, ListGroupItem, Scrollspy } from "../../src";

class ComponenteListaElenco extends React.Component {
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
            <div className="row">
                <div className="col-4">
                    <Scrollspy
                        items={[
                            "lista-articolo-1",
                            "lista-articolo-2",
                            "lista-articolo-3",
                            "lista-articolo-4"
                        ]}
                        rootEl="#scrollable-element"
                        componentTag="div"
                        onUpdate={el => {
                            const inView = el ? el.id : null;
                            this.setState({ inView });
                        }}
                    >
                        <ListGroup>
                            <ListGroupItem
                                active={inView === "lista-articolo-1"}
                                action
                                tag="a"
                                href="#lista-articolo-1"
                            >
                                Articolo 1
                            </ListGroupItem>
                            <ListGroupItem
                                active={inView === "lista-articolo-2"}
                                action
                                tag="a"
                                href="#lista-articolo-2"
                            >
                                Articolo 2
                            </ListGroupItem>
                            <ListGroupItem
                                active={inView === "lista-articolo-3"}
                                action
                                tag="a"
                                href="#lista-articolo-3"
                            >
                                Articolo 3
                            </ListGroupItem>
                            <ListGroupItem
                                active={inView === "lista-articolo-4"}
                                action
                                tag="a"
                                href="#lista-articolo-4"
                            >
                                Articolo 4
                            </ListGroupItem>
                        </ListGroup>
                    </Scrollspy>
                </div>
                <div className="col-8">
                    <div
                        id="scrollable-element"
                        className="p-3"
                        style={{
                            position: "relative",
                            height: 200,
                            overflow: "auto",
                            marginTop: ".5rem"
                        }}
                    >
                        <h4 id="lista-articolo-1">Articolo 1</h4>
                        <p>
                            Ex consequat commodo adipisicing exercitation aute
                            excepteur occaecat ullamco duis aliqua id magna
                            ullamco eu. Do aute ipsum ipsum ullamco cillum
                            consectetur ut et aute consectetur labore. Fugiat
                            laborum incididunt tempor eu consequat enim dolore
                            proident. Qui laborum do non excepteur nulla magna
                            eiusmod consectetur in. Aliqua et aliqua officia
                            quis et incididunt voluptate non anim reprehenderit
                            adipisicing dolore ut consequat deserunt mollit
                            dolore. Aliquip nulla enim veniam non fugiat id
                            cupidatat nulla elit cupidatat commodo velit ut
                            eiusmod cupidatat elit dolore.
                        </p>
                        <h4 id="lista-articolo-2">Articolo 2</h4>
                        <p>
                            Quis magna Lorem anim amet ipsum do mollit sit
                            cillum voluptate ex nulla tempor. Laborum consequat
                            non elit enim exercitation cillum aliqua consequat
                            id aliqua. Esse ex consectetur mollit voluptate est
                            in duis laboris ad sit ipsum anim Lorem. Incididunt
                            veniam velit elit elit veniam Lorem aliqua quis
                            ullamco deserunt sit enim elit aliqua esse irure.
                            Laborum nisi sit est tempor laborum mollit labore
                            officia laborum excepteur commodo non commodo dolor
                            excepteur commodo. Ipsum fugiat ex est consectetur
                            ipsum commodo tempor sunt in proident.
                        </p>
                        <h4 id="lista-articolo-3">Articolo 3</h4>
                        <p>
                            Quis anim sit do amet fugiat dolor velit sit ea ea
                            do reprehenderit culpa duis. Nostrud aliqua ipsum
                            fugiat minim proident occaecat excepteur aliquip
                            culpa aute tempor reprehenderit. Deserunt tempor
                            mollit elit ex pariatur dolore velit fugiat mollit
                            culpa irure ullamco est ex ullamco excepteur.
                        </p>
                        <h4 id="lista-articolo-4">Articolo 4</h4>
                        <p>
                            Quis anim sit do amet fugiat dolor velit sit ea ea
                            do reprehenderit culpa duis. Nostrud aliqua ipsum
                            fugiat minim proident occaecat excepteur aliquip
                            culpa aute tempor reprehenderit. Deserunt tempor
                            mollit elit ex pariatur dolore velit fugiat mollit
                            culpa irure ullamco est ex ullamco excepteur.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponenteListaElenco;
