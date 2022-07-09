import React from 'react';
import { Loader } from './Loader';
import { render } from '@testing-library/react';

const setup = () => {
    const { container } = render(<Loader />);
    return { container };
}

describe('Loader', () => {
    it('should render correctly', () => {
        const { container } = setup();
        expect(container).toBeDefined();
    });
});