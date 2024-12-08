import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('App', () => {
  test('renders Vite + React heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is/i });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');
  });
});
