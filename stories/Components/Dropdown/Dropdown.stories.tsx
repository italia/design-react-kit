import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, LinkList, LinkListItem } from "../../../src";

const meta: Meta<typeof Dropdown> = {
    title: "Documentazione/Componenti/Dropdown",
    component: Dropdown,
    parameters: {
        docs: {
            story: {
                height: '225px'
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const _VarianteBottoni: Story = {
    render: () => {
        return (
            <ButtonGroup className="d-flex justify-content-around">
                <Dropdown>
                    <DropdownToggle color="primary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle color="secondary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle color="danger" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem>Azione 1</LinkListItem>
                            <LinkListItem>Azione 2</LinkListItem>
                            <LinkListItem>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
        );
    },
    //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
    decorators: [
        (Story) => (
            <div className="m-2">
                <Story />
            </div>
        ),
    ],
};

export const _Esempi: Story = {
    render: () => {
        return (
            <section>
                <Dropdown className="me-3">
                    <DropdownToggle color="primary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </section>
        );
    },
    parameters: {
        layout: 'centered'
    },
    //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
    decorators: [
        (Story) => (
            <div className="m-2">
                <Story />
            </div>
        ),
    ],
};

export const _Link: Story = {
    render: () => {
        return (
            <section>
                <Dropdown className="me-3">
                    <DropdownToggle color="primary" tag="a" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </section>
        );
    }
};
