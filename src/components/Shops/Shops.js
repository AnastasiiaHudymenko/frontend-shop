import { List, Title, Item } from './Shops.styled';
import shopName from '../../shopsName.json';

export const Shops = ({ changeShopClick }) => {
  return (
    <List>
      {shopName.map(({ id, name }) => (
        <Item onClick={() => changeShopClick(id)} key={id}>
          <Title>{name}</Title>
        </Item>
      ))}
    </List>
  );
};
