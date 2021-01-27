import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {shallow} from 'enzyme';

describe('<App />', () => {
  const mt = shallow(<App />);
  it('Test link', () => {
    const link = mt.find('a').text();
    console.log(link)
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
