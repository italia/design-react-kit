import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Button, Icon } from "../../src";

const colors = ["primary", "secondary", "success", "info", "danger", "warning", "link"];

const meta: Meta<typeof Button> = {
    title: "Documentazione/Componenti/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const EsempioInterattivo: Story = {
    render: ({ ...args }) => {
        return <Button {...args}>Bottone</Button>;
    },
    args: {
        color: "primary",
    },
    argTypes: {
        color: {
            control: "select",
            options: colors,
        },
    },
};

export const Tipologie: Story = {
    render: () => {
        return (
            <div>
                <Button tag="a" href="#" role="button">
                    Link
                </Button>
                <Button type="submit">Button</Button>
                <Button tag="input" type="button" value="Input" />
                <Button tag="input" type="submit" value="Submit" />
                <Button tag="input" type="reset" value="Reset" />
            </div>
        );
    },
};

export const VariantiColore: Story = {
    render: () => {
        return (
            <>
                <div className="btn-example">
                    <Button color="primary">Primary</Button>
                    <Button outline color="primary">
                        Primary Outline
                    </Button>
                    <Button color="primary" disabled>
                        Primary disabled
                    </Button>
                    <Button color="primary" outline disabled>
                        Primary out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="secondary">Secondary</Button>
                    <Button outline color="secondary">
                        Secondary Outline
                    </Button>
                    <Button color="secondary" disabled>
                        Secondary disabled
                    </Button>
                    <Button color="secondary" outline disabled>
                        Secondary out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="success">success</Button>
                    <Button outline color="success">
                        success Outline
                    </Button>
                    <Button color="success" disabled>
                        success disabled
                    </Button>
                    <Button color="success" outline disabled>
                        success out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="danger">danger</Button>
                    <Button outline color="danger">
                        danger Outline
                    </Button>
                    <Button color="danger" disabled>
                        danger disabled
                    </Button>
                    <Button color="danger" outline disabled>
                        danger out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="warning">warning</Button>
                    <Button outline color="warning">
                        warning Outline
                    </Button>
                    <Button color="warning" disabled>
                        warning disabled
                    </Button>
                    <Button color="warning" outline disabled>
                        warning out. disabled
                    </Button>
                </div>
            </>
        );
    },
};

export const SfondoScuro: Story = {
    render: () => (
        <div className="bg-dark py-1">
            <div className="btn-example">
                <Button color="primary">Primary</Button>
                <Button outline color="primary">
                    Primary Outline
                </Button>
                <Button color="primary" disabled>
                    Primary disabled
                </Button>
                <Button color="primary" outline disabled>
                    Primary out. disabled
                </Button>
            </div>
            <div className="btn-example">
                <Button color="secondary">Secondary</Button>
                <Button outline color="secondary">
                    Secondary Outline
                </Button>
                <Button color="secondary" disabled>
                    Secondary disabled
                </Button>
                <Button color="secondary" outline disabled>
                    Secondary out. disabled
                </Button>
            </div>
        </div>
    ),
};

export const VariantiDiDimensione: Story = {
    render: () => (
        <section className="col-12">
            <div>
                <Button className="me-2" color="primary" size="lg">
                    Primary Large
                </Button>
                <Button color="secondary" size="lg">
                    Secondary Large
                </Button>
                <div className="mt-3" />
                <Button className="me-2" color="primary" size="sm">
                    Primary Small
                </Button>
                <Button color="secondary" size="sm">
                    Secondary Small
                </Button>
                <div className="mt-3" />
                <Button className="me-2" color="primary" size="xs">
                    Primary Mini
                </Button>
                <Button color="secondary" size="xs">
                    Secondary Mini
                </Button>
                <div className="mt-3" />
                <Button color="primary" block>
                    Primary Block
                </Button>
                <Button color="secondary" block>
                    Secondary Block
                </Button>
            </div>
        </section>
    ),
    parameters: {
        layout: "padded",
    },
};

export const BottoniConIcona: Story = {
    render: () => (
        <div>
            <Button className="me-2" color="success" size="lg" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Large
            </Button>
            <Button className="me-2" color="primary" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button
            </Button>
            <Button className="me-2" color="danger" size="sm" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Small
            </Button>
            <Button color="info" size="xs" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Extra Small
            </Button>
        </div>
    ),
};

export const BottoniConIconaCerchiata: Story = {
    render: () => (
        <div>
            <Button className="me-2" color="success" size="lg" icon>
                <span className="rounded-icon">
                    <Icon color="success" icon="it-user" />
                </span>
                <span>Round Icon Large</span>
            </Button>
            <Button className="me-2" color="primary" icon>
                <span className="rounded-icon">
                    <Icon color="primary" icon="it-user" />
                </span>
                <span>Round Icon</span>
            </Button>
            <Button className="me-2" color="danger" size="sm" icon>
                <span className="rounded-icon">
                    <Icon color="danger" icon="it-user" />
                </span>
                <span>Round Icon Small</span>
            </Button>
            <Button color="info" size="xs" icon>
                <span className="rounded-icon">
                    <Icon color="secondary" icon="it-user" />
                </span>
                <span>Round Icon Extra Small</span>
            </Button>
        </div>
    ),
};
