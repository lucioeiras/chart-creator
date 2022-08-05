import styled from 'styled-components';

export const Container = styled.form`
  > fieldset {
    display: flex;
    flex-direction: column;

    border: none;

    margin-bottom: 24px;

    > label {
      color: #718096;
      font-size: 14px;

      margin-bottom: 8px;
    }
  }
`;

export const TextArea = styled.textarea`
  resize: none;

  border: 1px solid #CBD5E0;
  border-radius: 8px;

  color: #4A5568;

  padding: 16px;

  &::placeholder {
    color: #CBD5E0;
  }
`;

export const Button = styled.button`
  cursor: pointer;

  width: 100%;

  border: none;
  border-radius: 8px;

  background: #0BC5EA;

  color: #fff;
  font-size: 16px;
  font-weight: 600;

  padding: 16px 32px;
  margin-top: 16px;

  transition: background-color 0.3s;

  box-shadow: 0px 8px 32px 0px rgba(11, 197, 234, 0.40);

  &:hover {
    background-color: #00A3C4;
  }
`;
