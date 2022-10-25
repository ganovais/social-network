import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.grey_100};
  padding: 35px;
  border-radius: 30px;
  margin-bottom: 30px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 20px;
  }

  .username {
    color: ${({ theme }) => theme.colors.orange_800};
    margin-bottom: 7px;
  }

  .post-date {
    color: ${({ theme }) => theme.colors.texts.title};
  }
`;

export const PostContent = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin: 40px 0; */
  color: ${({ theme }) => theme.colors.texts.title};
  display: flex;

  .pub-image {
    width: 400px;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.texts.title};

  svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;
