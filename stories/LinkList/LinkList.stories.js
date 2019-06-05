import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    LinkList,
    LinkListItem,
    Toggle,
    Input,
    Label,
    FormGroup,
    Collapse
} from "../../src";

import LinkListCollapsibleExample from "./LinkListCollapsibleExample";

import Esempi from "./Esempi.md";
import StatoAttivo from "./StatoAttivo.md";
import StatoDisabilitato from "./StatoDisabilitato.md";
import HeaderDivider from "./HeaderDivider.md";
import Large from "./Large.md";
import Multiline from "./Multiline.md";
import Controlli from "./Controlli.md";
import ControlliSecondari from "./ControlliSecondari.md";
import ControlliPrimariSecondari from "./ControlliPrimariSecondari.md";
import Avatar from "./Avatar.md";
import Switch from "./Switch.md";
import Checkbox from "./Checkbox.md";
import Navigation from "./Navigation.md";
import Collapsible from "./Collapsible.md";

const stories = storiesOf("Componenti/LinkList", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <LinkList>
        <LinkListItem>
            <span>Link list 1</span>
        </LinkListItem>
        <LinkListItem>
            <span>Link list 2</span>
        </LinkListItem>
        <LinkListItem>
            <span>Link list 3</span>
        </LinkListItem>
    </LinkList>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const StatoAttivoComponent = () => (
    <LinkList>
        <LinkListItem>
            <span>Link list 1</span>
        </LinkListItem>
        <LinkListItem active>
            <span>Link list 2 active</span>
        </LinkListItem>
        <LinkListItem>
            <span>Link list 3</span>
        </LinkListItem>
    </LinkList>
);
stories.add(
    "Stato Attivo",
    withDocs(StatoAttivo, withInfo()(StatoAttivoComponent))
);

const StatoDisabilitatoComponent = () => (
    <LinkList>
        <LinkListItem>
            <span>Link list 1</span>
        </LinkListItem>
        <LinkListItem disabled>
            <span>Link list 2 disabled</span>
        </LinkListItem>
        <LinkListItem>
            <span>Link list 3</span>
        </LinkListItem>
    </LinkList>
);
stories.add(
    "Stato Disabilitato",
    withDocs(StatoDisabilitato, withInfo()(StatoDisabilitatoComponent))
);

const HeaderDividerComponent = () => (
    <section>
        <LinkList>
            <LinkListItem header>Heading senza link</LinkListItem>
            <LinkListItem>
                <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 2</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 3</span>
            </LinkListItem>
            <LinkListItem divider />
            <LinkListItem>
                <span>Link list 4</span>
            </LinkListItem>
        </LinkList>

        <LinkList>
            <LinkListItem header href="#">
                Heading con link
            </LinkListItem>
            <LinkListItem>
                <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 2</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 3</span>
            </LinkListItem>
            <LinkListItem divider />
            <LinkListItem>
                <span>Link list 4</span>
            </LinkListItem>
        </LinkList>
    </section>
);
stories.add(
    "Header e Divider",
    withDocs(HeaderDivider, withInfo()(HeaderDividerComponent))
);

const LargeComponent = () => (
    <LinkList>
        <LinkListItem header href="#">
            Heading
        </LinkListItem>
        <LinkListItem size="large">
            <span>Link list 1</span>
        </LinkListItem>
        <LinkListItem size="large">
            <span>Link list 2</span>
        </LinkListItem>
        <LinkListItem size="large">
            <span>Link list 3</span>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem size="large">
            <span>Link list 4</span>
        </LinkListItem>
    </LinkList>
);
stories.add("Sizing", withDocs(Large, withInfo()(LargeComponent)));

const multilineStories = storiesOf("Componenti/LinkList/Multiline", module);
multilineStories.addDecorator(withA11y);

const MultilineComponent = () => (
    <LinkList multiline>
        <LinkListItem active className="right-icon">
            <span>Link list 1 active</span>
            <i className="it-chevron-right right" />
            <svg class="icon icon-primary icon-right"><use xlinkHref="/svg/sprite.svg#it-chevron-right"></use></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem className="right-icon">
            <span>Link list 2</span>
            <i className="it-chevron-right right" />
            <svg class="icon icon-primary icon-right"><use xlinkHref="/svg/sprite.svg#it-chevron-right"></use></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem disabled className="right-icon">
            <span>Link list 3 disabled</span>
            <i className="it-chevron-right right" />
            <svg class="icon icon-primary icon-right"><use xlinkHref="/svg/sprite.svg#it-chevron-right"></use></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
        </LinkListItem>
    </LinkList>
);
multilineStories.add(
    "Esempi",
    withDocs(Multiline, withInfo()(MultilineComponent))
);

const controlStories = storiesOf("Componenti/LinkList/Con controlli", module);
multilineStories.addDecorator(withA11y);

const ControlliComponent = () => (
    <LinkList>
        <LinkListItem active className="left-icon">
            <i className="it-chevron-right left" aria-hidden="true" />
            <svg class="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-chevron-right"></use></svg>
            <span>Link list 1 active</span>
        </LinkListItem>
        <LinkListItem className="left-icon">
            <i className="it-chevron-right left" aria-hidden="true" />
            <svg class="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-chevron-right"></use></svg>
            <span>Link list 2</span>
        </LinkListItem>
        <LinkListItem disabled className="left-icon">
            <i className="it-chevron-right left" aria-hidden="true" />
            <svg class="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-chevron-right"></use></svg>
            <span>Link list 3 disabled</span>
        </LinkListItem>
    </LinkList>
);
controlStories.add(
    "Primary Action",
    withDocs(Controlli, withInfo()(ControlliComponent))
);

const ControlliSecondariComponent = () => (
    <LinkList>
        <LinkListItem active className="right-icon">
            <span>Link list 1 active</span>
            <i className="it-app right secondary" />
            <svg class="icon icon-primary icon-right"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
        </LinkListItem>
        <LinkListItem className="right-icon">
            <span>Link list 2</span>
            <i className="it-app right secondary" />
            <svg class="icon icon-primary icon-right"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
        </LinkListItem>
        <LinkListItem disabled className="right-icon">
            <span>Link list 3 disabled</span>
            <i className="it-app right secondary" />
            <svg class="icon icon-primary icon-right"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
        </LinkListItem>
    </LinkList>
);
controlStories.add(
    "Secondary Action",
    withDocs(ControlliSecondari, withInfo()(ControlliSecondariComponent))
);

const ControlliPrimariSecondariComponent = () => (
    <LinkList>
        <LinkListItem active className="left-icon right-icon">
            <i className="it-favorite left" />
            <svg class="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
            <span>Link list 1 active</span>
            <i className="it-app right secondary" />
        </LinkListItem>
        <LinkListItem className="left-icon right-icon">
            <i className="it-favorite left" />
            <svg class="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
            <span>Link list 2</span>
            <i className="it-app right secondary" />
        </LinkListItem>
        <LinkListItem disabled className="left-icon right-icon">
            <i className="it-favorite left" />
            <svg class="icon icon-primary"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
            <span>Link list 3 disabled</span>
            <i className="it-app right secondary" />
        </LinkListItem>
    </LinkList>
);
controlStories.add(
    "Primary e Secondary Action",
    withDocs(
        ControlliPrimariSecondari,
        withInfo()(ControlliPrimariSecondariComponent)
    )
);

const AvatarComponent = () => (
    <LinkList>
        <LinkListItem active>
            <img
                className="avatar lg-size"
                src="http://via.placeholder.com/40x40"
                title="avatartitle"
            />
            <span>Link list 1 active </span>
        </LinkListItem>
        <LinkListItem>
            <img
                className="avatar lg-size"
                src="http://via.placeholder.com/40x40"
                title="avatartitle"
            />
            <span>Link list 2 </span>
        </LinkListItem>
        <LinkListItem disabled>
            <img
                className="avatar lg-size"
                src="http://via.placeholder.com/40x40"
                title="avatartitle"
            />
            <span>Link list 3 disabled </span>
        </LinkListItem>
    </LinkList>
);
controlStories.add("Con avatar", withDocs(Avatar, withInfo()(AvatarComponent)));

const SwitchComponent = () => (
    <LinkList>
        <LinkListItem tag="div" active>
            <Toggle label="Label per toggle" />
        </LinkListItem>
        <LinkListItem tag="div" disabled>
            <Toggle disabled label="Label per disabled toggle" />
        </LinkListItem>
    </LinkList>
);
controlStories.add("Con switch", withDocs(Switch, withInfo()(SwitchComponent)));

const CheckboxComponent = () => (
    <LinkList>
        <LinkListItem tag="div" active>
            <FormGroup check className="form-check-group">
                <Input id="checkbox1" type="checkbox" defaultChecked />
                <Label for="checkbox1" check>
                    Checkbox selezionato
                </Label>
            </FormGroup>
        </LinkListItem>
        <LinkListItem tag="div" active>
            <FormGroup check className="form-check-group">
                <Input id="checkbox2" type="checkbox" />
                <Label for="checkbox2" check>
                    Checkbox non selezionato
                </Label>
            </FormGroup>
        </LinkListItem>
        <LinkListItem tag="div" disabled>
            <FormGroup check className="form-check-group">
                <Input id="checkbox3" type="checkbox" disabled />
                <Label for="checkbox3" check>
                    Checkbox disabilitato non selezionato
                </Label>
            </FormGroup>
        </LinkListItem>
    </LinkList>
);
controlStories.add(
    "Con checkbox",
    withDocs(Checkbox, withInfo()(CheckboxComponent))
);

const navigationStories = storiesOf(
    "Componenti/LinkList/Nested navigation",
    module
);
navigationStories.addDecorator(withA11y);

const NavigationComponent = () => (
    <LinkList>
        <LinkListItem size="medium" className="right-icon">
            <span>Link list 1 </span>
            <i className="it-favorite right" />
            <svg class="icon icon-primary right"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
        </LinkListItem>
        <LinkListItem size="medium" className="right-icon">
            <span>Link list 2 </span>
            <i className="it-favorite right" />
            <svg class="icon icon-primary right"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
        </LinkListItem>
        <LinkList sublist>
            <LinkListItem>
                <span>Link list 4 </span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 5 </span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 6 </span>
            </LinkListItem>
        </LinkList>
        <LinkListItem size="medium" className="right-icon">
            <span>Link list 3 </span>
            <i className="it-favorite right" />
            <svg class="icon icon-primary right"><use xlinkHref="/svg/sprite.svg#it-link"></use></svg>
        </LinkListItem>
    </LinkList>
);
navigationStories.add(
    "Fixed",
    withDocs(Navigation, withInfo()(NavigationComponent))
);

navigationStories.add(
    "Collapsible",
    withDocs(
        Collapsible,
        withInfo({
            propTables: [Collapse, LinkList, LinkListItem],
            propTablesExclude: [LinkListCollapsibleExample]
        })(() => <LinkListCollapsibleExample />)
    )
);
