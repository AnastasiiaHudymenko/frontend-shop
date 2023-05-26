import styled from '@emotion/styled';
import emptyImg from '../../images/Illustration.png';

export const EmptyBasket = () => {
  return (
    <Wrap>
      <img src={emptyImg} alt="Empty basket" />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
