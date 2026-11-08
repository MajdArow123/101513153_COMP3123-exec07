import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome heading', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Fullstack Development - I')).toBeInTheDocument();
});

test('renders the student ID', () => {
  render(<App />);
  expect(screen.getByText('101513153')).toBeInTheDocument();
});
