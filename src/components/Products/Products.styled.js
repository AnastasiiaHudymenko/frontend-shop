import styled from '@emotion/styled';

export const List = styled.ul`
  flex: 1 0 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  border: 1px solid black;
  padding: 10px;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: 1px solid;
  padding: 7px 8px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
