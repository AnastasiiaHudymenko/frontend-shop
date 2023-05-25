import styled from '@emotion/styled';

export const List = styled.ul`
  flex: 1;
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px 0;

  align-items: center;
`;

export const Item = styled.li`
  border: 1px solid;
  padding: 16px;
  width: 200px;
  text-align: center;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
`;
