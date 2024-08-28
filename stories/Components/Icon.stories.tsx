import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Icon, Row, icons } from '../../src';

const meta: Meta<typeof Icon> = {
  title: 'Documentazione/Utilities/Icon',
  component: Icon
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const EsempioInterattivo: Story = {
  render: ({ icon, title, size, padding, className, color }) => (
    <Icon icon={icon} size={size} title={title} padding={padding} color={color} className={className} />
  ),
  args: {
    icon: 'it-tool',
    title: 'Alt Text',
    size: '',
    padding: false,
    color: '',
    className: ''
  },
  argTypes: {
    icon: {
      control: 'select',
      options: icons
    },
    title: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', '', 'lg', 'xl']
    },
    className: {
      control: 'select',
      options: ['', 'bg-dark', 'bg-light']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'white']
    }
  }
};

export const EsempioDimensioni: Story = {
  render: ({ icon, padding, className, color }) => {
    const dimensions = ['xs', 'sm', '', 'lg', 'xl'] as const;
    return (
      <>
        {dimensions.map((size) => (
          <Icon key={size} icon={icon} size={size} padding={padding} color={color} className={className} />
        ))}
      </>
    );
  },
  args: {
    icon: 'it-check-circle',
    padding: false,
    color: '',
    className: 'bg-grey'
  }
};

export const EsempioPadding: Story = {
  args: {
    ...EsempioDimensioni.args,
    icon: 'it-check-circle',
    padding: true,
    color: '',
    className: 'bg-grey'
  }
};

export const EsempioColori: Story = {
  render: ({ icon }) => {
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
  },
  args: {
    icon: 'it-check-circle'
  }
};

export const EsempioAllineamento: Story = {
  render: () => {
    return (
      <div style={{ lineHeight: '4em' }}>
        <Icon className='bg-light align-bottom' icon='it-check-circle' />
        <Icon className='bg-light align-middle' icon='it-check-circle' />
        <Icon className='bg-light align-top' icon='it-check-circle' />
      </div>
    );
  }
};

export const ListaIcone: Story = {
  render: () => {
    return (
      <Row>
        {icons.map((icon) => (
          <Col md={{ size: 6 }} lg={{ size: 4 }} key={icon}>
            <Icon icon={icon} />
            &nbsp;{icon}
          </Col>
        ))}
      </Row>
    );
  }
};

export const EsempioLoghiEsterni = {
  render: () => {
    return (
      <div style={{ lineHeight: '4em' }}>
        <Icon icon='https://upload.wikimedia.org/wikipedia/commons/1/12/Palermo-Stemma_%281999%29.svg' title='Stemma Palermo' />
        <Icon icon='https://upload.wikimedia.org/wikipedia/commons/3/31/Roma-Stemma-2.svg' size='lg' title='Stemma Roma' />
        <Icon
          icon='https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg'
          size='xl'
          title='Stemma Milano'
        />
      </div>
    );
  }
};
