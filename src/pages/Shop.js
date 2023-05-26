import { useSelector } from 'react-redux';
import { UserForm } from 'components/UserForm/UserForm';
import { OrderList } from 'components/OrderList/OrderList';
import { EmptyBasket } from 'components/EmptyBasket/EmptyBasket';
import { ToastContainer } from 'react-toastify';

import styled from '@emotion/styled';

export const ShopPage = () => {
  const { basket } = useSelector(state => state.basket);

  return (
    <Container>
      <UserForm />

      {basket.length === 0 ? <EmptyBasket /> : <OrderList />}
      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px 10px;
  gap: 60px;
  position: relative;
  padding-top: 82px;
  justify-content: center;
  align-items: flex-start;
`;

export default ShopPage;
