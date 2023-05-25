import { Outlet } from 'react-router-dom';
import { Header, List, Item, NavLinkStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <Item>
              <NavLinkStyled to="/">Shop</NavLinkStyled>
            </Item>
            <Item>
              <NavLinkStyled to="/shop">Shop Card</NavLinkStyled>
            </Item>
          </List>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
