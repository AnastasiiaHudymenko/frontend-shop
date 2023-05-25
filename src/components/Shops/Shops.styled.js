import styled from '@emotion/styled';

export const List = styled.ul`
  flex: 1;
  border-right: 1px solid #94bbe9;
  display: flex;

  flex-direction: column;
  gap: 50px;
  padding: 20px 10px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  align-items: center;
`;

export const Item = styled.li`
  border: 1px solid white;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  color: white;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  text-align: center;
  cursor: pointer;

  transition: all 0.5s ease;
  &:hover {
    color: #fc466b;

    box-shadow: 0px 10px 13px -7px #000000, 5px 6px 15px -9px rgba(3, 20, 36, 0);
  }
`;

export const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
`;
