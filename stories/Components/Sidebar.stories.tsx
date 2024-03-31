import { type Meta, type StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Collapse, Icon, LinkList, LinkListItem, Sidebar } from "../../src";


const meta: Meta<typeof Sidebar> = {
  title: "Documentazione/Componenti/Sidebar",
  component: Sidebar
};

export default meta;

type Story = StoryObj<typeof Sidebar>;


export const BasicSidebar: Story = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
);


export const _ConIcona: Story = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem bold active className="left-icon">
        <LinkListItem.TitleIconWrapper>
          <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
          <span>Link list active</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <LinkListItem bold disabled className="left-icon">
        <LinkListItem.TitleIconWrapper>
          <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
          <span>Link list disabled</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <LinkListItem bold className="left-icon">
        <LinkListItem.TitleIconWrapper>
          <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
          <span>Link list</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <LinkListItem bold className="left-icon">
        <LinkListItem.TitleIconWrapper>
          <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
          <span>Link list</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
);

_ConIcona.storyName = "Con icona";

export const ConLineaADestra: Story = () => (
  <Sidebar right>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
);

ConLineaADestra.storyName = "Con linea a destra";

export const ConLineaASinistra: Story = () => (
  <Sidebar left>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
);

ConLineaASinistra.storyName = "Con linea a sinistra";


export const SidebarVersioneScura: Story = () => (
  <Sidebar dark>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
);



SidebarVersioneScura.storyName = "Sidebar versione scura";


export const _Annidata = () => {
  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(false);
  const [collapseOpen3, toggleCollapse3] = useState(false);

  return (
    <Sidebar left>
      <LinkList>
        <LinkListItem
          large
          bold
          className="right-icon"
          onClick={(e) => {
            e.preventDefault();
            toggleCollapse1(!collapseOpen1);
          }}
          aria-expanded={collapseOpen1}
        >
          <LinkListItem.TitleIconWrapper>
            <span>Link list 1 </span>
            <Icon className="right" icon="it-expand" color="primary" aria-hidden />
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
        <LinkListItem
          large
          bold
          className="right-icon"
          onClick={(e) => {
            e.preventDefault();
            toggleCollapse2(!collapseOpen2);
          }}
          aria-expanded={collapseOpen2}
        >
          <LinkListItem.TitleIconWrapper>
            <span>Link list 2 </span>
            <Icon className="right" icon="it-expand" color="primary" aria-hidden />
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
        <LinkListItem
          large
          bold
          className="right-icon"
          onClick={(e) => {
            e.preventDefault();
            toggleCollapse3(!collapseOpen3);
          }}
          aria-expanded={collapseOpen3}
        >
          <LinkListItem.TitleIconWrapper>
            <span>Link list 3 </span>
            <Icon className="right" icon="it-expand" color="primary" aria-hidden />
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
        <Sidebar secondary />
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
  );
};
_Annidata.storyName = "Sidebar annidata";
