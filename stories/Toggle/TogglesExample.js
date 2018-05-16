import React, { Component } from "react";

import { Row, Col, FormGroup, Toggle } from "../../src";

class TogglesExample extends Component {
  render() {
    const { disabled } = this.props;

    return (
      <Row>
        <Col sm="6">
          <FormGroup check className="m-3">
            <Toggle label="Label dell'interruttore 1" disabled={disabled} />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup check className="m-3">
            <Toggle
              label={<span>Label dell'interruttore 2</span>}
              defaultChecked
              disabled={disabled}
            />
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

export default TogglesExample;
