import React from 'react'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'
import { Button, Icon, StepperContainer } from '../../src'

const ConfirmButtonDark = () => {
  return (
    <StepperContainer mobile dark>
      <StepperContent dark>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color="primary" size="sm" className="steppers-btn-prev">
          <Icon icon="it-chevron-left" />
          Back
        </Button>
        <Button color="primary" size="sm" className="steppers-btn-confirm">
          Confirm
        </Button>
      </StepperNav>
    </StepperContainer>
  )
}

export default ConfirmButtonDark
