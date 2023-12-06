import { Story } from '@storybook/react';
import React from 'react';

import { Icon, Row, Col, icons } from '../../src';

export default {
  title: 'Componenti/Icon'
};

type EsempioInterattivoProps = {
  icon: string;
  title: string;
  size: '' | 'xl' | 'lg' | 'sm' | 'xs';
  padding: boolean;
  color: string;
  background: string;
};

export const EsempioInterattivo: Story<EsempioInterattivoProps> = ({
  icon,
  title,
  size,
  padding,
  background,
  color
}) => {
  return <Icon icon={icon} size={size} title={title} padding={padding} color={color} className={background} />;
};

EsempioInterattivo.storyName = 'Esempio interattivo';
EsempioInterattivo.args = {
  icon: 'it-tool',
  title: 'Alt Text',
  size: '',
  padding: false,
  color: '',
  background: ''
};
EsempioInterattivo.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: icons
    }
  },
  title: {
    control: {
      type: 'text'
    }
  },
  size: {
    control: {
      type: 'select',
      options: {
        'Extra small': 'xs',
        Small: 'sm',
        default: '',
        Large: 'lg',
        'Extra Large': 'xl'
      }
    }
  },
  background: {
    control: {
      type: 'select',
      options: {
        default: '',
        Scuro: 'bg-dark',
        Chiaro: 'bg-light'
      }
    }
  },
  color: {
    control: {
      type: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'white']
    }
  }
};

export const EsempioDimensioni: Story<EsempioInterattivoProps> = ({ icon, padding, background, color }) => {
  const dimensions = ['xs', 'sm', '', 'lg', 'xl'] as const;
  return (
    <>
      {dimensions.map((size) => (
        <Icon key={size} icon={icon} size={size} padding={padding} color={color} className={background} />
      ))}
    </>
  );
};

EsempioDimensioni.storyName = 'Esempio dimensioni';
EsempioDimensioni.args = {
  icon: 'it-check-circle',
  padding: false,
  color: '',
  background: 'bg-grey'
};

export const EsempioPadding: Story<EsempioInterattivoProps> = EsempioDimensioni.bind({});
EsempioPadding.storyName = 'Esempio dimensioni';
EsempioPadding.args = {
  icon: 'it-check-circle',
  padding: true,
  color: '',
  background: 'bg-grey'
};

export const EsempioColori: Story<{ icon: string }> = ({ icon }) => {
  return (
    <>
      {['primary', 'secondary', 'success', 'warning', 'danger'].map((color) => (
        <Icon key={color} icon={icon} color={color} className='bg-grey' />
      ))}
      {['light', 'white'].map((color) => (
        <Icon key={color} icon={icon} color={color} className='bg-dark' />
      ))}
    </>
  );
};
EsempioColori.storyName = 'Esempio colori';
EsempioColori.args = {
  icon: 'it-check-circle'
};

export const EsempioAllineamento: Story = () => {
  return (
    <div style={{ lineHeight: '4em' }}>
      <Icon className='bg-light align-bottom' icon='it-check-circle' />
      <Icon className='bg-light align-middle' icon='it-check-circle' />
      <Icon className='bg-light align-top' icon='it-check-circle' />
    </div>
  );
};
EsempioAllineamento.storyName = 'Esempio allineamento';

export const ListaIcone: Story = () => {
  return (
    <Row>
      {icons.map((icon) => (
        <Col md={{ size: 6 }} lg={{ size: 4 }} key={icon}>
          <Icon icon={icon} /> {icon}
        </Col>
      ))}
    </Row>
  );
};

ListaIcone.storyName = 'Lista icone';

export const EsempioLoghiEsterni = () => {
  return (
    <div style={{ lineHeight: '4em' }}>
      <Icon icon='https://upload.wikimedia.org/wikipedia/it/f/f5/Palermo-Stemma_uff.png' title='Stemma Palermo' />
      <Icon icon='https://dati.comune.roma.it/catalog/img/Roma-Stemma.png' size='lg' title='Stemma Roma' />
      <Icon
        icon='https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg'
        size='xl'
        title='Stemma Milano'
      />
    </div>
  );
};
