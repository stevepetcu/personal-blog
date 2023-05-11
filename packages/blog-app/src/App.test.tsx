import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders blog page', () => {
  expect.assertions(1);
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const pageHeading = screen.getByText(/Blog frontend/i);
  expect(pageHeading).toBeInTheDocument();
});
