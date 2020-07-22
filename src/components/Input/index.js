import React from "react";
import {Box} from "./style";

const Input = (props) => {
    return (<Box>
        <input
            className="input-class"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            placeholder={props.placeholder}
        />
    </Box>)
};

export default Input