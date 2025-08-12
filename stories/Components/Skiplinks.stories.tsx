import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useRef } from 'react';
import { Skiplink, SkiplinkItem } from '../../src';

const meta: Meta = {
  title: 'Documentazione/Componenti/Skiplinks',
  component: Skiplink,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Skiplink>;

const EsempiWithHooks = () => {
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // We focus the container here since it is hosted inside Storybook's iframe
    // @ts-expect-error: with no types annotated, never is inferred here
    containerRef.current?.focus();
  }, []);

  const onClick = () => {
    // @ts-expect-error: with no types annotated, never is inferred here
    footerRef.current?.scrollIntoView();
  };

  return (
    <section tabIndex={-1} ref={containerRef}>
      <div id='#main' />
      <div id='#footer' ref={footerRef} />

      <Skiplink>
        <SkiplinkItem href='#main'>Skip to main content</SkiplinkItem>
        <SkiplinkItem onClick={onClick}>Skip to footer</SkiplinkItem>
      </Skiplink>
    </section>
  );
};

const EsempiWithNav = () => {
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // We focus the container here since it is hosted inside Storybook's iframe
    // @ts-expect-error: with no types annotated, never is inferred here
    containerRef.current?.focus();
  }, []);

  const onClick = () => {
    // @ts-expect-error: with no types annotated, never is inferred here
    footerRef.current?.scrollIntoView();
  };

  return (
    <section tabIndex={-1} ref={containerRef}>
      <div id='#main' />
      <div id='#footer' ref={footerRef} />

      <Skiplink nav aria-label='Scorciatoie di navigazione'>
        <SkiplinkItem navItem href='#main'>Skip to main content</SkiplinkItem>
        <SkiplinkItem navItem onClick={onClick}>Skip to footer</SkiplinkItem>
      </Skiplink>
    </section>
  );
};

export const _Esempi: Story = {
  render: () => <EsempiWithHooks />
};

export const _EsempiWithNav: Story = {
  render: () => <EsempiWithNav />
};