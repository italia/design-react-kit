import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Container, Row, Col, Notifications } from '../../src'
import notifJson from './notifications.json'

storiesOf('Componenti/Notifications', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi',
    withInfo({
      // text: Esempi
    })(() => {
      const { notificationId, NotificationManager } = Notifications
      const notifRef = React.createRef()
      const showNotification = (e, info) => {
        notifRef.current.show(e, info)
      }
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
                    <button
                      id={notificationId()}
                      onClick={e => showNotification(e, notifJson.default)}
                      type="button"
                      className="btn btn-primary">
                      Notification - 7s (default)
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e =>
                        showNotification(e, notifJson['icon-text-default'])
                      }
                      type="button"
                      className="btn btn-primary">
                      Notification icon/text - 7s (default)
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e => showNotification(e, notifJson.dismissable)}
                      type="button"
                      className="btn btn-primary">
                      Notification Dismissable
                    </button>
                  </p>
                </Col>
                <Col md={4}>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e => showNotification(e, notifJson['top-fix'])}
                      type="button"
                      className="btn btn-primary">
                      Notification Top Fix - 5s
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e =>
                        showNotification(e, notifJson['bottom-fix'])
                      }
                      type="button"
                      className="btn btn-primary">
                      Notification Bottom Fix - 8s
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e => showNotification(e, notifJson['left-fix'])}
                      type="button"
                      className="btn btn-primary">
                      Notification Left Fix - 6s
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e => showNotification(e, notifJson['right-fix'])}
                      type="button"
                      className="btn btn-primary">
                      Notification Right Fix - 12s
                    </button>
                  </p>
                </Col>
                <Col md={4}>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e =>
                        showNotification(e, notifJson['dismissable-top-fix'])
                      }
                      type="button"
                      className="btn btn-primary">
                      Notification Dismissable Top Fix
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e =>
                        showNotification(e, notifJson['dismissable-bottom-fix'])
                      }
                      type="button"
                      className="btn btn-primary">
                      Notification Dismissable Bottom Fix
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e =>
                        showNotification(e, notifJson['dismissable-left-fix'])
                      }
                      type="button"
                      className="btn btn-primary">
                      Notification Dismissable Left Fix
                    </button>
                  </p>
                  <p>
                    <button
                      id={notificationId()}
                      onClick={e =>
                        showNotification(e, notifJson['dismissable-right-fix'])
                      }
                      type="button"
                      className="btn btn-primary">
                      Notification Dismissable Right Fix
                    </button>
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
