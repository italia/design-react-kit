import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionItem, AccordionBody, Button, Card, CardBody } from '../../src';

export default {
  title: 'Componenti/Accordion'
};

export const GruppiDiElementiRichiudibili = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '1'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}
        >
          Elemento Richiudibile #1
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '1'}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
          officia aute, non cupidatat skateboard dolor brunch.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '2'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}
        >
          Elemento Richiudibile #2
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '2'}>
          Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
          nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '3'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}
        >
          Elemento Richiudibile #3
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '3'}>
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

GruppiDiElementiRichiudibili.storyName = 'Gruppi di elementi richiudibili';

export const _Accordion = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '1'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}
        >
          Accordion Group Item #1
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '1'} listClassName={'custom-class'}>
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '2'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}
        >
          Accordion Group Item #2
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '2'} listClassName={'custom-class'}>
          Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
          nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '3'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}
        >
          Accordion Group Item #3
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '3'} listClassName={'custom-class'}>
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

export const AccordionAnnidati = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  const [nestedCollapseOpen, setNestedCollapseOpen] = useState('');
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '1'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}
        >
          Elemento Accordion #1
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '1'}>
          <Accordion>
            <AccordionItem>
              <AccordionHeader
                active={nestedCollapseOpen === '1'}
                onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== '1' ? '1' : '')}
              >
                Elemento Accordion annidato #1
              </AccordionHeader>
              <AccordionBody active={nestedCollapseOpen === '1'}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader
                active={nestedCollapseOpen === '2'}
                onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== '2' ? '2' : '')}
              >
                Elemento Accordion annidato #2
              </AccordionHeader>
              <AccordionBody active={nestedCollapseOpen === '2'}>
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader
                active={nestedCollapseOpen === '3'}
                onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== '3' ? '3' : '')}
              >
                Elemento Accordion annidato #3
              </AccordionHeader>
              <AccordionBody active={nestedCollapseOpen === '3'}>
                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </AccordionBody>
      </AccordionItem>
      <AccordionHeader
        active={collapseElementOpen === '2'}
        onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}
      >
        Elemento Accordion #2
      </AccordionHeader>
      <AccordionBody active={collapseElementOpen === '2'}>
        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
        nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
      </AccordionBody>

      <AccordionHeader
        active={collapseElementOpen === '3'}
        onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}
      >
        Elemento Accordion #3
      </AccordionHeader>
      <AccordionBody active={collapseElementOpen === '3'}>
        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
        anderson cred nesciunt sapiente ea proident.
      </AccordionBody>
    </Accordion>
  );
};

AccordionAnnidati.storyName = 'Accordion annidati';

export const HeaderAttivi = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  return (
    <Accordion background='active'>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '1'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}
        >
          Elemento Accordion #1
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '1'}>
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '2'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}
        >
          Elemento Accordion #2
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '2'}>
          Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
          nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '3'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}
        >
          Elemento Accordion #3
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '3'}>
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

HeaderAttivi.storyName = 'Header Attivi - sfondo primario';

export const HeaderHover = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  return (
    <Accordion background='hover'>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '1'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}
        >
          Elemento Accordion #1
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '1'}>
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '2'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}
        >
          Elemento Accordion #2
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '2'}>
          Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
          nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '3'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}
        >
          Elemento Accordion #3
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '3'}>
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

HeaderHover.storyName = 'Header colorati on Hover - sfondo primario';

export const IconaSinistra = () => {
  const [collapseElementOpen, setCollapseElement] = useState('');
  return (
    <Accordion iconLeft>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '1'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}
        >
          Elemento Accordion #1
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '1'}>
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '2'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}
        >
          Elemento Accordion #2
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '2'}>
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader
          active={collapseElementOpen === '3'}
          onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}
        >
          Elemento Accordion #3
        </AccordionHeader>
        <AccordionBody active={collapseElementOpen === '3'}>
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

IconaSinistra.storyName = 'Icona a sinistra';
