import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {shallow} from 'enzyme';

describe('<App />', () => {
  const mt = shallow(<App />);
  it('Test Snapshot', () => {
    expect(mt).toMatchSnapshot();
  });
});
