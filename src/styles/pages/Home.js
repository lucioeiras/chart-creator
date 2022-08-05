import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .right {
    margin-left: ${({ isMaximized }) => isMaximized ? '0px' : '160px'};
  }

  > form {
    ${({ isMaximized }) => isMaximized && `display: none`}
  }
`;

export const ChangeVisualization = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  border: none;
  background: none;

  color: #0BC5EA;
  font-size: 16px;

  margin-top: 32px;

  transition: color 0.3s;

  &:hover {
    color: #00A3C4;
  }

  > svg {
    margin-right: 8px;
  }
`;
