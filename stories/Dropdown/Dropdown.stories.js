import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    LinkList,
    LinkListItem
} from "../../src";

import DropdownExample from "./DropdownExample";
import DropdownButtonExample from "./DropdownButtonExample";

import Esempi from "./Esempi.md";
import VarianteBottoni from "./VarianteBottoni.md";
import Link from "./Link.md";
import MenuVociAttive from "./MenuVociAttive.md";
import MenuVociDisabilitate from "./MenuVociDisabilitate.md";
import MenuHeaderDivider from "./MenuHeaderDivider.md";
import MenuLarge from "./MenuLarge.md";
import MenuFull from "./MenuFull.md";
import MenuIconRight from "./MenuIconRight.md";
import MenuIconLeft from "./MenuIconLeft.md";
import MenuDark from "./MenuDark.md";

const stories = storiesOf("Componenti/Dropdown", module);
stories.addDecorator(withA11y);

stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTables: [
                Dropdown,
                DropdownMenu,
                DropdownItem,
                DropdownToggle,
                LinkList,
                LinkListItem
            ],
            propTablesExclude: [DropdownExample]
        })(() => <DropdownExample />)
    )
);

const VarianteComponent = () => (
    <section>
        <DropdownButtonExample color="primary" />
        <DropdownButtonExample color="secondary" />
        <DropdownButtonExample color="danger" />
    </section>
);
stories.add(
    "Variante Bottoni",
    withDocs(
        VarianteBottoni,
        withInfo({
            propTables: [
                Dropdown,
                DropdownMenu,
                DropdownItem,
                DropdownToggle,
                LinkList,
                LinkListItem
            ],
            propTablesExclude: [DropdownButtonExample]
        })(VarianteComponent)
    )
);

stories.add(
    "Link",
    withDocs(
        Link,
        withInfo({
            propTables: [
                Dropdown,
                DropdownMenu,
                DropdownItem,
                DropdownToggle,
                LinkList,
                LinkListItem
            ],
            propTablesExclude: [DropdownExample]
        })(() => <DropdownExample tag="span" />)
    )
);

const menuStories = storiesOf("Componenti/Dropdown/Dropdown menu", module);
menuStories.addDecorator(withA11y);

const MenuVociAttiveComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block position-relative">
            <LinkList>
                <LinkListItem active>
                    <span>Azione 1</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Azione 2</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Azione 3</span>
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menù voci attive",
    withDocs(MenuVociAttive, withInfo()(MenuVociAttiveComponent))
);

const MenuVociDisabilitateComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block position-relative">
            <LinkList>
                <LinkListItem>
                    <span>Azione 1</span>
                </LinkListItem>
                <LinkListItem disabled>
                    <span>Azione 2</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Azione 3</span>
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menù voci disabilitate",
    withDocs(MenuVociDisabilitate, withInfo()(MenuVociDisabilitateComponent))
);

const MenuHeaderDividerComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block position-relative">
            <LinkList>
                <LinkListItem header>Header</LinkListItem>
                <LinkListItem>
                    <span>Azione 1</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Azione 2</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Azione 3</span>
                </LinkListItem>
                <LinkListItem divider />
                <LinkListItem>
                    <span>Azione 4</span>
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menù headers e separatori",
    withDocs(MenuHeaderDivider, withInfo()(MenuHeaderDividerComponent))
);

const MenuLargeComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block position-relative">
            <LinkList>
                <LinkListItem size="large">
                    <span>Azione 1</span>
                </LinkListItem>
                <LinkListItem size="large">
                    <span>Azione 2</span>
                </LinkListItem>
                <LinkListItem size="large">
                    <span>Azione 3</span>
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menu con voci large",
    withDocs(MenuLarge, withInfo()(MenuLargeComponent))
);

const MenuFullComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block full-width position-relative">
            <LinkList>
                <LinkListItem size="large">
                    <span>Azione 1</span>
                </LinkListItem>
                <LinkListItem size="large">
                    <span>Azione 2</span>
                </LinkListItem>
                <LinkListItem size="large">
                    <span>Azione 3</span>
                </LinkListItem>
                <LinkListItem size="large">
                    <span>Azione 4</span>
                </LinkListItem>
                <LinkListItem size="large">
                    <span>Azione 5</span>
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menù full width",
    withDocs(MenuFull, withInfo()(MenuFullComponent))
);

const MenuIconRightComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block position-relative">
            <LinkList>
                <LinkListItem className="right-icon">
                    <span>Azione 1</span>
                    <i className="it-info right" />
                </LinkListItem>
                <LinkListItem className="right-icon">
                    <span>Azione 2</span>
                    <i className="it-info right" />
                </LinkListItem>
                <LinkListItem className="right-icon">
                    <span>Azione 3</span>
                    <i className="it-info right" />
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menù icona a destra",
    withDocs(MenuIconRight, withInfo()(MenuIconRightComponent))
);

const MenuIconLeftComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block position-relative">
            <LinkList>
                <LinkListItem className="left-icon">
                    <i className="it-info left" />
                    <span>Azione 1</span>
                </LinkListItem>
                <LinkListItem className="left-icon">
                    <i className="it-info left" />
                    <span>Azione 2</span>
                </LinkListItem>
                <LinkListItem className="left-icon">
                    <i className="it-info left" />
                    <span>Azione 3</span>
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add(
    "Menù icona a sinistra",
    withDocs(MenuIconLeft, withInfo()(MenuIconLeftComponent))
);

const MenuDarkComponent = () => (
    <div className="clearfix">
        <DropdownMenu isOpen className="d-block dark position-relative">
            <LinkList>
                <LinkListItem header>Header</LinkListItem>
                <LinkListItem active className="right-icon">
                    <span>Azione 1 (attivo)</span>
                    <i className="it-info right" />
                </LinkListItem>
                <LinkListItem className="right-icon">
                    <span>Azione 2</span>
                    <i className="it-info right" />
                </LinkListItem>
                <LinkListItem className="right-icon">
                    <span>Azione 3</span>
                    <i className="it-info right" />
                </LinkListItem>
                <LinkListItem divider />
                <LinkListItem className="right-icon">
                    <span>Azione 4</span>
                    <i className="it-info right" />
                </LinkListItem>
                <LinkListItem disabled className="right-icon">
                    <span>Azione 5 (disabilitato)</span>
                    <i className="it-info right" />
                </LinkListItem>
            </LinkList>
        </DropdownMenu>
    </div>
);
menuStories.add("Menù dark", withDocs(MenuDark, withInfo()(MenuDarkComponent)));
