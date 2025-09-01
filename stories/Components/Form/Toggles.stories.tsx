import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Col, Form, FormGroup, FormText, Row, Toggle } from "../../../src";

const meta: Meta<typeof Toggle> = {
    title: "Documentazione/Form/Toggles",
    component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Toggles: Story = {
    render: () => {
        return (
            <Row>
                <Col sm="6">
                    <FormGroup check>
                        <Toggle label="Label dell'interruttore 1" disabled={false} />
                    </FormGroup>
                </Col>
            </Row>
        );
    }
};

export const TogglesDisabilitate: Story = {
    render: () => {
        return (
            <Row>
                <Col sm="6">
                    <FormGroup check>
                        <Toggle label="Label dell'interruttore 1" disabled={true} />
                    </FormGroup>
                </Col>
            </Row>
        );
    }
};

export const GruppiDiToggles: Story = {
    render: () => {
        return (
            <Row className="m-5">
                <Col md={5}>
                    <fieldset>
                        <legend>Gruppo di toggle</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Toggle defaultChecked label="Toggle acceso" id="toggleEsempio3a" />
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Toggle label="Toggle spento" id="toggleEsempio3b" />
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Toggle disabled label="Toggle disabilitato" id="toggleEsempio3c" />
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
                <Col md={2} />
                <Col md={5}>
                    <fieldset>
                        <legend>Gruppo di toggle</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Toggle defaultChecked label="Toggle acceso" id="toggleEsempio3d"/>
                                <FormText id="toggleEsempio3dDescription" color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Toggle label="Toggle spento" id="toggleEsempio3e"/>
                                <FormText id="toggleEsempio3eDescription" color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Toggle disabled label="Toggle disabilitato" id="toggleEsempio3f" />
                                <FormText id="toggleEsempio3fDescription" color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
            </Row>
        );
    }
};
