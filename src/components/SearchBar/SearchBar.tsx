import React, { FC } from 'react';
import styled from 'styled-components';

export interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBar: FC<IProps> = React.memo(({ onChange, value, setIsVisible }) => {
  return (
    <Input
      type="text"
      data-testid="search-bar"
      onChange={onChange}
      value={value}
      placeholder="Quick search..."
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    />
  );
});

const Input = styled.input`
  position: absolute;
  width: 238px;
  height: 42px;
  right: 25px;
  top: 9px;
  background: #e3e3e3;
  border-radius: 2px;
  border: none;
  padding: 0px 15px;

  &:focus {
    outline: none;
  }
`;

SearchBar.displayName = 'SearchBar';
