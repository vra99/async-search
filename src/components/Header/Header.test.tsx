import React from 'react';
import { Header } from './header';
import { render } from '@testing-library/react';

const setup = () => {
  const { container } = render(<Header />);
  return { container };
};

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});
