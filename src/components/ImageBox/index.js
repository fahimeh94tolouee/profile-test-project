import React, {useState} from "react";
import {Box} from "./style";

const ImageBox = props =>{
    const {file} = props;
    const [src] = useState(window.URL.createObjectURL(file));
      return(
        <Box
            style={{
                backgroundImage:`url(${src})`
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