import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders', () => {
  render(<Button>Login</Button>);
  expect(screen.queryByText(/Login/i)).toBeTruthy();
});
