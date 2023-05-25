import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { updateProduct } from 'redux/basketProductSlice';
import { Wrap, List, Item } from './OrderList.styled';

export const OrderList = () => {
  // const [orderCounts, setOrderCounts] = useState({});

  const { backet } = useSelector(state => state.backet);
  // const { orderBacket } = useSelector(state => state.backet);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const keys = Object.keys(orderCounts);
  //   const updateOrder = () => {
  //     const findOredr = backet.filter(({ _id }, i) => _id === keys[i]);
  //     if (findOredr.length !== 0) {
  //       const update = findOredr.map(el => {
  //         return { ...el, count: orderCounts[el._id] };
  //       });

  //       dispatch(addMoreProduct(update));
  //     }
  //   };
  //   updateOrder();
  // }, [orderCounts, backet, dispatch]);

  const getTotalPrice = backet => {
    return backet.reduce((acc, order) => {
      acc += Number(order.price);
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
    console.log(update);
    dispatch(updateProduct(update));
    // setOrderCounts(prevCounts => ({
    //   ...prevCounts,
    //   [itemId]: (prevCounts[itemId] || 1) + 1,
    // }));
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
    console.log(update);
    dispatch(updateProduct(update));
    // if (orderCounts[itemId] > 0) {
    //   setOrderCounts(prevCounts => ({
    //     ...prevCounts,
    //     [itemId]: prevCounts[itemId] - 1,
    //   }));
    // }
  };

  const deleteProduct = itemId => {
    // const findBacketProduct = backet.find(({ _id }) => _id === itemId);
    // const findOrderProduct = backet.find(({ _id }) => _id === itemId);
  };

  return (
    <Wrap>
      <List>
        {backet.map(({ _id, title, price, image, count }) => {
          // const countOrder = orderCounts[_id] || 1;

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
      <button type="submit">Submit</button>
    </Wrap>
  );
};
