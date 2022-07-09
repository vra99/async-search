import * as React from 'react';
import {Book, IBookProps } from './Book';
import { screen, render } from '@testing-library/react'

const baseProps: IBookProps = {
    book: {
        authorweb: 'Romeo and Juliet',
        titleAuth: 'Romeo and Juliet',
        titleshort: 'Romeo and Juliet',
        titleweb: 'Romeo and Juliet',
        workid: '12345',
    }
};

const setup = (props: Partial<IBookProps> = {}) => {
    const setupProps = { ...baseProps, ...props };
    const {container}= render(<Book {...setupProps} />);
    return {container};
}

describe('Book', () => {
    it('should render correctly', () => {
        setup();
        expect(screen.getByTestId("book-card")).toBeDefined();
    });

})

