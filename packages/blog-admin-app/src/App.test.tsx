import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders blog admin page', () => {
  expect.assertions(1);
  render(<App />);
  const pageHeading = screen.getByText(/Blog admin page/i);
  expect(pageHeading).toBeInTheDocument();
});
