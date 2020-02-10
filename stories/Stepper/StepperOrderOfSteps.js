import React from 'react'
import { StepperContainer, StepperHeader, StepperHeaderElement, Icon } from '../../src'

const StepperOrderOfSteps = () => {
  return(
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement
          variant="confirmed"
          stepperNumber={<Icon icon="it-check"/>}
          icon="it-check"
        >
            Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement
          variant="active"
          noLine
          stepperNumber="2"
        >
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement
          stepperNumber="3"
        >
          Label Step 3
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  )
}

export default StepperOrderOfSteps