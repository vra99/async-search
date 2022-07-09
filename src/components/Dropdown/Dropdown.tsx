import React, { FC } from 'react';
import styled from 'styled-components';

export interface IDropdownProps {
  isOpen: boolean;
}

export const Dropdown: FC<IDropdownProps> = ({ isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <DropDownListContainer data-testid="dropdown">
          <DropDownList>{children}</DropDownList>
        </DropDownListContainer>
      )}
    </>
  );
};

const DropDownListContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 69px;
  width: 434px !important;
  height: 320px !important;
  background: #e3e3e3;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.2em;
  }
`;

Dropdown.displayName = 'Dropdown';
