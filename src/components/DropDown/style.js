import styled from "styled-components";
import {COLORS, FONT_SIZE, FONT_WEIGHT} from "../../assets/styleVariables";

export const Box = styled.div`
  width: 100%;
  height: ${props => props.status ? 'fit-content' : "31px"};
  display: flex;
  flex-direction: column;
  padding: 12px 4px;
  background-color: ${COLORS.white_200};
  border-radius: 15.5px;
  justify-content: center;
  cursor: pointer;
`;

export const BoxCloseView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11.5px 0 16px;
  .selected-value{
    font-size: ${FONT_SIZE.small};
    font-weight: ${FONT_WEIGHT.bold};
    color: ${COLORS.grey};
  }
  .arrow{
    &:before{
      font-size: 12px;
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.primaryColor};
    }
  }
`;

export const BoxOpenView = styled.div`
  display: ${props=> props.status? "flex" : "none"};
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    li{
      width: 100%;
      padding: 8px 11.5px 8px 16px;
      margin-top: 4px;
      font-size: ${FONT_SIZE.small};
      &:hover{
        box-shadow: 0 0 6px 0 #CCCCCC;;
      }
    }
  }

`;