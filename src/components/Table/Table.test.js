import React from 'react';
import { shallow } from 'enzyme';

import { Table } from './Table';
const table = shallow(<Table />);

describe('Table', () => {
  it('renders correctly', () => {
    expect(Table).toMatchSnapshot();
  });
});
