import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey_100};
  border-radius: 30px;
  padding: 25px;
  gap: 23px;

  input {
    flex: 1;
    height: 50px;
    border: none;
    border-radius: 4px;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.grey_50};
    color: ${({ theme }) => theme.colors.texts.title};

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.orange_800};
    }
  }

  & > .button {
    color: ${({ theme }) => theme.colors.texts.title};
    width: 48px;
    height: 48px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
  }

  #file-input {
    display: none;
  }

  .add-image {
    background: ${({ theme }) => theme.colors.orange_800};
  }

  .create-post {
    background: ${({ theme }) => theme.colors.orange_900};
  }
`;
