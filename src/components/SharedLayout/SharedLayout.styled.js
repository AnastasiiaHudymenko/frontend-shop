import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #94bbe9;
  padding: 20px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  box-shadow: 5px 6px 15px -9px rgba(3, 20, 36, 0.72);
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
  color: white;
  &.active {
    color: #fc466b;
  }
`;
