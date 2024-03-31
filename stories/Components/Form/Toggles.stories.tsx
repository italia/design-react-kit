import { Meta, StoryObj } from "@storybook/react";
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
                    <FormGroup check className="m-3">
                        <Toggle label="Label dell'interruttore 1" disabled={false} />
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label={<span>Label dell&apos;interruttore 2</span>} defaultChecked disabled={false} />
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
                    <FormGroup check className="m-3">
                        <Toggle label="Label dell'interruttore 1" disabled={true} />
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label={<span>Label dell&apos;interruttore 2</span>} defaultChecked disabled={true} />
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
                    <Form>
                        <FormGroup check className="form-check-group">
                            <Toggle defaultChecked label="Toggle acceso" />
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle label="Toggle spento" />
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle disabled label="Toggle disabilitato" />
                        </FormGroup>
                    </Form>
                </Col>
                <Col md={2} />
                <Col md={5}>
                    <Form>
                        <FormGroup check className="form-check-group">
                            <Toggle defaultChecked label="Toggle acceso" />
                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle label="Toggle spento" />
                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle disabled label="Toggle disabilitato" />
                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
};
