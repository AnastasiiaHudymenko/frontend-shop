import styled from '@emotion/styled';

export const Form = styled.form`
  flex: 1.5;
  align-items: center;

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

export const Label = styled.label`
  width: 80%;
`;

export const Field = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 28px;
  border-radius: 6px;
  border: none;
`;

export const NameInput = styled.p`
  margin: 0 0 5px 0;
  color: #4a92e7;
`;

export const BtnSend = styled.button`
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
