import React from 'react'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'
import { Button, Icon, StepperContainer } from '../../src'

const SaveButtonDark = () => {
  return (
    <StepperContainer mobile dark>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color="primary" size="sm" className="steppers-btn-prev">
          <Icon icon="it-chevron-left" />
          Back
        </Button>
        <Button color="primary" size="sm" className="steppers-btn-save">
          Save
        </Button>
        <Button outline color="primary" size="sm" className="stepper-btn-next">
          Next
          <Icon icon="it-chevron-right" />
        </Button>
      </StepperNav>
    </StepperContainer>
  )
}

export default SaveButtonDark
