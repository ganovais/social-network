import styled from 'styled-components';

export const Container = styled.div`
  min-width: 200px;
`;

export const ItemList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    margin-right: 12px;
    color: ${({ theme }) => theme.colors.orange_900};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.texts.title};
  }
`;
