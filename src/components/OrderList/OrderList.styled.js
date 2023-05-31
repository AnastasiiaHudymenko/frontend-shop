import styled from '@emotion/styled';

export const Wrap = styled.div`
  flex: 2;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  padding: 24px 8px;
  border-radius: 12px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  padding: 10px;
  border-radius: 6px;
  justify-content: space-between;
  background-color: white;
`;

export const Image = styled.img`
  border-radius: 9px;
  object-fit: cover;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Desc = styled.p`
  margin: 0;
  font-size: 20px;
  color: #4a92e7;
  font-weight: 700;
`;

export const WrapCount = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Btn = styled.button`
  border: 1px solid white;
  border-radius: 8px;
  padding: 5px 17px;
  font-size: 20px;
  color: white;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  text-align: center;
  cursor: pointer;
`;

export const BtnDelete = styled.button`
  margin-top: -90px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const TitlePrice = styled.p`
  font-size: 24px;
  color: #4a92e7;
  font-weight: 700;
`;
