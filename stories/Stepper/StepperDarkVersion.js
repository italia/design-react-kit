import React from 'react'
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement,
  Button,
  Icon
} from '../../src'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'

const StepperDarkVersion = () => {
  return (
    <StepperContainer dark>
      <StepperHeader>
        <StepperHeaderElement variant="confirmed" icon="it-check">
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
      <StepperContent dark>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color="primary" size="sm" className="steppers-btn-prev">
          <Icon icon="it-chevron-left" color="primary" />
          Back
        </Button>
        <Button outline color="primary" size="sm" className="steppers-btn-next">
          Next
          <Icon icon="it-chevron-right" color="primary" />
        </Button>
        <Button
          color="primary"
          size="sm"
          className="stepper-btn-confirm d-none d-lg-block">
          Confirmation
        </Button>
      </StepperNav>
    </StepperContainer>
  )
}

export default StepperDarkVersion
