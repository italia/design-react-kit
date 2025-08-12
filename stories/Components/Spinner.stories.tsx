import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Spinner } from "../../src";

const meta: Meta<typeof Spinner> = {
    title: "Documentazione/Componenti/Spinner",
    component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Esempio: Story = {
    render: () => (
        <div className="container">
            <div className="row">
                <div className="col-6 col-lg-3">
                    <p className="mb-3">
                        <strong>Spinner standard</strong>
                    </p>
                    <Spinner />
                </div>
                <div className="col-6 col-lg-3">
                    <p className="mb-3">
                        <strong>Spinner Attivo</strong>
                    </p>
                    <Spinner active />
                </div>
                <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                    <p className="mb-3">
                        <strong>Small</strong>
                    </p>
                    <Spinner small />
                </div>
                <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                    <p className="mb-3">
                        <strong>Small attivo</strong>
                    </p>
                    <Spinner small active />
                </div>
            </div>
        </div>
    )
};

export const SpinnerDoppio: Story = {
    render: () => (
        <div className="container">
            <div className="row">
                <div className="col-6 col-lg-3">
                    <p className="mb-3">
                        <strong>Spinner doppio</strong>
                    </p>
                    <Spinner double />
                </div>
                <div className="col-6 col-lg-3">
                    <p className="mb-3">
                        <strong>Doppio attivo</strong>
                    </p>
                    <Spinner double active />
                </div>
                <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                    <p className="mb-3">
                        <strong>Doppio small</strong>
                    </p>
                    <Spinner double small />
                </div>
                <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                    <p className="mb-3">
                        <strong>Doppio small attivo</strong>
                    </p>
                    <Spinner double small active />
                </div>
            </div>
        </div>
    )
};
