/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState } from 'react';
import type { Story } from '@storybook/react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Callout,
  CalloutText,
  CalloutTitle,
  Icon,
  CalloutProps
} from '../../src';

export default {
  title: 'Componenti/Callout'
};

export const EsempioBasico: Story = () => (
  <Callout>
    <CalloutTitle>Titolo Callout</CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
);

export const EsempioConIcona: Story = () => (
  <Callout>
    <CalloutTitle>
      <Icon icon='it-info-circle' padding={false} aria-hidden />
      <span className='sr-only'>Confermato</span>
      Titolo Callout
    </CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
);

EsempioConIcona.storyName = 'Esempio con icona';

export const EsempioAccessibilita: Story = () => (
  <Callout>
    <CalloutTitle>
      <Icon icon='it-check-circle' padding={false} aria-hidden />
      <span className='sr-only'>Confermato</span>
      Titolo Callout
    </CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
);

EsempioAccessibilita.storyName = 'Esempio accessibilità';

type CalloutTemplateProps = { color: CalloutProps['color']; title: string };
export const CalloutTemplate: Story<CalloutTemplateProps> = ({
  title,
  color
}) => (
  <Callout color={color}>
    <CalloutTitle>
      <Icon icon='it-check-circle' padding={false} aria-hidden />
      {title}
    </CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
);

export const ProceduraAvvenutaConSuccesso: Story<CalloutTemplateProps> = CalloutTemplate.bind(
  {}
);
ProceduraAvvenutaConSuccesso.args = { title: 'Usa', color: 'success' };
ProceduraAvvenutaConSuccesso.storyName = 'Procedura avvenuta con successo';

export const ProceduraCheRichiedeAttenzione: Story<CalloutTemplateProps> = CalloutTemplate.bind(
  {}
);
ProceduraCheRichiedeAttenzione.args = { title: 'Attenzione', color: 'warning' };
ProceduraCheRichiedeAttenzione.storyName = 'Procedura che richiede attenzione';

export const ProceduraPericolosaONonConsentita: Story<CalloutTemplateProps> = CalloutTemplate.bind(
  {}
);
ProceduraPericolosaONonConsentita.args = {
  title: 'Non usare',
  color: 'danger'
};
ProceduraPericolosaONonConsentita.storyName =
  'Procedura pericolosa o non consentita';

export const ProceduraImportante: Story<CalloutTemplateProps> = CalloutTemplate.bind(
  {}
);
ProceduraImportante.args = { title: 'Importante', color: 'important' };
ProceduraImportante.storyName = 'Procedura importante';

export const CalloutNote: Story<CalloutTemplateProps> = CalloutTemplate.bind(
  {}
);
CalloutNote.args = { title: 'Note a riguardo', color: 'note' };

export const CalloutHighlights: Story = () => (
  <Callout highlight>
    <CalloutTitle>Titolo Callout</CalloutTitle>
    <CalloutText bigText>
      Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet
      erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
    </CalloutText>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius. Maecenas ullamcorper <a href='#'>tincidunt nulla quis laoreet.</a>
    </CalloutText>
  </Callout>
);

type CalloutHighlightTemplateProps = CalloutTemplateProps;
const CalloutHighlightsTemplate: Story<CalloutHighlightTemplateProps> = ({
  title,
  color
}) => (
  <Callout highlight color={color}>
    <CalloutTitle>
      <Icon icon='it-info-circle' padding={false} aria-hidden />
      {title}
    </CalloutTitle>
    <CalloutText bigText>
      Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet
      erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
    </CalloutText>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius. Maecenas ullamcorper <a href='#'>tincidunt nulla quis laoreet.</a>
    </CalloutText>
  </Callout>
);

export const CalloutHighlightsSuccess: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind(
  {}
);
CalloutHighlightsSuccess.args = { title: 'Usa', color: 'success' };

export const CalloutHighlightsWarning: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind(
  {}
);
CalloutHighlightsWarning.args = { title: 'Attenzione', color: 'warning' };

export const CalloutHighlightsDanger: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind(
  {}
);
CalloutHighlightsDanger.args = { title: 'Non usare', color: 'danger' };

export const CalloutHighlightsImportant: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind(
  {}
);
CalloutHighlightsImportant.args = { title: 'Importante', color: 'important' };

export const CalloutHighlightsNote: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind(
  {}
);
CalloutHighlightsNote.args = { title: 'Note', color: 'note' };

export const CalloutApprofondimento = () => {
  const [isOpen, toggleOpen] = useState(false);
  const toggle = () => {
    toggleOpen(!isOpen);
  };
  return (
    <Callout color='note' detailed>
      <CalloutTitle>
        <Icon icon='it-zoom-in' padding={false} aria-hidden />
        <span>Approfondimento</span>
      </CalloutTitle>
      <CalloutText>
        <p>
          Quisque suscipit interdum augue non volutpat. Cras tristique arcu
          tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus
          sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia
          ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida
          eros viverra in. Proin dictum nibh ut semper tristique.
        </p>
        <p>
          Maecenas at erat id{' '}
          <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet
          erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
          Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna,
          eu commodo odio mauris semper dolor.
        </p>
        <p>
          Maecenas vulputate ante dictum <a href='#'>vestibulum volutpat</a>.
          Lorem ipsum dolor sit amet,{' '}
          <strong>consectetur adipiscing elit.</strong> Aenean non augue non
          purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis
          laoreet.
        </p>
        <Accordion>
          <AccordionHeader
            tag={Button}
            active={isOpen}
            onToggle={toggle}
            className='callout-more-toggle'
            append={
              <a className='callout-more-download' href='#'>
                <Icon icon='it-download' />
                <span className='sr-only'>PDF</span> Download
              </a>
            }
          >
            Leggi tutto <span></span>
          </AccordionHeader>
          <AccordionBody active={isOpen}>
            <p>
              Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam.
              Vestibulum non accumsan felis, at ultrices lorem. Pellentesque ac
              diam a ipsum cursus interdum id nec odio. Vestibulum nec congue
              mauris. Aliquam et dui purus. Mauris in imperdiet risus, sed
              blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim,
              sem vel volutpat rhoncus, neque mi ullamcorper ante, vitae
              volutpat ipsum quam id purus. Duis tincidunt sodales nisl eget
              ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui
              ultrices. Quisque ex eros, pellentesque vitae enim sed, pharetra
              tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis
              interdum scelerisque magna nec malesuada.
            </p>
            <p>
              Maecenas at erat id{' '}
              <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit
              amet erat eget augue molestie malesuada ut sed ex. In sed
              dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem
              erat interdum magna, eu commodo odio mauris semper dolor.
            </p>
            <p>
              Maecenas vulputate ante dictum <a href='#'>vestibulum volutpat</a>
              . Lorem ipsum dolor sit amet,{' '}
              <strong>consectetur adipiscing elit.</strong> Aenean non augue non
              purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis
              laoreet.
            </p>
          </AccordionBody>
        </Accordion>
      </CalloutText>
    </Callout>
  );
};
