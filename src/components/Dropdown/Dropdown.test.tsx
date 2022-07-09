import React from 'react'
import { Dropdown, IDropdownProps } from './Dropdown'
import { screen, render } from '@testing-library/react'

const baseProps: IDropdownProps = {
    isOpen: false
}

const setup = (props: Partial<IDropdownProps> = {}) => {
    const setupProps = { ...baseProps, ...props };
    const {container}= render(<Dropdown {...setupProps} />);
    return {container};
}

describe('Dropdown', () => {
    it('should render correctly', () => {
        setup({ isOpen: true });
        expect(screen.getByTestId("dropdown")).toBeDefined();
    });
    //should not render if isOpen is false
    it('should not render if isOpen is false', () => {
        setup({ isOpen: false });
        expect(screen.queryByTestId("dropdown")).toBeNull();
    });
})
