import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import {
    Button,
    Col,
    Collapse,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Header,
    HeaderBrand,
    HeaderContent,
    HeaderLinkZone,
    HeaderProps,
    HeaderRightZone,
    HeaderToggler,
    Icon,
    LinkList,
    LinkListItem,
    Row,
} from "../../../src";

const meta: Meta = {
    title: "Documentazione/Menu di navigazione/Header/Slim",
    component: Header,
};
export default meta;

type Story = StoryObj<HeaderProps & { isOpen: boolean, brandText: string }>;

export const SlimHeader: Story = {
    render: ({ theme, isOpen, brandText }) => {
        return (
            <Header type="slim" theme={theme}>
                <HeaderContent>
                    <HeaderBrand>{brandText}</HeaderBrand>
                    <HeaderLinkZone>
                        <HeaderToggler
                            onClick={() => {
                                /* open logic state here */
                            }}
                        >
                            <span>{brandText}</span>
                            <Icon icon="it-expand" />
                        </HeaderToggler>
                        <Collapse isOpen={isOpen} header>
                            <LinkList>
                                <LinkListItem href="#">Link 1</LinkListItem>
                                <LinkListItem href="#" active>
                                    Link 2 Active
                                </LinkListItem>
                            </LinkList>
                        </Collapse>
                    </HeaderLinkZone>
                    <HeaderRightZone>
                        <Dropdown inNavbar>
                            <DropdownToggle inNavbar caret>
                                ITA
                            </DropdownToggle>
                            <DropdownMenu>
                                <Row>
                                    <Col size="12">
                                        <LinkList>
                                            <LinkListItem inDropdown href="#">
                                                <span>ITA</span>
                                            </LinkListItem>
                                            <LinkListItem inDropdown href="#">
                                                <span>ENG</span>
                                            </LinkListItem>
                                        </LinkList>
                                    </Col>
                                </Row>
                            </DropdownMenu>
                        </Dropdown>
                        <div className="it-access-top-wrapper">
                            <Button color="primary" size="sm">
                                Accedi
                            </Button>
                        </div>
                    </HeaderRightZone>
                </HeaderContent>
            </Header>
        );
    },
    parameters: {
        docs: {
            controls: {
                exclude: ["isOpen", "className", "type", "small", "testId"],
            },
        },
    },
    args: {
        theme: "",
        isOpen: false,
        brandText: "Ente appartenenza/Owner",
    },
};

export const SlimHeaderFullResponse: Story = {
    render: ({ theme }) => {
        return (
            <Header type="slim" theme={theme}>
                <HeaderContent>
                    <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
                    <HeaderRightZone>
                        <Dropdown inNavbar>
                            <DropdownToggle inNavbar caret>
                                ITA
                            </DropdownToggle>
                            <DropdownMenu>
                                <Row>
                                    <Col size="12">
                                        <LinkList>
                                            <LinkListItem inDropdown href="#">
                                                <span>ITA</span>
                                            </LinkListItem>
                                            <LinkListItem inDropdown href="#">
                                                <span>ENG</span>
                                            </LinkListItem>
                                        </LinkList>
                                    </Col>
                                </Row>
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" className="btn-icon btn-full" href="#">
                            <span className="rounded-icon">
                                <Icon color="primary" icon="it-user" />
                            </span>
                            <span className="d-none d-lg-block">Accedi all&#39;area personale</span>
                        </Button>
                    </HeaderRightZone>
                </HeaderContent>
            </Header>
        );
    }
};
