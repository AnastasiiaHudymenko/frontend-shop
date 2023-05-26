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
  border: 2px solid transparent;
  border-radius: 6px;
  padding: 10px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  color: white;
  transition: all 0.5s ease;
  &:hover {
    color: #fc466b;

    box-shadow: 0px 10px 13px -7px #000000, 5px 6px 15px -9px rgba(3, 20, 36, 0);
  }
`;

export const Image = styled.img`
  object-fit: contain;
  border-radius: 5px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Btn = styled.button`
  padding: 7px 8px;

  font-size: 14px;

  border: 1px solid white;
  border-radius: 8px;

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

export const ErrorContent = styled.div`
  flex: 1 0 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  justify-content: center;
  margin-top: 100px;
  height: 100vh;
`;

export const ErrorTitle = styled.p`
  margin: 0;
  font-size: 32px;
  color: #9f3c3c;
`;
