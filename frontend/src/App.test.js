import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  // Test for rendering the header
  test('should render the User List header', () => {
    render(<App />);
    const headerElement = screen.getByText(/User List/i);
    expect(headerElement).toBeInTheDocument();
  });

  // Test for header correct HTML element
  test('should render User List in an h1 tag', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { level: 4, name: /User List/i });
    expect(headerElement).toBeInTheDocument();
  });

  // Test for accessibility
  test('should meet basic accessibility standards', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeVisible();
    expect(heading).toHaveAccessibleName();
  });



});