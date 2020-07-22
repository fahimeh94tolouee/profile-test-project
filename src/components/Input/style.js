import styled from "styled-components";
import {COLORS, FONT_SIZE} from "../../assets/styleVariables";

export const Box = styled.div`
    width: 100%;
    height: 32px;
   
    input{
    width: 100%;
    padding: 5px 12.6px;
    border-radius: 4px; 
    height: 100%;
    border: 1px solid ${COLORS.grey_800};
    color: ${COLORS.grey_400};
    font-size: ${FONT_SIZE.small};
    line-height: 22px;
    }    
    .input-class{
     &::-webkit-input-placeholder {
        color: ${COLORS.white_700};;
      }
    
     &::-moz-placeholder {
        color: ${COLORS.white_700};;
     }
    
     &:-ms-input-placeholder {
        /** notice that ie has only a single colon) */
        color: ${COLORS.white_700};;
     }
    
     &::-webkit-input-placeholder {
        color: ${COLORS.white_700};;
     }
    
     &::placeholder {
        color: ${COLORS.white_700};;
     }
    }
`;