import React, {MouseEventHandler, useState} from "react";

import {
  LinkList,
  LinkListItem,
  Icon,
  NavItem,
  NavLink,
  Navbar,
  Collapse,
  Toggle,
  FormGroup,
  Input,
  Label
} from "../../../src";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof LinkList> = {
  title: "Documentazione/Organizzare i contenuti/Liste",
  component: LinkList
};

export default meta;

type Story = StoryObj<typeof LinkList>;

export const TitoloLista = () => {
    return (
        <div className="sticky-wrapper navbar-wrapper">
            <Navbar expand="lg" className="it-navscroll-wrapper it-top-navscroll">
                <div className="menu-wrapper">
                    <LinkList wrapperClassName="menu-link-list" header={<h3>Indice della pagina</h3>}>
                        <NavItem>
                            <NavLink href="#cos-e">
                                <span>Cos&#39;è</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#luogo">
                                <span>Luogo</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#date-e-orari">
                                <span>Date e orari</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#costi">
                                <span>Costi</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#documenti">
                                <span>Documenti</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contatti">
                                <span>Contatti</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#appuntamenti">
                                <span>Appuntamenti</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#ulteriori-informazioni">
                                <span>Ulteriori informazioni</span>
                            </NavLink>
                        </NavItem>
                    </LinkList>
                </div>
            </Navbar>
        </div>
    );
};

export const _Esempi = () => (
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

export const _StatoAttivo = () => (
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

export const _StatoDisabilitato = () => (
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

export const HeaderEDividerNoLink = () => (
    <LinkList header={<div className="link-list-heading">Intestazione senza link</div>}>
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
);

HeaderEDividerNoLink.storyName = "Header e Divider (senza link)";

export const HeaderEDividerConLink = () => (
    <LinkList
        header={
            <div className="link-list-heading">
                <a href="#">Intestazione con link</a>
            </div>
        }
    >
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
);

HeaderEDividerConLink.storyName = "Header e Divider (con link)";

export const Sizing = () => (
    <LinkList header={<div className="link-list-heading">Intestazione senza link</div>}>
        <LinkListItem large href="#">
            <span>Link list 1</span>
        </LinkListItem>
        <LinkListItem large href="#">
            <span>Link list 2</span>
        </LinkListItem>
        <LinkListItem large href="#">
            <span>Link list 3</span>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem large href="#">
            <span>Link list 4</span>
        </LinkListItem>
    </LinkList>
);

TitoloLista.storyName = "Titolo lista";

export const EsempioMultiline = () => (
    <LinkList multiline>
        <LinkListItem active className="icon-right" href="#">
            <LinkListItem.TitleIconWrapper>
                <span>Link list 1 active</span>
                <Icon color="primary" icon="it-chevron-right" aria-hidden />
            </LinkListItem.TitleIconWrapper>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem className="icon-right" href="#">
            <LinkListItem.TitleIconWrapper>
                <span>Link list 2</span>
                <Icon color="primary" icon="it-chevron-right" aria-hidden />
            </LinkListItem.TitleIconWrapper>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem disabled className="icon-right" href="#">
            <LinkListItem.TitleIconWrapper>
                <span>Link list 3 disabled</span>
                <Icon color="primary" icon="it-chevron-right" aria-hidden />
            </LinkListItem.TitleIconWrapper>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
        </LinkListItem>
    </LinkList>
);


export const CollapseExample = () => {
  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(false);
  const [collapseOpen3, toggleCollapse3] = useState(false);

  const onToggle1: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };

  const onToggle2: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };

  const onToggle3: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };

  const expanded = {
    "aria-expanded": true,
  };
  return (
    <LinkList>
      <LinkListItem bold large className="icon-right" onClick={onToggle1} {...(collapseOpen1 ? expanded : {})}>
        <LinkListItem.TitleIconWrapper>
          <span>Link list 1 </span>
          <Icon className="right" color="primary" icon="it-expand" aria-hidden />
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <Collapse isOpen={collapseOpen1}>
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
      </Collapse>
      <LinkListItem bold large className="icon-right" onClick={onToggle2} {...(collapseOpen2 ? expanded : {})}>
        <LinkListItem.TitleIconWrapper>
          <span>Link list 2 </span>
          <Icon className="right" color="primary" icon="it-expand" aria-hidden />
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <Collapse isOpen={collapseOpen2}>
        <LinkList sublist>
          <LinkListItem>
            <span>Link list 7 </span>
          </LinkListItem>
          <LinkListItem>
            <span>Link list 8 </span>
          </LinkListItem>
          <LinkListItem>
            <span>Link list 9 </span>
          </LinkListItem>
        </LinkList>
      </Collapse>
      <LinkListItem bold large className="icon-right" onClick={onToggle3} {...(collapseOpen3 ? expanded : {})}>
        <LinkListItem.TitleIconWrapper>
          <span>Link list 3 </span>
          <Icon className="right" color="primary" icon="it-expand" aria-hidden />
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <Collapse isOpen={collapseOpen3}>
        <LinkList sublist>
          <LinkListItem>
            <span>Link list 10 </span>
          </LinkListItem>
          <LinkListItem>
            <span>Link list 11 </span>
          </LinkListItem>
          <LinkListItem>
            <span>Link list 12 </span>
          </LinkListItem>
        </LinkList>
      </Collapse>
    </LinkList>
  );
};

export const NavigationComponentFixed = () => (
  <LinkList>
    <LinkListItem bold large className="icon-right">
      <LinkListItem.TitleIconWrapper>
        <span>Link list 1 </span>
        <Icon icon="it-link" color="primary" className="right" />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem bold large className="icon-right">
      <LinkListItem.TitleIconWrapper>
        <span>Link list 2 </span>
        <Icon icon="it-link" color="primary" className="right" />
      </LinkListItem.TitleIconWrapper>
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
    <LinkListItem bold large className="icon-right">
      <LinkListItem.TitleIconWrapper>
        <span>Link list 3 </span>
        <Icon icon="it-link" color="primary" className="right" />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);


export const ControlliComponent = () => (
  <LinkList>
    <LinkListItem active className="icon-left">
      <LinkListItem.TitleIconWrapper>
        <Icon color="primary" icon="it-chevron-right" aria-hidden />
        <span>Link list 1 active</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem className="icon-left">
      <LinkListItem.TitleIconWrapper>
        <Icon color="primary" icon="it-chevron-right" aria-hidden />
        <span>Link list 2</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem disabled className="icon-left">
      <LinkListItem.TitleIconWrapper>
        <Icon color="primary" icon="it-chevron-right" aria-hidden />
        <span>Link list 3 disabled</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

export const ControlliSecondariComponent = () => (
  <LinkList>
    <LinkListItem active className="icon-right">
      <LinkListItem.TitleIconWrapper>
        <span>Link list 1 active</span>
        <Icon color="primary" icon="it-link" aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem className="icon-right">
      <LinkListItem.TitleIconWrapper>
        <span>Link list 2</span>
        <Icon color="primary" icon="it-link" aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem disabled className="icon-right">
      <LinkListItem.TitleIconWrapper>
        <span>Link list 3 disabled</span>
        <Icon color="primary" icon="it-link" aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

export const PrimaryESecondaryAction = () => (
  <LinkList>
    <LinkListItem active className="icon-left">
      <LinkListItem.TitleIconWrapper>
        <Icon color="primary" icon="it-link" aria-hidden />
        <span>Link list 1 active</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem className="icon-left">
      <LinkListItem.TitleIconWrapper>
        <Icon color="primary" icon="it-link" aria-hidden />
        <span>Link list 2</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem disabled className="icon-left">
      <LinkListItem.TitleIconWrapper>
        <Icon color="primary" icon="it-link" aria-hidden />
        <span>Link list 3 disabled</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

export const ConAvatar = () => (
  <LinkList>
    <LinkListItem active>
      <img className="avatar lg-size" src="http://via.placeholder.com/40x40" title="avatartitle" alt="avataralt" />
      <span>Link list 1 active </span>
    </LinkListItem>
    <LinkListItem>
      <img className="avatar lg-size" src="http://via.placeholder.com/40x40" title="avatartitle" alt="avataralt" />
      <span>Link list 2 </span>
    </LinkListItem>
    <LinkListItem disabled>
      <img className="avatar lg-size" src="http://via.placeholder.com/40x40" title="avatartitle" alt="avataralt" />
      <span>Link list 3 disabled </span>
    </LinkListItem>
  </LinkList>
);

export const ConSwitch = () => (
  <LinkList>
    <LinkListItem tag="div" active>
      <Toggle label="Label per toggle" />
    </LinkListItem>
    <LinkListItem tag="div" disabled>
      <Toggle disabled label="Label per disabled toggle" />
    </LinkListItem>
  </LinkList>
);

export const ConCheckbox = () => (
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
