import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = ({ children }) => {
  return <HeaderContainer data-testid="header">{children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #f2f2f2;
`;
Header.displayName = 'Header';
