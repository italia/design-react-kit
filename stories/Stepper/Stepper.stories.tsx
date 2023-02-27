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
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
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
        <StepperHeaderElement
          variant='confirmed'
          appendIcon='it-check'
          prependIcon='it-calendar'
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' prependIcon='it-lock'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement prependIcon='it-settings'>
          Label Step 3
        </StepperHeaderElement>
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
        <StepperHeaderElement
          variant='confirmed'
          stepperNumber={<Icon icon='it-check' />}
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement
          variant='active'
          noLine
          stepperNumber={<span>2</span>}
        >
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement stepperNumber={<span>3</span>}>
          Label Step 3
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};
export const NavigationOfTheSteps = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' prependIcon='it-check'>
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Back
        </Button>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
        <Button
          color='primary'
          size='sm'
          className='stepper-btn-confirm d-none d-lg-block'
        >
          Confirmation
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
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperContent dark>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Back
        </Button>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
        <Button
          color='primary'
          size='sm'
          className='stepper-btn-confirm d-none d-lg-block'
        >
          Confirmation
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
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperHeader>
        <StepperHeaderElement
          variant='confirmed'
          appendIcon='it-check'
          prependIcon='it-calendar'
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' prependIcon='it-lock'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement prependIcon='it-settings'>
          Label Step 3
        </StepperHeaderElement>
        <StepperHeaderElement variant='mobile' tag={'span'}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
      <StepperHeader>
        <StepperHeaderElement
          variant='confirmed'
          stepperNumber={<Icon icon='it-check' />}
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement
          variant='active'
          noLine
          stepperNumber={<span>2</span>}
        >
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement stepperNumber={<span>3</span>}>
          Label Step 3
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

export default {
  title: 'Componenti/Steppers'
};
