import React from 'react'
import StepperMobileExamples from '../../src/components/Stepper/StepperMobileExamples'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'
import { Button, Icon } from '../../src'

const SaveButtonDark = () => {
  return (
    <StepperMobileExamples dark>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button
          outline
          color="primary"
          size="sm"
          stepperClass="steppers-btn-prev">
          <Icon icon="it-chevron-left" />
          Back
        </Button>
        <Button color="primary" size="sm" stepperClass="steppers-btn-save">
          Save
        </Button>
        <Button
          outline
          color="primary"
          size="sm"
          stepperClass="stepper-btn-next">
          Next
          <Icon icon="it-chevron-right" />
        </Button>
      </StepperNav>
    </StepperMobileExamples>
  )
}

export default SaveButtonDark
