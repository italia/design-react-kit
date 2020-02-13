import React from 'react'
import StepperMobileExamples from '../../src/components/Stepper/StepperMobileExamples'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'
import { Button, Icon } from '../../src'
import StepperDots from '../../src/components/Stepper/StepperDots'

const PalliniDark = () => {
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
          <Icon icon="it-chevron-left" color="primary" />
          Back
        </Button>
        <StepperDots>
          <li className="done"></li>
          <li className="done"></li>
          <li className="done"></li>
          <li></li>
          <li></li>
          <li></li>
        </StepperDots>
        <Button
          outline
          color="primary"
          size="sm"
          stepperClass="steppers-btn-next">
          Next
          <Icon icon="it-chevron-right" color="primary" />
        </Button>
      </StepperNav>
    </StepperMobileExamples>
  )
}

export default PalliniDark
