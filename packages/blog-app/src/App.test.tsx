import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders blog page', () => {
  expect.assertions(1);
  render(<App />);
  const pageHeading = screen.getByText(/Blog frontend/i);
  expect(pageHeading).toBeInTheDocument();
});
