import React, { Component } from "react";

import {
  Form,
  Label,
  Input,
  Row,
  Col,
  FormGroup,
  PasswordInput,
  Select
} from "../../src";

class FormGroupsExample extends Component {
  state = {
    address: "1234 Main St",
    secondaryAddress: "Apartment, studio, or floor"
  };

  onAddressChange = ({ target }) => {
    this.setState({
      address: target.value
    });
  };
  onSecomdaryAddressChange = ({ target }) => {
    this.setState({
      secondaryAddress: target.value
    });
  };

  render() {
    const { address, secondaryAddress } = this.state;
    const { onAddressChange, onSecomdaryAddressChange } = this;

    return (
      <Form className="m-3">
        <Row>
          <FormGroup className="col-md-6">
            <Input type="email" id="inputEmail4" />
            <Label for="inputEmail4">Email</Label>
          </FormGroup>
          <FormGroup className="col-md-6">
            <PasswordInput id="inputPassword4" />
            <Label for="inputPassword4">Password</Label>
          </FormGroup>
        </Row>

        <FormGroup>
          <Input
            type="text"
            id="inputAddress"
            value={address}
            onChange={onAddressChange}
          />
          <Label for="inputAddress">Indirizzo</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            id="inputAddress2"
            value={secondaryAddress}
            onChange={onSecomdaryAddressChange}
          />
          <Label for="inputAddress2">Indirizzo secondario</Label>
        </FormGroup>

        <div className="form-row">
          <FormGroup className="col-md-6">
            <Input type="text" id="inputCity" />
            <Label for="inputCity">Città</Label>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Select
              placeholder="Scegli..."
              options={[{ value: "", label: "..." }]}
            />
            <Label for="inputState">Comune</Label>
          </FormGroup>
          <FormGroup className="col-md-2">
            <Input type="text" id="inputCAP" />
            <Label for="inputCAP">CAP</Label>
          </FormGroup>
        </div>

        <div className="form-row">
          <FormGroup check className="col-md-6">
            <Input id="checkbox1a" type="checkbox" />
            <Label for="checkbox1a">Attivazione</Label>
          </FormGroup>
          <FormGroup col>
            <Input type="text" id="campofac" />
            <Label for="campofac">Campo facoltativo</Label>
          </FormGroup>
        </div>
      </Form>
    );
  }
}

export default FormGroupsExample;
