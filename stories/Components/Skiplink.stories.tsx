import React, { useRef, useEffect } from 'react';
import {Popover, Skiplink, SkiplinkItem} from '../../src';
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Skiplink> = {
  title: "Documentazione/Componenti/Skiplink",
  component: Skiplink,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const _Esempi : Story = {
  render: () => {
    const containerRef = useRef(null);

    const footerRef = useRef(null);

    useEffect(() => {
      // We focus the container here since it is hosted inside Storybook's iframe
      // @ts-ignore: with no types annotated, never is inferred here
      containerRef.current?.focus();
    }, []);

    const onClick = () => {
      // @ts-ignore: with no types annotated, never is inferred here
      footerRef.current?.scrollIntoView();
    };

    return (
      <section tabIndex={-1} ref={containerRef}>
        <div id='#main'/>
        <div id='#footer' ref={footerRef}/>

        <Skiplink>
          <SkiplinkItem href='#main'>Skip to main content</SkiplinkItem>
          <SkiplinkItem onClick={onClick}>Skip to footer</SkiplinkItem>
        </Skiplink>
      </section>
    );
  }
};

