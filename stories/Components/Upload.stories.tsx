import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Upload } from '../../src';

const meta: Meta<typeof Upload> = {
    title: "Documentazione/Form/Upload",
    component: Upload,
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const Esempio: Story = {
    render: (args) => (
        <Upload {...args} />
    ),
    args: {
        id: 'ExampleUpload',
    }
};