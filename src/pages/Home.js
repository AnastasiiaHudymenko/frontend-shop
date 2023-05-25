import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from 'redux/operations';
import { Shops } from 'components/Shops/Shops';
import { Products } from 'components/Products/Products';
import styled from '@emotion/styled';

export const HomePage = () => {
  const [changeShop, setChangeShop] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const changeShopClick = id => {
    switch (id) {
      case 1:
        setChangeShop('meat');
        break;
      case 2:
        setChangeShop('vegan');
        break;
      case 3:
        setChangeShop('Yummy ball');
        break;
      default:
        setChangeShop(null);
    }
  };

  return (
    <Container>
      <Shops changeShopClick={changeShopClick} />
      <Products changeShop={changeShop} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
