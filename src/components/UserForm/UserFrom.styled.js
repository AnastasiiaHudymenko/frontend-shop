import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  align-items: center;
  gap: 20px;
  border: 1px solid;
  padding: 24px 8px;
  border-radius: 12px;
`;

export const Label = styled.label`
  width: 80%;
`;

export const Field = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid;
`;

export const NameInput = styled.p`
  margin: 0 0 5px 0;
`;
