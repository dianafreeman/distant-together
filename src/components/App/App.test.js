/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from './../stores';


test('renders title', () => {
  const { getByText } = render(<Provider><App /></Provider>);
  const title = getByText(/mental health resources/i);
  expect(title).toBeInTheDocument();
});
