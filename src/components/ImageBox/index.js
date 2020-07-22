import React from "react";
import {Box} from "./style";

const ImageBox = props =>{
      return(
        <Box
            style={{
                backgroundImage: `url(${window.URL.createObjectURL(props.file)})`
            }}
            width={props.width}
        >
            <span className="close-button" onClick={()=>props.onClose()}>
                <i className="close flaticon-close"/>
            </span>
        </Box>
      )
};

export default ImageBox