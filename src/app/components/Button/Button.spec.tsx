import Button from './Button';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('calls onClick', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
