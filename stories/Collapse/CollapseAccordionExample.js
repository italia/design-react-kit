import React from "react";
import { Button, Collapse, Card, CardBody } from "../../src";

class CollapseAccordionExample extends React.Component {
  defaultState = {
    collapseOpen1: false,
    collapseOpen2: false,
    collapseOpen3: false
  };

  state = {
    ...this.defaultState,
    collapseOpen1: true
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
      <div id="accordion" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <button
                onClick={() => this.toggle(1)}
                className={`btn btn-link ${collapseOpen1 ? "" : "collapsed"}`}
                data-toggle="collapse"
              >
                <i className="pr-3 collapse-icon" />Collapsible Group Item #1
              </button>
            </h5>
          </div>
          <div
            className={`collapse ${collapseOpen1 ? "show" : ""}`}
            role="tabpanel"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h5 className="mb-0">
              <button
                onClick={() => this.toggle(2)}
                className={`btn btn-link ${collapseOpen2 ? "" : "collapsed"}`}
                data-toggle="collapse"
              >
                <i className="pr-3 collapse-icon" />Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            className={`collapse ${collapseOpen2 ? "show" : ""}`}
            role="tabpanel"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingThree">
            <h5 className="mb-0">
              <button
                onClick={() => this.toggle(3)}
                className={`btn btn-link ${collapseOpen3 ? "" : "collapsed"}`}
                data-toggle="collapse"
              >
                <i className="pr-3 collapse-icon" />Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            className={`collapse ${collapseOpen3 ? "show" : ""}`}
            role="tabpanel"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollapseAccordionExample;
