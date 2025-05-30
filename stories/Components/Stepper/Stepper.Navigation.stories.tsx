import type { Meta } from '@storybook/react';
import React from 'react';
import { Button, Icon, Progress, StepperContainer, StepperContent, StepperDots, StepperNav } from '../../../src';

const meta: Meta<typeof StepperContainer> = {
  title: 'Documentazione/Componenti/Stepper/Mobile',
  component: StepperContainer
};

export default meta;

//type Story = StoryObj<typeof StepperContainer>;

export const ProgressBar = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Contenuto di esempio dello step corrente</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Indietro
        </Button>
        <div className='steppers-progress'>
          <Progress indeterminate={false} value='33' tag='div' style={{ width: '33%' }} />
        </div>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Avanti
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

export const Pallini = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Contenuto di esempio dello step corrente</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Indietro
        </Button>
        <StepperDots>
          <li className='done'>
            <span className='visually-hidden'>Step 1 di 6 - Confermato</span>
          </li>
          <li className='done'>
            <span className='visually-hidden'>Step 2 di 6 - Confermato</span>
          </li>
          <li className='done'>
            <span className='visually-hidden'>Step 3 di 6 - Confermato</span>
          </li>
          <li>
            <span className='visually-hidden'>Step 4 di 6</span>
          </li>
          <li>
            <span className='visually-hidden'>Step 5 di 6</span>
          </li>
          <li>
            <span className='visually-hidden'>Step 6 di 6</span>
          </li>
        </StepperDots>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Avanti
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

export const SaveButton = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Contenuto di esempio dello step corrente</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' />
          Indietro
        </Button>
        <Button color='primary' size='sm' className='steppers-btn-save'>
          Salva
        </Button>
        <Button outline color='primary' size='sm' className='stepper-btn-next'>
          Avanti
          <Icon icon='it-chevron-right' />
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

export const ConfirmButton = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Contenuto di esempio dello step corrente</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' />
          Indietro
        </Button>
        <Button color='primary' size='sm' className='steppers-btn-confirm'>
          Conferma
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};
