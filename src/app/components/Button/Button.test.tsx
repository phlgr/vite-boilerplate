import { render } from '@testing-library/react';
import Button from './Button';

test('Button renders', () => {
  const { queryByText } = render(<Button>Login</Button>);
  expect(queryByText(/Login/i)).toBeTruthy();
});
