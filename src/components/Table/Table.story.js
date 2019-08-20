import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Table from './Table'

storiesOf('Table', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <Table bordered className='u-text-r-xs'>
        <caption className='u-hiddenVisually'>maiores eius et</caption>
        <thead>
          <tr className='u-border-bottom-xs'>
            <th>Tab. 1</th>
            <th>Tab. 2</th>
            <th>Tab. 3</th>
            <th>Tab. 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
        </tbody>
      </Table>
    ))
  )
  .add(
    'Compact',
    withInfo('Compact')(() => (
      <Table
        bordered
        compact
        className='u-text-r-xxs'
        aria-describedby='description'>
        <thead>
          <tr className='u-border-bottom-xs'>
            <th>Tab. 1</th>
            <th>Tab. 2</th>
            <th>Tab. 3</th>
            <th>Tab. 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
          <tr>
            <td>Tab. 1</td>
            <td>Tab. 2</td>
            <td>Tab. 3</td>
            <td>Tab. 4</td>
          </tr>
        </tbody>
      </Table>
    ))
  )
  .add(
    'Complex',
    withInfo('Complex')(() => (
      <Table striped hoverable bordered>
        <caption className='u-hiddenVisually'>maiores eius et</caption>
        <thead>
          <tr className='u-border-bottom-xs'>
            <th className='u-textLeft'>Tab. txt</th>
            <th className='u-textLeft'>Tab. txt</th>
            <th className='u-textRight'>Tab. num</th>
            <th className='u-textRight'>Tab. num</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textRight'>Tab. num</td>
            <td className='u-textRight'>Tab. num</td>
          </tr>
          <tr>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textRight'>Tab. num</td>
            <td className='u-textRight'>Tab. num</td>
          </tr>
          <tr>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textRight'>Tab. num</td>
            <td className='u-textRight'>Tab. num</td>
          </tr>
          <tr>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textLeft'>Tab. txt</td>
            <td className='u-textRight'>Tab. num</td>
            <td className='u-textRight'>Tab. num</td>
          </tr>
        </tbody>
      </Table>
    ))
  )
  .add(
    'Irregular',
    withInfo('Irregular')(() => (
      <Table bordered>
        <caption className='u-hiddenVisually'>maiores eius et</caption>
        <colgroup span='2' />
        <colgroup span='2' />
        <tbody>
          <tr>
            <td rowSpan='2' />
            <th
              className='u-textCenter u-border-right-xxs u-border-left-xxs u-background-grey-10'
              colSpan='2'
              scope='colgroup'>
                            Mars
            </th>
            <th
              className='u-textCenter u-background-grey-10'
              colSpan='2'
              scope='colgroup'>
                            Venus
            </th>
          </tr>
          <tr className='u-background-grey-10'>
            <th className='u-textCenter' scope='col'>
                            Produced
            </th>
            <th
              className='u-textCenter u-border-right-xxs'
              scope='col'>
                            Sold
            </th>
            <th className='u-textCenter' scope='col'>
                            Produced
            </th>
            <th className='u-textCenter' scope='col'>
                            Sold
            </th>
          </tr>
          <tr>
            <th scope='row' className='u-background-grey-10'>
                            Teddy Bears
            </th>
            <td className='u-textCenter u-border-left-xxs'>
                            50,000
            </td>
            <td className='u-textCenter u-border-right-xxs'>
                            30,000
            </td>
            <td className='u-textCenter'>100,000</td>
            <td className='u-textCenter'>80,000</td>
          </tr>
          <tr>
            <th scope='row' className='u-background-grey-10'>
                            Board Games
            </th>
            <td className='u-textCenter u-border-left-xxs'>
                            10,000
            </td>
            <td className='u-textCenter u-border-right-xxs'>
                            5,000
            </td>
            <td className='u-textCenter'>12,000</td>
            <td className='u-textCenter'>9,000</td>
          </tr>
        </tbody>
      </Table>
    ))
  )
  .add(
    'Responsive',
    withInfo('Responsive')(() => (
      <Table
        bordered
        responsive
        className='js-TableResponsive tablesaw tablesaw-stack'
        data-tablesaw-mode='stack'>
        <caption className='u-hiddenVisually'>maiores eius et</caption>
        <thead>
          <tr>
            <th scope='col'>Tab. 1</th>
            <th scope='col'>Tab. 2</th>
            <th scope='col'>Tab. 3</th>
            <th scope='col'>Tab. 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dolor itaque ad asperiores et.</td>

            <td>Odit perspiciatis dignissimos velit architecto.</td>

            <td>Quam id non.</td>

            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>
          </tr>

          <tr>
            <td>Odit perspiciatis dignissimos velit architecto.</td>

            <td>Quam id non.</td>

            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>

            <td>Quia ex deleniti.</td>
          </tr>

          <tr>
            <td>Quam id non.</td>

            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>

            <td>Quia ex deleniti.</td>

            <td>Amet adipisci cumque odio voluptas.</td>
          </tr>

          <tr>
            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>

            <td>Quia ex deleniti.</td>

            <td>Amet adipisci cumque odio voluptas.</td>

            <td>
                            Quisquam reiciendis molestias fugiat minus
                            laudantium soluta dolorum et vitae.
            </td>
          </tr>
        </tbody>
      </Table>
    ))
  )
  .add(
    'Swipe',
    withInfo('Swipe')(() => (
      <Table
        bordered
        responsive
        className='js-TableResponsive tablesaw tablesaw-swipe'
        data-tablesaw-mode='swipe'>
        <caption className='u-hiddenVisually'>maiores eius et</caption>
        <thead>
          <tr>
            <th scope='col' data-tablesaw-priority='persist'>
                            Tab. 1
            </th>
            <th scope='col'>Tab. 2</th>
            <th scope='col'>Tab. 3</th>
            <th scope='col'>Tab. 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='u-textWeight-600'>
                            Dolor itaque ad asperiores et.
            </td>

            <td>Odit perspiciatis dignissimos velit architecto.</td>

            <td>Quam id non.</td>

            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>
          </tr>

          <tr>
            <td className='u-textWeight-600'>
                            Odit perspiciatis dignissimos velit architecto.
            </td>

            <td>Quam id non.</td>

            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>

            <td>Quia ex deleniti.</td>
          </tr>

          <tr>
            <td className='u-textWeight-600'>Quam id non.</td>

            <td>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>

            <td>Quia ex deleniti.</td>

            <td>Amet adipisci cumque odio voluptas.</td>
          </tr>

          <tr>
            <td className='u-textWeight-600'>
                            Et commodi mollitia eius rerum dolorem et dolorum
                            dolorem.
            </td>

            <td>Quia ex deleniti.</td>

            <td>Amet adipisci cumque odio voluptas.</td>

            <td>
                            Quisquam reiciendis molestias fugiat minus
                            laudantium soluta dolorum et vitae.
            </td>
          </tr>
        </tbody>
      </Table>
    ))
  )
  .add(
    'Two headers',
    withInfo('Two headers')(() => (
      <Table bordered>
        <caption className='u-padding-r-bottom u-textLeft'>
                    Delivery slots:
        </caption>
        <thead>
          <tr>
            <td />
            <th scope='col'>Monday</th>
            <th scope='col'>Tuesday</th>
            <th scope='col'>Wednesday</th>
            <th scope='col'>Thursday</th>
            <th scope='col'>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>09:00 - 11:00</th>
            <td>Closed</td>
            <td>Open</td>
            <td>Open</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
          <tr>
            <th scope='row'>11:00 - 13:00</th>
            <td>Open</td>
            <td>Open</td>
            <td>Closed</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </Table>
    ))
  )
