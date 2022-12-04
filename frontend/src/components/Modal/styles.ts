import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
   background: ${({ theme }) => transparentize(0.4, theme.colors.background)};
   z-index: 999999;

   position: fixed;
   top: 102px;
   left: 0;
   display: flex;
   justify-content: center;
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   overflow-y: auto;
   outline: 0;
   transition: top 0.5s;

   @media (max-width: 920px) {
      display: none;
   }
`;

export const SearchResult = styled.div`
   position: relative;
   background: #33373e;
   width: 456px;
   overflow: auto;
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   max-height: 300px;
   margin-left: 240px;
   z-index: 9999999;
`;

export const Users = styled.div`
   padding: 20px;
   overflow: auto;
   width: 100%;
`;

export const User = styled.div`
   background: ${({ theme }) => darken(0.2, theme.colors.grey_50)};
   border-radius: 4px;
   display: flex;
   align-items: center;
   padding: 10px 20px;
   margin-bottom: 10px;

   & > svg {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.orange_800};
      cursor: pointer;

      &:hover {
         color: ${({ theme }) => theme.colors.orange_900};
      }
   }
`;
export const UserInformation = styled.div`
   flex: 1;
   margin-left: 10px;

   p:first-child {
      color: ${({ theme }) => theme.colors.orange_800};
      font-weight: bold;
      margin-bottom: 5px;
   }
`;
