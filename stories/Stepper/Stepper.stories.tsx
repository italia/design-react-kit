import {
  Button,
  Icon,
  StepperContainer,
  StepperContent,
  StepperHeader,
  StepperHeaderElement,
  StepperNav
} from '../../src';
import React from 'react';

export const TextOnly = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' appendIcon='it-check'>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>Secondo contenuto</StepperHeaderElement>
        <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

export const TextAndIcons = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' appendIcon='it-check' prependIcon='it-calendar'>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' prependIcon='it-lock'>
          Secondo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement prependIcon='it-settings'>Terzo contenuto</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

export const OrderOfTheSteps = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' stepperNumber={<Icon icon='it-check' />}>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' noLine stepperNumber={<span>2</span>}>
          Secondo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement stepperNumber={<span>3</span>}>Terzo contenuto</StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};
export const NavigationOfTheSteps = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' prependIcon='it-check'>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>Secondo contenuto</StepperHeaderElement>
        <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperContent>
        <p>Contenuto di esempio dello step corrente</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Indietro
        </Button>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Avanti
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
        <Button color='primary' size='sm' className='steppers-btn-confirm d-none d-lg-block'>
          Conferma
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};
export const VersionOnADarkBackground = () => {
  return (
    <StepperContainer dark>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' prependIcon='it-check'>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>Secondo contenuto</StepperHeaderElement>
        <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperContent dark>
        <p>Contenuto di esempio dello step corrente</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Indietro
        </Button>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Avanti
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
        <Button color='primary' size='sm' className='stepper-btn-confirm d-none d-lg-block'>
          Conferma
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

export const HeaderVariants = () => {
  return (
    <StepperContainer dark>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' prependIcon='it-check'>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>Secondo contenuto</StepperHeaderElement>
        <StepperHeaderElement>Terzo contnuto</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' appendIcon='it-check' prependIcon='it-calendar'>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' prependIcon='it-lock'>
          Secondo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement prependIcon='it-settings'>Terzo contenuto</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' stepperNumber={<Icon icon='it-check' />}>
          Primo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' noLine stepperNumber={<span>2</span>}>
          Secondo contenuto
        </StepperHeaderElement>
        <StepperHeaderElement stepperNumber={<span>3</span>}>Terzo contenuto</StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

export default {
  title: 'Componenti/Steppers'
};
