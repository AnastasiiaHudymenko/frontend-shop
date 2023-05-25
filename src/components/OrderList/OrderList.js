import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { updateProduct } from 'redux/basketProductSlice';
import { Wrap, List, Item } from './OrderList.styled';

export const OrderList = () => {
  const { backet } = useSelector(state => state.backet);

  const dispatch = useDispatch();

  const getTotalPrice = backet => {
    return backet.reduce((acc, order) => {
      acc += Number(order.price) * order.count;
      return acc;
    }, 0);
  };

  const handleIncrementOrder = itemId => {
    const update = backet.map(product => {
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
    const update = backet.map(product => {
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
    const findProductToDelete = backet.filter(({ _id }) => _id !== itemId);
    dispatch(updateProduct(findProductToDelete));
  };

  return (
    <Wrap>
      <List>
        {backet.map(({ _id, title, price, image, count }) => {
          return (
            <Item key={_id}>
              <img
                width={180}
                height={120}
                src={`http://localhost:3002/${image}`}
                alt={title}
              />
              <div>
                <p>{title}</p>
                <p>Price: {price}$</p>
                <button
                  disabled={count === 1}
                  onClick={() => handleDecrementOrder(_id)}
                  type="button"
                >
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => handleIncrementOrder(_id)} type="button">
                  +
                </button>
              </div>
              <button type="button" onClick={() => deleteProduct(_id)}>
                <AiOutlineCloseCircle />
              </button>
            </Item>
          );
        })}
      </List>

      <p>Total price: {getTotalPrice(backet)}</p>
    </Wrap>
  );
};
