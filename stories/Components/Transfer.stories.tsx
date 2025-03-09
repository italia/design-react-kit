import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Row, Transfer } from '../../src';

const meta: Meta<typeof Transfer> = {
  title: 'Documentazione/Form/Transfer',
  component: Transfer
};

export default meta;

type Story = StoryObj<typeof Transfer>;

export const Base: Story = {
  render: () => (
    <Transfer>
      <Row>
        <Col>
          <Transfer.Source>
            <Transfer.Source.Header />
            <Transfer.Item id='checkbox1'>List item 1</Transfer.Item>
            <Transfer.Item id='checkbox2'>List item 2</Transfer.Item>
            <Transfer.Item id='checkbox3'>List item 3</Transfer.Item>
            <Transfer.Item id='checkbox4'>List item 4</Transfer.Item>
            <Transfer.Item id='checkbox5'>List item 5</Transfer.Item>
            <Transfer.Item id='checkbox6'>List item 6</Transfer.Item>
          </Transfer.Source>
        </Col>
        <Col>
          <Row>
            <Col>
              <Transfer.TransferButton />
            </Col>
          </Row>
          <Row>
            <Col>
              <Transfer.BacktransferButton />
            </Col>
          </Row>
          <Row>
            <Col>
              <Transfer.ResetButton />
            </Col>
          </Row>
        </Col>
        <Col>
          <Transfer.Target>
            <Transfer.Target.Header />
            <Transfer.Item id='checkbox7'>List item 7</Transfer.Item>
            <Transfer.Item id='checkbox8'>List item 8</Transfer.Item>
            <Transfer.Item id='checkbox9'>List item 9</Transfer.Item>
            <Transfer.Item id='checkbox10'>List item 10</Transfer.Item>
            <Transfer.Item id='checkbox11'>List item 11</Transfer.Item>
            <Transfer.Item id='checkbox12'>List item 12</Transfer.Item>
          </Transfer.Target>
        </Col>
      </Row>
    </Transfer>
  )
};
