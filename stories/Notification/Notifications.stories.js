import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  Container,
  Row,
  Col,
  Button,
  NotificationHandler,
  NotificationManager
} from '../../src'
import notifJson from './notifications.json'

storiesOf('Componenti/Notifications', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi',
    withInfo({
      // text: Esempi
    })(() => {
      const notifRef = React.createRef()
      return (
        <>
          <main>
            <Container tag="section" id="briciole" className="px-4 my-4">
              <Row>
                <Col xl={12}>
                  <h1>Notifications</h1>
                  <p>
                    Utilizzare i tasti sottostanti per attivare le
                    Notifications.
                  </p>
                </Col>
                <Col md={4}>
                  <p>
                    <NotificationHandler
                      info={notifJson.default}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification - 7s (default)
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['icon-text-default']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification icon/text - 7s (default)
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson.dismissable}
                      manager={notifRef}>
                      <Button color="primary">Notification Dismissable</Button>
                    </NotificationHandler>
                  </p>
                </Col>
                <Col md={4}>
                  <p>
                    <NotificationHandler
                      info={notifJson['top-fix']}
                      manager={notifRef}>
                      <Button color="primary">Notification Top Fix - 5s</Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['bottom-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Bottom Fix - 8s
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['left-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Left Fix - 6s
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['right-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Right Fix - 12s
                      </Button>
                    </NotificationHandler>
                  </p>
                </Col>
                <Col md={4}>
                  <p>
                    <NotificationHandler
                      info={notifJson['dismissable-top-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Dismissable Top Fix
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['dismissable-bottom-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Dismissable Bottom Fix
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['dismissable-left-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Dismissable Left Fix
                      </Button>
                    </NotificationHandler>
                  </p>
                  <p>
                    <NotificationHandler
                      info={notifJson['dismissable-right-fix']}
                      manager={notifRef}>
                      <Button color="primary">
                        Notification Dismissable Right Fix
                      </Button>
                    </NotificationHandler>
                  </p>
                </Col>
              </Row>
            </Container>
          </main>
          <NotificationManager ref={notifRef} />
        </>
      )
    })
  )
