export const getTotalPrice = basket => {
  return basket.reduce((acc, order) => {
    acc += Number(order.price) * order.count;
    return acc;
  }, 0);
};
