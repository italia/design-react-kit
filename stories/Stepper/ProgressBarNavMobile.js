import React from 'react'
import StepperContent from '../../src/components/Stepper/StepperContent'
import StepperNav from '../../src/components/Stepper/StepperNav'
import { Button, Icon, Progress, StepperContainer } from '../../src'

const ProgressBarNavMobile = props => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color="primary" size="sm" className="steppers-btn-prev">
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
        <Button outline color="primary" size="sm" className="steppers-btn-next">
          Next
          <Icon icon="it-chevron-right" color="primary" />
        </Button>
      </StepperNav>
    </StepperContainer>
  )
}

export default ProgressBarNavMobile
