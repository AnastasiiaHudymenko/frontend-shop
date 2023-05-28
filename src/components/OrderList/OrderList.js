import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { updateProduct } from 'redux/basketProductSlice';
import { getTotalPrice } from '../../helpers/getTotalPrice';
import {
  Wrap,
  List,
  Item,
  Image,
  WrapContent,
  Desc,
  WrapCount,
  Btn,
  BtnDelete,
  TitlePrice,
} from './OrderList.styled';

export const OrderList = () => {
  const { basket } = useSelector(state => state.basket);

  const dispatch = useDispatch();

  const handleIncrementOrder = itemId => {
    const update = basket.map(product => {
      if (product._id === itemId) {
        return {
          ...product,
          count: product.count + 1,
        };
      }
      return product;
    });

    dispatch(updateProduct(update));
  };

  const handleDecrementOrder = itemId => {
    const update = basket.map(product => {
      if (product._id === itemId) {
        return {
          ...product,
          count: product.count - 1,
        };
      }
      return product;
    });

    dispatch(updateProduct(update));
  };

  const deleteProduct = itemId => {
    const findProductToDelete = basket.filter(({ _id }) => _id !== itemId);
    dispatch(updateProduct(findProductToDelete));
  };

  return (
    <Wrap>
      <List>
        {basket.map(({ _id, title, price, image, count }) => {
          return (
            <Item key={_id}>
              <Image
                loading="lazy"
                width={180}
                height={120}
                src={`https://backend-shop-fabr.onrender.com/${image}`}
                alt={title}
              />
              <WrapContent>
                <Desc>{title}</Desc>
                <Desc>Price: {price}$</Desc>
                <WrapCount>
                  <Btn
                    disabled={count === 1}
                    onClick={() => handleDecrementOrder(_id)}
                    type="button"
                  >
                    -
                  </Btn>
                  <span>{count}</span>
                  <Btn onClick={() => handleIncrementOrder(_id)} type="button">
                    +
                  </Btn>
                </WrapCount>
              </WrapContent>
              <BtnDelete type="button" onClick={() => deleteProduct(_id)}>
                <AiOutlineCloseCircle size={24} color="#c04a4a" />
              </BtnDelete>
            </Item>
          );
        })}
      </List>

      <TitlePrice>Total price: {getTotalPrice(basket)}$</TitlePrice>
    </Wrap>
  );
};
