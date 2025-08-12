import { Meta, StoryObj } from '@storybook/react-vite';
import React from "react";
import { Forward, GoBack } from '../../src';

const meta: Meta<typeof GoBack> = {
  title: "Documentazione/Componenti/GoBack",
  component: GoBack
};

export default meta;

type Story = StoryObj<typeof Forward>;

export const Esempi: Story = {
  render: () => (
    <GoBack link>Torna indietro</GoBack>
  )
}

export const Pulsanti: Story = {
  render: () => (
    <><GoBack>Torna indietro</GoBack>{' '}<GoBack up>Livello superiore</GoBack></>
  )
}

export const PulsantiSoloIcona: Story = {
  render: () => (
    <><GoBack />{' '}<GoBack up /></>
  )
}
