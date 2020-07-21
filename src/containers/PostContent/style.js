import styled from "styled-components";
import {COLORS, FONT_SIZE} from "../../assets/styleVariables";

export const PageContainer = styled.div`
  .footer{
    position: fixed;
    bottom: 0;
    border-top: 1px solid ${COLORS.white_100};
    width: 100%;
    height: 57px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;