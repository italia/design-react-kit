import React, { Component } from "react";

import {
  Col,
  Row,
  Form,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "../../src";

class FormSizingExample extends Component {
  render() {
    const { inline } = this.props;

    return (
      <Form inline className="m-3">
        <div className="form-row align-items-center">
          <Col xs="auto">
            <Label className="sr-only" for="inlineFormInput">
              Nome
            </Label>
            <Input type="text" id="inlineFormInput" placeholder="Mario Rossi" />
          </Col>
          <Col xs="auto">
            <Label className="sr-only" for="inlineFormInputGroup">
              Username
            </Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <div className="input-group-text">@</div>
              </InputGroupAddon>
              <Input
                type="text"
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <div className="form-check m-0">
              <Input type="checkbox" id="autoSizingCheck" />
              <Label check for="autoSizingCheck">
                Ricordami
              </Label>
            </div>
          </Col>
          <Col xs="auto">
            <Button color="primary" type="submit">
              Invia
            </Button>
          </Col>
        </div>
      </Form>
    );
  }
}

export default FormSizingExample;
