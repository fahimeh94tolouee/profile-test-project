import styled from "styled-components";
import {COLORS, FONT_SIZE, FONT_WEIGHT} from "../../assets/styleVariables";
import {Size, Colors} from "../../constants/styles/button";

export const Box = styled.div`
  width: fit-content;
  height: ${props => props.size === Size.small ? "24px" : "33px"};
  padding: 8px ${props => props.size === Size.small ? "20.5px" : "26px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.size === Size.small ? "4px" : "8px"};
  border: 1px solid ${COLORS.grey_800};
  background-color: ${props => props.btn === Colors.primary ? COLORS.primaryColor : COLORS.secondaryColor};
  color: ${COLORS.white};
  font-weight: ${props => props.size === Size.small ? FONT_WEIGHT.medium : FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.small}; 
`;