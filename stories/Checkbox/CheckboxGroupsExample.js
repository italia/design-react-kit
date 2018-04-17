import React, { Component } from "react";

import { Row, Col, Form, FormGroup, Label, Input, FormText } from "../../src";

class CheckboxGroupsExample extends Component {
  render() {
    return (
      <Row className="m-5">
        <Col md={5}>
          <Form>
            <FormGroup check className="form-check-group">
              <Input id="checkbox1" type="checkbox" defaultChecked />
              <Label for="checkbox1" check>
                Checkbox selezionato
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="checkbox2" type="checkbox" />
              <Label for="checkbox2" check>
                Checkbox non selezionato
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="checkbox3" type="checkbox" disabled />
              <Label for="checkbox3" check>
                Checkbox disabilitato non selezionato
              </Label>
            </FormGroup>
          </Form>
        </Col>
        <Col md={2} />
        <Col md={5}>
          <Form>
            <FormGroup check className="form-check-group">
              <Input id="checkbox4" type="checkbox" defaultChecked />
              <Label for="checkbox4" check>
                Checkbox selezionato
              </Label>
              <FormText color="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="checkbox5" type="checkbox" />
              <Label for="checkbox5" check>
                Checkbox non selezionato
              </Label>
              <FormText color="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="checkbox6" type="checkbox" disabled />
              <Label for="checkbox6" check>
                Checkbox disabilitato non selezionato
              </Label>
              <FormText color="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default CheckboxGroupsExample;
