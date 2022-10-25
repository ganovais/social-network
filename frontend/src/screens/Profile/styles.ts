import styled from "styled-components";

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

   & .name {
      color: ${({ theme }) => theme.colors.texts.title};
   }

   & .username {
      margin-bottom: 50px;
      color: ${({ theme }) => theme.colors.orange_700};
   }

   .title-description {
      color: ${({ theme }) => theme.colors.orange_700};
   }

   .react-tabs__tab {
      padding-left: 0;
   }
   .react-tabs__tab--selected {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.orange_700};
      font-weight: bold;
   }

   .react-tabs__tab:focus:after {
      content: "";
      position: absolute;
      height: 1px;
      left: -4px;
      right: -4px;
      bottom: 0;
      background: ${({ theme }) => theme.colors.orange_700};;
   }
`;

export const HeaderProfile = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
