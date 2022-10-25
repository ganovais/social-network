import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px;
`;

export const Content = styled.div`
  display: flex;
`;

export const BodyContent = styled.div`
  flex: 1;

  h1 {
    color: ${({ theme }) => theme.colors.texts.title};
    margin-bottom: 15px;
  }
`;

export const ListFriends = styled.div`
    display: grid;
    grid-template-columns:  repeat(auto-fill, minmax(250px, auto));
    grid-gap: 1rem;
`
