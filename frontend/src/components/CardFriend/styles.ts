import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.grey_100};
  border-radius: 4px;
  padding: 10px;
  align-items: center;

  .info {
    flex: 1;
  }

  svg {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
  }

  .name {
    color: ${({ theme }) => theme.colors.texts.title};
  }

  .username {
    color: ${({ theme }) => theme.colors.orange_700};
    font-weight: bold;
    font-size: 0.85rem;
  }
`;
