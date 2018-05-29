import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "../../src";

class CollapseNestedExample extends React.Component {
    state = {
        collapseOpen1: true,
        collapseOpen2: false,
        collapseOpen3: false
    };

    toggle = id => {
        this.setState({
            [`collapseOpen${id}`]: !this.state[`collapseOpen${id}`]
        });
    };

    render() {
        const { collapseOpen1, collapseOpen2, collapseOpen3 } = this.state;

        return (
            <Accordion>
                <AccordionHeader
                    active={collapseOpen1}
                    onToggle={() => this.toggle(1)}
                >
                    Collapse header #1
                </AccordionHeader>
                <AccordionBody active={collapseOpen1}>
                    <CollapseNestedPanel />
                </AccordionBody>

                <AccordionHeader
                    active={collapseOpen2}
                    onToggle={() => this.toggle(2)}
                >
                    Collapse header #2
                </AccordionHeader>
                <AccordionBody active={collapseOpen2}>
                    Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt
                    you probably haven&apos;t heard of them accusamus labore
                    sustainable VHS.
                </AccordionBody>

                <AccordionHeader
                    active={collapseOpen3}
                    onToggle={() => this.toggle(3)}
                >
                    Collapse header #3
                </AccordionHeader>
                <AccordionBody active={collapseOpen3}>
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                </AccordionBody>
            </Accordion>
        );
    }
}

class CollapseNestedPanel extends React.Component {
    defaultState = {
        collapseOpen1: false,
        collapseOpen2: false,
        collapseOpen3: false
    };

    state = {
        ...this.defaultState,
        collapseOpen1: true,
        collapseOpen2: true,
    };

    toggle = id => {
        this.setState({
            ...this.defaultState,
            [`collapseOpen${id}`]: !this.state[`collapseOpen${id}`]
        });
    };

    render() {
        const { collapseOpen1, collapseOpen2, collapseOpen3 } = this.state;

        return (
            <Accordion>
                <AccordionHeader
                    active={collapseOpen1}
                    onToggle={() => this.toggle(1)}
                >
                    Nested panel header #1
                </AccordionHeader>
                <AccordionBody active={collapseOpen1}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch.
                </AccordionBody>

                <AccordionHeader
                    active={collapseOpen2}
                    onToggle={() => this.toggle(2)}
                >
                    Nested panel header #2
                </AccordionHeader>
                <AccordionBody active={collapseOpen2}>
                    Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt
                    you probably haven&apos;t heard of them accusamus labore
                    sustainable VHS.
                </AccordionBody>

                <AccordionHeader
                    active={collapseOpen3}
                    onToggle={() => this.toggle(3)}
                >
                    Nested panel header #3
                </AccordionHeader>
                <AccordionBody active={collapseOpen3}>
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                </AccordionBody>
            </Accordion>
        );
    }
}

export default CollapseNestedExample;
