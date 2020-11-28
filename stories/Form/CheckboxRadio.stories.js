import React from 'react'

import { Row, Col, Form, FormGroup, Label, Input, FormText } from '../../src'

import CheckboxRadio from './docs/CheckboxRadio/CheckboxRadio.md'
import Disabilitato from './docs/CheckboxRadio/Disabilitato.md'
import Gruppi from './docs/CheckboxRadio/Gruppi.md'
import Inline from './docs/CheckboxRadio/Inline.md'

export default {
  title: 'Componenti/Form/Checkbox and radio'
}

export const CheckboxERadio = () => (
  <Form className="m-3">
    <fieldset>
      <legend>Checkbox</legend>
      <FormGroup check>
        <Input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Checkbox di esempio
        </Label>
      </FormGroup>
    </fieldset>

    <fieldset>
      <legend>Radio</legend>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
        <Label check for="radio1">
          Radio di esempio 1
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">
          Radio di esempio 2
        </Label>
      </FormGroup>
    </fieldset>
  </Form>
)

CheckboxERadio.story = {
  name: 'Checkbox e radio'
}

export const _Inline = () => (
  <section>
    <fieldset>
      <legend>Checkbox</legend>
      <Form className="m-3">
        <FormGroup check inline>
          <Input id="checkbox1" type="checkbox" />
          <Label for="checkbox1" check>
            Checkbox non selezionato
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input id="checkbox2" type="checkbox" defaultChecked />
          <Label for="checkbox2" check>
            Checkbox selezionato
          </Label>
        </FormGroup>
      </Form>
    </fieldset>

    <fieldset>
      <legend>Radio</legend>
      <Form className="m-3">
        <FormGroup check inline>
          <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
          <Label check for="radio1">
            Opzione 1
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name="gruppo1" type="radio" id="radio2" />
          <Label check for="radio2">
            Opzione 2
          </Label>
        </FormGroup>
      </Form>
    </fieldset>
  </section>
)

export const __Disabilitato = () => (
  <section>
    <fieldset>
      <legend>Checkbox</legend>
      <Form className="m-3">
        <FormGroup check>
          <Input disabled id="checkbox1" type="checkbox" />
          <Label for="checkbox1" check>
            Checkbox disabilitato non selezionato
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input disabled id="checkbox2" type="checkbox" defaultChecked />
          <Label for="checkbox2" check>
            Checkbox disabilitato selezionato
          </Label>
        </FormGroup>
      </Form>
    </fieldset>

    <fieldset>
      <legend>Radio</legend>
      <Form className="m-3">
        <FormGroup check>
          <Input
            disabled
            name="gruppo1"
            type="radio"
            id="radio1"
            defaultChecked
          />
          <Label check for="radio1">
            Opzione disabilitata selezionata
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input disabled name="gruppo1" type="radio" id="radio2" />
          <Label check for="radio2">
            Opzione disabilitata non selezionata
          </Label>
        </FormGroup>
      </Form>
    </fieldset>
  </section>
)

export const _Gruppi = () => (
  <section>
    <Row className="m-5">
      <Col md={5}>
        <fieldset>
          <legend>Checkbox</legend>
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
        </fieldset>
      </Col>
      <Col md={2} />
      <Col md={5}>
        <fieldset>
          <legend>Checkbox</legend>
          <Form>
            <FormGroup check className="form-check-group">
              <Input id="checkbox4" type="checkbox" defaultChecked />
              <Label for="checkbox4" check>
                Checkbox selezionato
              </Label>
              <FormText color="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="checkbox5" type="checkbox" />
              <Label for="checkbox5" check>
                Checkbox non selezionato
              </Label>
              <FormText color="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="checkbox6" type="checkbox" disabled />
              <Label for="checkbox6" check>
                Checkbox disabilitato non selezionato
              </Label>
              <FormText color="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
    </Row>
    <Row className="m-5">
      <Col md={5}>
        <fieldset>
          <legend>Radio</legend>
          <Form>
            <FormGroup check className="form-check-group">
              <Input id="radio1" name="group1" type="radio" defaultChecked />
              <Label for="radio1" check>
                Opzione 1
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="radio2" name="group1" type="radio" />
              <Label for="radio2" check>
                Opzione 2
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="radio3" name="group1" type="radio" disabled />
              <Label for="radio3" check>
                Opzione 3
              </Label>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
      <Col md={2} />
      <Col md={5}>
        <fieldset>
          <legend>Radio</legend>
          <Form>
            <FormGroup check className="form-check-group">
              <Input id="radio4" name="group2" type="radio" defaultChecked />
              <Label for="radio4" check>
                Opzione 1
              </Label>
              <FormText color="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="radio5" name="group2" type="radio" />
              <Label for="radio5" check>
                Opzione 2
              </Label>
              <FormText color="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className="form-check-group">
              <Input id="radio6" name="group2" type="radio" disabled />
              <Label for="radio6" check>
                Opzione 3
              </Label>
              <FormText color="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
    </Row>
  </section>
)
