import styled from "styled-components";
import {COLORS, FONT_SIZE} from "../../assets/styleVariables";

export const Box = styled.div`
  width: 100%;
  height: ${props => props.status ? 'fit-content' : "31px"};
  display: flex;
  flex-direction: column;
  padding: 12px 11.5px 12px 16px;
  background-color: ${COLORS.white_200};
  border-radius: 15.5px;
  justify-content: center;
  cursor: pointer;
`;

export const BoxCloseView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //cursor: pointer;
  .selected-value{
    font-size: ${FONT_SIZE.small};
    font-weight: bold;
    color: ${COLORS.grey};
  }
  .arrow{
    &:before{
      font-size: 12px;
      font-weight: bold;
      color: ${COLORS.primaryColor};
    }
  }
`;

export const BoxOpenView = styled.div`
  display: ${props=> props.status? "flex" : "none"};
  //cursor: pointer;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    li{
      width: 100%;
      padding: 8px 0;
      font-size: ${FONT_SIZE.small};
    }
  }

`;