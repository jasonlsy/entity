import 'jest-styled-components';
import renderer from 'react-test-renderer';
import React from 'react';
import { List } from 'immutable';

import UIErrorWell from '../ErrorWell';

it('renders correctly', () => {
  const tree = renderer.create(
    <UIErrorWell errors={List()} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
