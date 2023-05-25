import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid #3c891582;
  padding: 20px;
  background-color: #3c891582;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
`;

export const Item = styled.li`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
