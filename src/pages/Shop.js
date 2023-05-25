import { UserForm } from 'components/UserForm/UserForm';
import { OrderList } from 'components/OrderList/OrderList';
import styled from '@emotion/styled';

export const ShopPage = () => {
  return (
    <Container>
      <UserForm />
      <OrderList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px 10px;
  gap: 30px;
`;

export default ShopPage;
