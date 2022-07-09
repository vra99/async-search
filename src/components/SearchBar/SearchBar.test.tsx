import React from 'react';
import { SearchBar, IProps } from './SearchBar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const baseProps: IProps = {
    onChange: jest.fn(),
    value: '',
    setIsVisible: jest.fn()
}

const setup = (props: Partial<IProps> = {}) => {
    const setupProps = { ...baseProps, ...props };
    const { container } = render(<SearchBar {...setupProps} />);
    return { container };
}

describe('SearchBar', () => {
    it('should render correctly', () => {
        const { container } = setup();
        expect(container).toBeDefined();
    });

    it('should call onChange when input changes', async () => {
        setup();
        const input = await screen.findByTestId('search-bar');
        await userEvent.type(input, 'test');
        expect(baseProps.onChange).toHaveBeenCalled();
    });

    it('should call setIsVisible when input is focused', async () => {
        setup();
        const input = await screen.findByTestId('search-bar');
        input.focus();
        expect(baseProps.setIsVisible).toHaveBeenCalled();
    });

    it('should call setIsVisible when input is blurred', async () => {
        setup();
        const input = await screen.findByTestId('search-bar');
        input.blur();
        expect(baseProps.setIsVisible).toHaveBeenCalled();
    });
})