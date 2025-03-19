
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Icon, List, ListItem } from '../src';

describe('List component', () => {
  it('should work as container for children elements', () => {
    render(
      <List>
        <ListItem>
          <span className="text">
            Testo
          </span>
        </ListItem>
      </List>
    );

    expect(screen.getByText('Testo')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(
      <List className='myclass'>
        <ListItem>
          <span className="text">
            Testo
          </span>
        </ListItem>
      </List>
    );

    expect(container.firstChild?.firstChild).toHaveClass('myclass');
  });

  it('should have the right class', () => {
    const { container } = render(
      <List>
        <ListItem>
          <span className="text">
            Testo
          </span>
        </ListItem>
      </List>
    );

    const ul = container.querySelector("ul"),
      divInsideUl = ul?.querySelector("li div"),
      divInsideDiv = divInsideUl?.querySelector("div");
    if (ul && divInsideUl && divInsideUl) {

      expect(container.firstChild).toHaveClass('it-list-wrapper');
      expect(ul).toHaveClass('it-list');
      expect(divInsideUl).toHaveClass('list-item');
      expect(divInsideDiv).toHaveClass('it-right-zone');
    }
  });

  it('should have avatar', () => {
    const { container } = render(
      <List>
        <ListItem avatar={<img alt="Anna Barbieri" src="https://randomuser.me/api/portraits/women/41.jpg" />}>
          <span className="text">
            Testo
          </span>
        </ListItem>
      </List>
    );

    const avatar = container.getElementsByClassName("list-item");
    if (avatar) {
      expect(avatar.length).toBe(1);
      expect(avatar.item(0)?.querySelector("div")).toHaveClass('avatar size-lg');
    }
  });

  it('should have icon', () => {
    const { container } = render(
      <List>
        <ListItem icon={<Icon icon="it-folder" />}>
          <span className="text">
            Testo
          </span>
        </ListItem>
      </List>
    );

    const icon = container.getElementsByClassName("list-item");
    if (icon) {
      expect(icon.length).toBe(1);
      expect(icon.item(0)?.querySelector("div")).toHaveClass('it-rounded-icon');
      expect(icon.item(0)?.querySelector("div")?.firstChild?.nodeName).toBe('svg');
    }
  });

  it('should have image', () => {
    const { container } = render(
      <List>
        <ListItem img={<img alt="descrizione immagine" src="https://placehold.jp/40x40.png" />}>
          <span className="text">
            Testo
          </span>
        </ListItem>
      </List>
    );

    const image = container.getElementsByClassName("list-item");
    if (image) {
      expect(image.length).toBe(1);
      expect(image.item(0)?.querySelector("div")).toHaveClass('it-thumb');
      expect(image.item(0)?.querySelector("div")?.firstChild?.nodeName).toBe('IMG');
    }
  });

  it('should have icon as arrow', () => {
    const { container } = render(
      <List>
        <ListItem>
          <span className="text">
            Testo
          </span>
          <Icon icon="it-chevron-right" />
        </ListItem>
      </List>
    );

    const element = container.getElementsByClassName("it-right-zone");
    if (element) {
      expect(element.item(0)?.querySelector("span")?.nodeName).toBe('SPAN');
      expect(element.item(0)?.querySelector("svg")?.nodeName).toBe('svg');
    }
  });

  it('should have multiple action', () => {
    const { container } = render(
      <List>
        <ListItem>
          <span className="text">
            Testo
          </span>
          <ListItem.MultipleAction>
            <a
              aria-label="Testo - Azione "
              href="#"
            >
              <Icon icon="it-code-circle" />
            </a>
            <a
              aria-label="Testo - Azione "
              href="#"
            >
              <Icon icon="it-code-circle" />
            </a>
            <a
              aria-label="Testo - Azione "
              href="#"
            >
              <Icon icon="it-code-circle" />
            </a>
          </ListItem.MultipleAction>
        </ListItem>
      </List>
    );

    const element = container.getElementsByClassName("it-right-zone"),
      action = element.item(0);
    if (action) {
      expect(action?.lastChild?.nodeName).toBe('SPAN');
      expect(action?.lastChild).toHaveClass('it-multiple');
      expect(action?.lastChild?.firstChild?.nodeName).toBe('A');
    }
  });

  it('should have avatar and metadata', () => {
    const { container } = render(
      <List>
        <ListItem avatar={<img alt="Anna Barbieri" src="https://randomuser.me/api/portraits/women/41.jpg" />}>
          <span className="text">
            Testo
          </span>
          <span className="metadata">
            metadata testo
          </span>
        </ListItem>
      </List>
    );

    const avatar = container.getElementsByClassName("list-item"),
      metadata = container.getElementsByClassName("it-right-zone");
    if (avatar) {
      expect(avatar.length).toBe(1);
      expect(avatar.item(0)?.querySelector("div")).toHaveClass('avatar size-lg');
    }
    if (metadata) {
      expect(metadata.item(0)?.lastChild).toHaveClass("metadata");
    }
  });

  it('should have text, multiple action and metadata', () => {
    const { container } = render(
      <List>
        <ListItem>
          <span className="text">
            Testo
            <em>
              Lorem ipsum dolor sit amet.
            </em>
          </span>
          <ListItem.MultipleAction>
            <span className="metadata">
              metadata testo
            </span>
            <a
              aria-label="Testo - Azione "
              href="#"
            >
              <Icon icon="it-code-circle" />
            </a>
            <a
              aria-label="Testo - Azione "
              href="#"
            >
              <Icon icon="it-code-circle" />
            </a>
            <a
              aria-label="Testo - Azione "
              href="#"
            >
              <Icon icon="it-code-circle" />
            </a>
          </ListItem.MultipleAction>
        </ListItem>
      </List>
    );

    const element = container.getElementsByClassName("it-right-zone"),
      action = element.item(1);
    if (element) {
      expect(element.item(0)?.firstChild?.nodeName).toBe("SPAN");
      expect(element.item(0)?.firstChild?.lastChild?.nodeName).toBe("EM");
    }
    if (action) {
      expect(action.lastChild?.nodeName).toBe('SPAN');
      expect(action.lastChild).toHaveClass('it-multiple');
      expect(action.lastChild?.firstChild?.nodeName).toBe('SPAN');
      expect(action.lastChild?.firstChild).toHaveClass('metadata');
      expect(action.querySelector("s")?.nodeName).toBe('A');
    }
  });
});
