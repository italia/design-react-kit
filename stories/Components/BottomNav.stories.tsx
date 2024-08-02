import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BottomNav, BottomNavItem } from "../../src";

const meta: Meta<typeof BottomNav> = {
    title: "Documentazione/Menu di navigazione/BottomNav",
    component: BottomNav,
    parameters: {
        docs: {
            story: {
                height: '150px'
            },
        }
    }
};

export default meta;

type Story = StoryObj<typeof BottomNav>;

export const Esempi: Story = {
    render: () => (
        <BottomNav>
            <BottomNavItem label="messaggi" />
            <BottomNavItem label="immagini" iconName="it-camera" />
            <BottomNavItem label="documenti" iconName="it-file" />
        </BottomNav>
    ),
};

export const Esempi4Links: Story = {
    render: () => (
        <BottomNav>
            <BottomNavItem label="messaggi" />
            <BottomNavItem label="immagini" iconName="it-camera" />
            <BottomNavItem label="documenti" iconName="it-file" />
            <BottomNavItem label="preferiti" iconName="it-star-outline" />
        </BottomNav>
    ),
};

export const EsempioBadge: Story = {
    render: () => (
        <BottomNav>
            <BottomNavItem label="messaggi" badge={1} srText="- 1 da leggere" />
            <BottomNavItem label="immagini" badge={2} iconName="it-camera" srText="- 2 da vedere" active />
            <BottomNavItem label="documenti" badge={88} iconName="it-file" srText="- 88 da esaminare" />
            <BottomNavItem label="preferiti" iconName="it-star-outline" />
            <BottomNavItem label="preferenze" iconName="it-settings" />
        </BottomNav>
    ),
};

export const Alert: Story = {
    render: () => (
        <BottomNav>
            <BottomNavItem alert label="messaggi" srText="- nuovo contenuto disponibile" />
            <BottomNavItem label="immagini" iconName="it-camera" />
            <BottomNavItem alert label="documenti" iconName="it-file" srText="- nuovo contenuto disponibile" />
            <BottomNavItem label="preferiti" iconName="it-star-outline" />
            <BottomNavItem label="preferenze" iconName="it-settings" />
        </BottomNav>
    ),
};
