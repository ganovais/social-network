import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 200px;
  height: 50px;
  background: ${({ theme }) => theme.colors.orange_900};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.texts.title};
  font-size: 18px;
  border-radius: 4px;
  border: none;

  & > svg {
    margin-left: 10px;
  }

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.orange_900)};
  }
`;
