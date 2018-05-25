import React from "react";
import { Button, Collapse, Card, CardBody } from "../../src";

class CollapseGroupsExample extends React.Component {
    state = {
        collapseOpen1: true,
        collapseOpen2: true,
        collapseOpen3: false,
    };

    toggle = id => {
        this.setState({
            [`collapseOpen${id}`]: !this.state[`collapseOpen${id}`]
        });
    };

    render() {
        const { collapseOpen1, collapseOpen2, collapseOpen3 } = this.state;

        return (
            <div className="collapse-div" role="tablist">
                <div className="collapse-header">
                    <button
                        data-toggle="collapse"
                        aria-expanded={collapseOpen1 ? "true" : "false"}
                        className={collapseOpen1 ? "" : "collapsed"}
                        onClick={() => this.toggle(1)}
                    >
                        Collapsible Group Item #1
                    </button>
                </div>
                <div
                    className={`collapse ${collapseOpen1 ? "show" : ""}`}
                    role="tabpanel"
                    aria-labelledby="heading1"
                >
                    <div className="collapse-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                    </div>
                </div>
                <div className="collapse-header">
                    <button
                        data-toggle="collapse"
                        aria-expanded={collapseOpen2 ? "true" : "false"}
                        className={collapseOpen2 ? "" : "collapsed"}
                        onClick={() => this.toggle(2)}
                    >
                        Collapsible Group Item #2
                    </button>
                </div>
                <div
                    className={`collapse ${collapseOpen2 ? "show" : ""}`}
                    role="tabpanel"
                    aria-labelledby="heading2"
                >
                    <div className="collapse-body">
                        Ad vegan excepteur butcher vice lomo. Leggings occaecat
                        craft beer farm-to-table, raw denim aesthetic synth
                        nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                    </div>
                </div>
                <div className="collapse-header">
                    <button
                        data-toggle="collapse"
                        aria-expanded={collapseOpen3 ? "true" : "false"}
                        className={collapseOpen3 ? "" : "collapsed"}
                        onClick={() => this.toggle(3)}
                    >
                        Collapsible Group Item #3
                    </button>
                </div>
                <div
                    className={`collapse ${collapseOpen3 ? "show" : ""}`}
                    role="tabpanel"
                    aria-labelledby="heading3"
                >
                    <div className="collapse-body">
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapseGroupsExample;
