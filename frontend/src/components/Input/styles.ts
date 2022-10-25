import styled, { css } from 'styled-components';

interface ContentProps {
  isFilled: boolean;
  isFocused: boolean;
  error: boolean;
}

export const Container = styled.div`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  background: transparent;
  height: 60px;
  width: 100%;
  border: none;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.texts.label};
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.texts.label};
  margin-bottom: 8px;
`;

export const Content = styled.div<ContentProps>`
  background: ${({ theme }) => theme.colors.grey_50};
  border: 2px solid transparent;
  height: 60px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  & > svg {
    font-size: 24px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.orange_700};
      border-color: ${props.theme.colors.orange_700};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.orange_700};
    `}

    ${(props) =>
    props.error &&
    css`
      color: ${props.theme.colors.red};
      border-color: ${props.theme.colors.red};
    `}

        & > .eye {
    margin-left: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.grey_100};

    &:hover {
      color: ${({ theme }) => theme.colors.orange_700};
    }
  }
`;

export const Error = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.red};

  svg {
    margin-right: 10px;
  }
`;
