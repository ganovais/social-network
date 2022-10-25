import styled from 'styled-components';

export const ImageAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Avatar = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 10px;

  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.orange_700};
  color: ${({ theme }) => theme.colors.grey_100};

  display: flex;
  align-items: center;
  justify-content: center;
`;
