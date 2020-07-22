import styled from "styled-components";
import {COLORS, FONT_WEIGHT, FONT_SIZE} from "../../assets/styleVariables";

export const PageContainer = styled.div`
  padding: 21px 16px;
  position: relative;
  height: 100vh;
  //max-width: 500px;
  //margin: 0 auto;
  
  .header{
    display: flex;
    justify-content: space-between;
    .right{}
    .left{
      position: relative;
      .category-container{
          width: 156px;
        }
        
        .add-category{
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          margin: -8px 0;
          padding: 8px 0;
          span{
            font-size: ${FONT_SIZE.small};
            font-weight: ${FONT_WEIGHT.bold};
            color: ${COLORS.grey};
          }
          .add{
            &:before{
              font-size: 12px;
              color: ${COLORS.primaryColor};
            };
          }
        }
        
        .new-form-container{
          position: absolute;
          top: 0;
          left: 0;
        }
    }
  }
  .main-part{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: stretch;
    height: calc(100vh - 57px);
    overflow-y: auto;
    margin-bottom: 60px;
    //height: calc(100vh - 100px);
    div:nth-child(2n - 1):not(:last-of-type){
      margin-left: 8px;
    }
    div{
       margin-bottom: 8px;
    }
  }
  .footer{
    position: fixed;
    bottom: 0;
    border: 1px solid ${COLORS.white_100};
    width: 100%;
    height: 57px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 -16px;
    background-color: ${COLORS.white};
    z-index: 2;
    .right{
      display: flex;
    }
  }
`;

export const Icon = styled.div`
    margin-right: 32px;
    i{
      &:before{
      font-size: 24px;
      color: ${props => props.active? COLORS.primaryColor : COLORS.white_400};
      cursor: ${props => props.active? "pointer" : "arrow"};
      }
    }
`;