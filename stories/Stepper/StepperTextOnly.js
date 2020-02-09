import React from 'react'
import { StepperContainer, StepperHeader } from '../../src'
import StepperHeaderElement from '../../src/components/Stepper/StepperHeaderElement'

const StepperTextOnly = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant="confirmed" iconName="it-check">
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant="active">
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant="steppers-index">
          2/6
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  )
}

export default StepperTextOnly
