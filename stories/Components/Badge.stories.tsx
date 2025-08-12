import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { componentColor } from "../../.storybook/stories-helper";
import { Badge, Button } from "../../src";

const meta: Meta<typeof Badge> = {
    title: "Documentazione/Componenti/Badge",
    component: Badge,
    args: {
        color: "secondary",
    },
    argTypes: {
        color: {
            control: "select",
            options: componentColor,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const EsempioInterattivo: Story = {
    render: ({ ...args }) => <Badge {...args}>Badge</Badge>,
    parameters: {
        layout: "centered",
    },
};

export const DiffenteGrandezza: Story = {
    render: () => (
        <div>
            <h1>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h1>
            <h2>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h2>
            <h3>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h3>
            <h4>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h4>
            <h5>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h5>
            <h6>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h6>
        </div>
    ),
};

export const Contatore = {
    render: () => (
        <Button color="primary">
            Notifiche&nbsp;
            <Badge color="light" className="text-secondary">
                4
            </Badge>
        </Button>
    ),
};

export const ContatoreTestoAggiuntivo = {
    render: () => (
        <Button color="primary">
            Notifiche&nbsp;
            <Badge color="light" className="text-primary">
                9
            </Badge>
            <span className="visually-hidden">Messaggi non letti</span>
        </Button>
    ),
};

export const Variazioni = {
    render: () => (
        <div className="d-flex justify-content-around">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
        </div>
    ),
};

export const BordiArrotondati = {
    render: () => (
        <div className="d-flex justify-content-around">
            <Badge color="primary" pill>
                Primary
            </Badge>
            <Badge color="secondary" pill>
                Secondary
            </Badge>
            <Badge color="success" pill>
                Success
            </Badge>
            <Badge color="danger" pill>
                Danger
            </Badge>
            <Badge color="warning" pill>
                Warning
            </Badge>
        </div>
    ),
};

export const ConLink = {
    render: () => (
        <div className="d-flex justify-content-around">
            <Badge href="#" color="primary" tag="a">
                Primary
            </Badge>
            <Badge href="#" color="secondary" tag="a">
                Secondary
            </Badge>
            <Badge href="#" color="success" tag="a">
                Success
            </Badge>
            <Badge href="#" color="danger" tag="a">
                Danger
            </Badge>
            <Badge href="#" color="warning" tag="a">
                Warning
            </Badge>
        </div>
    ),
};
