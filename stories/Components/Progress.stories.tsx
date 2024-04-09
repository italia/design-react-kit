import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, Icon, Progress } from "../../src";

const meta: Meta<typeof Progress> = {
    title: "Documentazione/Componenti/Progress",
    component: Progress,
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Esempio = () => <Progress value="50" />;

export const Etichette = () => <Progress value="35" label="progresso" />;

export const ProgressoIndeterminato = () => <Progress indeterminate label="In elaborazione..." />;

export const Colori = () => (
    <div>
        <Progress value="25" color="success" />
        <Progress value="33" color="info" />
        <Progress value="50" color="warning" />
        <Progress value="66" color="danger" />
    </div>
);

export const BottoneConProgressBar = () => (
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6">
                <p>
                    <strong>Bottone primario</strong>
                </p>
                <Button color="primary" className="btn-progress" disabled>
                    Label bottone <Icon color="light" icon="it-github" aria-hidden />
                    <span>
                        <Progress value="50" />
                    </span>
                </Button>
            </div>
            <div className="col-12 col-sm-6">
                <p>
                    <strong>Bottone secondario</strong>
                </p>
                <Button color="secondary" className="btn-progress" disabled>
                    Label bottone <Icon color="light" icon="it-github" aria-hidden />
                    <span>
                        <Progress value="50" />
                    </span>
                </Button>
            </div>
        </div>
    </div>
);

export const _EsempiInterattivi: Story = {
    render: ({ value, color, label }) => {
        return (
            <div>
                <Progress value={value} label={label} color={color} />
            </div>
        )
    },
    args: {
        color: "",
        value: 25,
        label: "progresso",
    },
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["", "success", "info", "warning", "danger"],
            },
        },
    }
};