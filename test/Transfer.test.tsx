import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { preloadIcons, Transfer } from '../src';

beforeAll(() => preloadIcons(['it-arrow-left', 'it-arrow-right', 'it-restore']));

test('should have a testId for resilient UI changes', () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
      </Transfer.Source>
      <Transfer.Target>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Target>
    </Transfer>
  );

  expect(screen.getByTestId('test-id-transfer')).toBeTruthy();
  expect(screen.getByTestId('transfer-source')).toBeTruthy();
  expect(screen.getByTestId('transfer-target')).toBeTruthy();
});

test('should transfer item from source', async () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
      </Transfer.Source>
      <Transfer.TransferButton />
      <Transfer.Target>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Target>
    </Transfer>
  );

  await waitFor(() => {
    const sourceItem = screen.getByLabelText('Item 1');
    sourceItem.click();
  });
  await waitFor(() => {
    const transferButton = screen.getByTestId('transfer-button');
    transferButton.click();
  });

  const targetArea = screen.getByTestId('transfer-target');
  const sourceArea = screen.getByTestId('transfer-source');

  expect(targetArea).toHaveTextContent('Item 1');
  expect(sourceArea).not.toHaveTextContent('Item 1');
});

test('should transfer item from target', async () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
      </Transfer.Source>
      <Transfer.BacktransferButton />
      <Transfer.Target>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Target>
    </Transfer>
  );

  await waitFor(() => {
    const targetItem = screen.getByLabelText('Item 2');
    targetItem.click();
  });
  await waitFor(() => {
    const backtransferButton = screen.getByTestId('backtransfer-button');
    backtransferButton.click();
  });

  const targetArea = screen.getByTestId('transfer-target');
  const sourceArea = screen.getByTestId('transfer-source');

  expect(sourceArea).toHaveTextContent('Item 2');
  expect(targetArea).not.toHaveTextContent('Item 2');
});

test('should reset items after moving them around', async () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
      </Transfer.Source>
      <Transfer.TransferButton />
      <Transfer.BacktransferButton />
      <Transfer.ResetButton />
      <Transfer.Target>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Target>
    </Transfer>
  );

  await waitFor(() => {
    const targetItem = screen.getByLabelText('Item 2');
    targetItem.click();
  });
  await waitFor(() => {
    const backtransferButton = screen.getByTestId('backtransfer-button');
    backtransferButton.click();
  });

  await waitFor(() => {
    const sourceItem = screen.getByLabelText('Item 1');
    sourceItem.click();
  });
  await waitFor(() => {
    const transferButton = screen.getByTestId('transfer-button');
    transferButton.click();
  });

  await waitFor(() => {
    const resetButton = screen.getByTestId('reset-button');
    resetButton.click();
  });

  const targetArea = screen.getByTestId('transfer-target');
  const sourceArea = screen.getByTestId('transfer-source');

  expect(sourceArea).toHaveTextContent('Item 1');
  expect(targetArea).toHaveTextContent('Item 2');
});

test('should have the header checkbox unchecked if no item is checked', async () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Source.Header>Source</Transfer.Source.Header>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Source>
    </Transfer>
  );

  const header = screen.getByTestId('transfer-source-header');
  const headerCheckbox = header.querySelector('input[type="checkbox"]');
  expect(headerCheckbox).not.toBeChecked();
});

test('should have the header checkbox checked if all items are checked', async () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Source.Header>Source</Transfer.Source.Header>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Source>
    </Transfer>
  );

  await waitFor(() => {
    const item1 = screen.getByLabelText('Item 1');
    item1.click();
  });
  await waitFor(() => {
    const item2 = screen.getByLabelText('Item 2');
    item2.click();
  });

  const header = screen.getByTestId('transfer-source-header');
  const headerCheckbox = header.querySelector('input[type="checkbox"]');
  expect(headerCheckbox).toBeChecked();
});

test('should have the header checkbox semi-checked if some items are checked', async () => {
  render(
    <Transfer>
      <Transfer.Source>
        <Transfer.Source.Header>Source</Transfer.Source.Header>
        <Transfer.Item id='item-1'>Item 1</Transfer.Item>
        <Transfer.Item id='item-2'>Item 2</Transfer.Item>
      </Transfer.Source>
    </Transfer>
  );

  await waitFor(() => {
    const item1 = screen.getByLabelText('Item 1');
    item1.click();
  });
  const header = screen.getByTestId('transfer-source-header');
  const headerCheckbox = header.querySelector('input[type="checkbox"]');
  expect(headerCheckbox).not.toBeChecked();
  expect(headerCheckbox).toHaveClass('semi-checked');
});
