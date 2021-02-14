import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactFileBase64 from '../src';

const onChange = jest.fn();

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactFileBase64 onChange={onChange}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
