import React from 'react';
import * as ReactDOM from 'react-dom';
import { _Esempi as Alerts } from '../stories/Alert/Alert.stories';

describe('Alert', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Alerts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
