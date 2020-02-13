import React from 'react'
import StepperMobileExamples from '../../src/components/Stepper/StepperMobileExamples'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'
import { Button, Icon, Progress } from '../../src'

const ProgressBarNavMobile = props => {
  return (
    <StepperMobileExamples>
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
        <div className="steppers-progress">
          <Progress
            indeterminate={false}
            value="33"
            tag="div"
            style={{ width: '33%' }}
          />
        </div>
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

export default ProgressBarNavMobile
