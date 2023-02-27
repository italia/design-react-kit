import {
  Button,
  Icon,
  Progress,
  StepperContainer,
  StepperContent,
  StepperDots,
  StepperNav
} from '../../src';
import React from 'react';

export default {
  title: 'Componenti/Steppers/Navigation variations for mobile'
};

export const ProgressBar = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Back
        </Button>
        <div className='steppers-progress'>
          <Progress
            indeterminate={false}
            value='33'
            tag='div'
            style={{ width: '33%' }}
          />
        </div>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
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
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Back
        </Button>
        <StepperDots>
          <li className='done'>
            <span className='visually-hidden'>Step 1 of 6 - Confirmed</span>
          </li>
          <li className='done'>
            <span className='visually-hidden'>Step 2 of 6 - Confirmed</span>
          </li>
          <li className='done'>
            <span className='visually-hidden'>Step 3 of 6 - Confirmed</span>
          </li>
          <li>
            <span className='visually-hidden'>Step 4 of 6</span>
          </li>
          <li>
            <span className='visually-hidden'>Step 5 of 6</span>
          </li>
          <li>
            <span className='visually-hidden'>Step 6 of 6</span>
          </li>
        </StepperDots>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
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
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' />
          Back
        </Button>
        <Button color='primary' size='sm' className='steppers-btn-save'>
          Save
        </Button>
        <Button outline color='primary' size='sm' className='stepper-btn-next'>
          Next
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
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' />
          Back
        </Button>
        <Button color='primary' size='sm' className='steppers-btn-confirm'>
          Confirm
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};
