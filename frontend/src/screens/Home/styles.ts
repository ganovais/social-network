import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px;
`;

export const Content = styled.div`
  display: flex;
`;

export const BodyPosts = styled.div`
  flex: 1;

  h1 {
    color: ${({ theme }) => theme.colors.texts.title};
  }

  .refresh {
    margin-top: 100px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    & > svg {
      margin-left: 30px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.orange_800};
      margin-top: 4px;
    }
  }
`;
