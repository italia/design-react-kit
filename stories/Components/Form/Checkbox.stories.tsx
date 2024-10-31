import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Col, Form, FormGroup, FormText, Input, Label, Row } from "../../../src";

const meta: Meta<typeof Input> = {
    title: "Documentazione/Form/Checkbox",
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const CheckboxBase: Story = {
    render: () => (
        <Form>
            <fieldset>
                <legend>Checkbox</legend>
                <FormGroup check>
                    <Input id="checkbox1" type="checkbox" />
                    <Label for="checkbox1" check>
                        Checkbox di esempio
                    </Label>
                </FormGroup>
            </fieldset>
        </Form>
    )
};

export const CheckboxInline: Story = {
    render: () => (
        <section>
            <fieldset>
                <legend>Checkbox</legend>
                <Form>
                    <FormGroup check inline>
                        <Input id="inline-checkbox1" type="checkbox" />
                        <Label for="inline-checkbox1" check>
                            Checkbox non selezionato
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input id="inline-checkbox2" type="checkbox" defaultChecked />
                        <Label for="inline-checkbox2" check>
                            Checkbox selezionato
                        </Label>
                    </FormGroup>
                </Form>
            </fieldset>
        </section>
    )
};

export const CheckboxDisabilitato: Story = {
    render: () => (
        <section>
            <fieldset>
                <legend>Checkbox</legend>
                <Form>
                    <FormGroup check>
                        <Input disabled id="disabled-checkbox1" type="checkbox" />
                        <Label for="disabled-checkbox1" check>
                            Checkbox disabilitato non selezionato
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input disabled id="disabled-checkbox2" type="checkbox" defaultChecked />
                        <Label for="disabled-checkbox2" check>
                            Checkbox disabilitato selezionato
                        </Label>
                    </FormGroup>
                </Form>
            </fieldset>
        </section>
    )
};

export const CheckboxGruppi: Story = {
    render: () => (
        <section>
            <Row className="m-5">
                <Col md={5}>
                    <fieldset>
                        <legend>Checkbox</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox1" type="checkbox" defaultChecked />
                                <Label for="group-checkbox1" check>
                                    Checkbox selezionato
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox2" type="checkbox" />
                                <Label for="group-checkbox2" check>
                                    Checkbox non selezionato
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox3" type="checkbox" disabled />
                                <Label for="group-checkbox3" check>
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
                                <Input id="group-checkbox4" type="checkbox" defaultChecked />
                                <Label for="group-checkbox4" check>
                                    Checkbox selezionato
                                </Label>
                                <FormText id="group-checkbox4Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox5" type="checkbox" />
                                <Label for="group-checkbox5" check>
                                    Checkbox non selezionato
                                </Label>
                                <FormText id="group-checkbox5Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox6" type="checkbox" disabled />
                                <Label for="group-checkbox6" check>
                                    Checkbox disabilitato non selezionato
                                </Label>
                                <FormText id="group-checkbox6Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
            </Row>
        </section>
    )
};

//Da correggere il componente input nel caso in cui venga aggiunta la classe semi-checked perchè il render del componente è sbagliato
export const CheckboxMixedButton: Story = {
    render: () => (
        <Form>
            <fieldset>
                <legend>Checkbox</legend>
                <FormGroup check>
                    <Input id="checkbox-semi-checked" type="checkbox" className="semi-checked" />
                    <Label for="checkbox-semi-checked" check>
                        Checkbox di esempio
                    </Label>
                </FormGroup>
            </fieldset>
        </Form>
    )
};