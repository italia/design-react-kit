import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Breadcrumb, BreadcrumbItem, Icon } from "../../src";

const meta: Meta<typeof Breadcrumb> = {
    title: "Documentazione/Menu di navigazione/Breadcrumbs",
    component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Esempi: Story = {
    render: () => (
        <section>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>Current section</BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                    <span className="separator">&gt;</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">Subsection</a>
                    <span className="separator">&gt;</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>Current section</BreadcrumbItem>
            </Breadcrumb>
        </section>
    ),
};

export const ConIcone: Story = {
    render: () => (
        <section>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />
                    Current section
                </BreadcrumbItem>
            </Breadcrumb>
        </section>
    ),
};

export const SuSfondoScuro: Story = {
    render: () => (
        <section>
            <Breadcrumb dark>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>Current section</BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb dark>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />
                    Current section
                </BreadcrumbItem>
            </Breadcrumb>
        </section>
    ),
};
