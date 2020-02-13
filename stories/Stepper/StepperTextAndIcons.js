import React from 'react'
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement
} from '../../src'

const StepperTextAndIcons = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement
          variant="confirmed"
          icon="it-check"
          iconName="it-calendar">
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant="active" iconName="it-lock">
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement iconName="it-settings">
          Label Step 3
        </StepperHeaderElement>
        <StepperHeaderElement variant="steppers-index">
          2/6
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  )
}

export default StepperTextAndIcons
