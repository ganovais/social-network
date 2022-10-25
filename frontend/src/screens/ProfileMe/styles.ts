import { Link } from "react-router-dom";
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

export const Form = styled.form`
   width: 100%;

   .inputs {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 30px 0;
      flex-direction: column;
   }

   .df {
      display: flex;
   }

   .row {
      width: 100%;
   }

   .mr-30 {
      margin-right: 30px;
   }

   .textarea {
      label {
         font-size: 14px;
         color: ${({ theme }) => theme.colors.texts.label};
         margin-bottom: 8px;
      }

      textarea {
         background: ${({ theme }) => theme.colors.grey_100};
         min-height: 100px;
         width: 100%;
         resize: vertical;
         border: none;
         border-radius: 4px;
         color: ${({ theme }) => theme.colors.texts.label};
         font-size: 16px;
         margin-bottom: 30px;
         padding: 10px;

         &:focus {
            outline: none;
         }
      }
   }
`

export const FooterForm = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: ${({ theme }) => theme.colors.texts.title};
`

export const RegisterLink = styled(Link)`
   font-size: 16px;
   cursor: pointer;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.texts.title};

   display: flex;
   align-items: center;

   & > svg {
      margin-right: 20px;
   }

   &:hover {
      color: ${({ theme }) => theme.colors.orange_700};
   }
`