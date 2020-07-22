import React, { useState, useRef, useEffect } from "react";
import {Box} from "./style";

const Input = (props) => {
    return (<Box>
        <input
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            placeholder={props.placeholder}
        />
    </Box>)
};

export default Input