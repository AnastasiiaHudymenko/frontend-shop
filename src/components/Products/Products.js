import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from 'redux/basketProductSlice';

import { List, Image, Wrap, Item, Btn, Title } from './Products.styled';

export const Products = ({ changeShop }) => {
  const dispatch = useDispatch();

  const { products } = useSelector(state => state.products);
  const markup = () => {
    const findProduct = products.filter(
      ({ shopName }) => shopName === changeShop
    );
    return findProduct.length !== 0 ? findProduct : products;
  };

  const handleClick = idCard => {
    const [findProduct] = products.filter(({ _id }) => _id === idCard);

    const updateProduct = { ...findProduct, count: 1 };
    dispatch(addProduct(updateProduct));
  };

  return (
    <List>
      {markup().map(({ _id, title, image }) => (
        <Item key={_id}>
          <Image
            width={250}
            height={250}
            src={`http://localhost:3002/${image}`}
            alt={title}
          />

          <Wrap>
            <Title>{title}</Title>
            <Btn onClick={() => handleClick(_id)} type="button">
              Add to Card
            </Btn>
          </Wrap>
        </Item>
      ))}
    </List>
  );
};
