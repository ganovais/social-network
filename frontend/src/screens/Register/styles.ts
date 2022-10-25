import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const DivLeft = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme: theme }) => theme.colors.grey_100};
  flex: 1;

  & > .logo {
    width: 300px;
    margin-top: 140px;
  }

  & > .undraw {
    width: 70%;
  }
`;

export const DivRight = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;

  & > .logo {
    width: 50%;
    margin-bottom: 85px;
  }
`;

export const Title = styled.p`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.texts.title};
  margin-bottom: 30px;
`;

export const Form = styled.form`
  width: 500px;
`;

export const FooterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.texts.title};
`;

export const RegisterLink = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.texts.title};
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.orange_700};
  }
`;
