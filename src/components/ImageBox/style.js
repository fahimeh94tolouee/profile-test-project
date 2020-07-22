import styled from "styled-components";
import {COLORS} from "../../assets/styleVariables";

export const Box = styled.div`
  border-radius: 8px;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-image: initial;
  height: auto;
  width: ${props => props.width};
  
  .close-button{
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: ${COLORS.grey};
    opacity: 0.8;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .close{
      &:before{
        font-size: 14px;
        color: ${COLORS.white};
      }
    }
  }
`;