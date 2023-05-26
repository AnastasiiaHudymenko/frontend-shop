import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'react-loader-spinner';

import { addProduct } from 'redux/basketProductSlice';

import {
  List,
  Image,
  Wrap,
  Item,
  Btn,
  Title,
  ErrorContent,
  ErrorTitle,
} from './Products.styled';

export const Products = ({ changeShop }) => {
  const dispatch = useDispatch();

  const { products, isLoading, error } = useSelector(state => state.products);

  const { basket } = useSelector(state => state.basket);

  const markup = () => {
    const findProduct = products.filter(
      ({ shopName }) => shopName === changeShop
    );
    return findProduct.length !== 0 ? findProduct : products;
  };

  const isDisabled = id => {
    return basket.some(({ _id }) => _id === id);
  };

  const handleClick = idCard => {
    const [findProduct] = products.filter(({ _id }) => _id === idCard);

    const updateProduct = { ...findProduct, count: 1 };
    dispatch(addProduct(updateProduct));
  };

  return (
    <>
      {isLoading && (
        <Grid
          height="80"
          width="80"
          color="#94bbe9"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{ alignItems: 'center', marginLeft: '40%' }}
          visible={true}
        />
      )}
      {!isLoading && error ? (
        <ErrorContent>
          <ErrorTitle>404 {error}</ErrorTitle>
        </ErrorContent>
      ) : (
        <List>
          {markup().map(({ _id, title, image }) => (
            <Item key={_id}>
              <Image
                loading="lazy"
                width={250}
                height={250}
                src={`http://localhost:3002/${image}`}
                alt={title}
              />

              <Wrap>
                <Title>{title}</Title>
                <Btn
                  style={{
                    boxShadow: isDisabled(_id) && 'none',
                    color: isDisabled(_id) && 'grey',
                  }}
                  disabled={isDisabled(_id)}
                  onClick={() => handleClick(_id)}
                  type="button"
                >
                  {isDisabled(_id) ? 'In the Basket' : 'Add to Card'}
                </Btn>
              </Wrap>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
