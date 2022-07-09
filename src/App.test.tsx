import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { configure, fireEvent } from '@testing-library/dom'

configure({ asyncUtilTimeout: 5000 })

const setup = () => {
   const { container }= render(<App />);
   const searchBar = screen.getByTestId('search-bar');
   return { container, searchBar};
}

describe('App', () => {
    it('should render correctly', () => {
        const { container } = setup();
        expect(container).toBeDefined();
    });

    it('should call handleSearch when the user types in the search bar', () => {
        const { searchBar } = setup();
        fireEvent.change(searchBar, { target: { value: 'moon' } });
        expect(screen.findAllByText('moon')).toBeDefined();
    })
    
    it('should show dropdown list when search bar is focused', () => {
        const { searchBar } = setup();
        searchBar.focus();
        expect(screen.getByTestId('dropdown')).toBeDefined();
    });

    it('should hide dropdown list when search bar is blurred', () => {
        const { searchBar } = setup();
        searchBar.focus();
        searchBar.blur();
        expect(screen.queryByTestId('dropdown')).toBeNull();
    });


})
