import styled from "styled-components";
import {COLORS, FONT_SIZE, FONT_WEIGHT} from "../../assets/styleVariables";

export const Box = styled.div`
  width: 186px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 12px 11.5px 12px 16px;
  background-color: ${COLORS.white_200};
  border-radius: 15.5px;
  justify-content: center;
  cursor: pointer;
  
   .header-box{
    margin-bottom: 19.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
      font-size: ${FONT_SIZE.small};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.grey};
    }
    .close{
      &:before{
        color: ${COLORS.primaryColor};
        font-size: 12px;
      }
    }
   }
  .footer-box{
    margin-top: 8px;
  }
`;