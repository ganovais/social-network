import styled from "styled-components";

export const Container = styled.div`
   margin-bottom: 85px;
   display: flex;
   align-items: center;
   justify-content: space-between;

   & > .logo {
      width: 200px;
   }
`;

export const Input = styled.input`
   background: ${({ theme }) => theme.colors.grey_50};
   opacity: 0.8;
   border: 2px solid transparent;
   width: 500px;
   border-radius: 40px;
   padding: 15px 20px;
   color: ${({ theme }) => theme.colors.texts.label};
   font-size: 1rem;

   &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.orange_700};
   }

   &::-webkit-search-cancel-button {
      font-size: 20px;
      cursor: pointer;
      color: red;
   }
`;
