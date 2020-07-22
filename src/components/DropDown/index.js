import React, { useState, useRef, useEffect } from "react";
import ClickOutSide from "../../lib/clickOutSide";
import { Box, BoxCloseView, BoxOpenView } from "./style";


const DropDown = props => {
    const [status, setStatus] = useState(false);
    const component = useRef(null);
    useEffect(ClickOutSide(component, () => setStatus(false)), [component, () => setStatus(false)]);

    const selectItem = (item) => {
        props.onChange(item);
        setStatus(false);
    };

    return (
        <Box ref={component} status={props.show && status}>
            <BoxCloseView
                // status={status}
                onClick={e => {
                    e.stopPropagation();
                    setStatus(!status)
                }}
            >
                <div className="selected-value">
                    {(props.value && props.value.value) || props.label}
                </div>
                <i className="arrow flaticon-down-arrow-1"/>
            </BoxCloseView>
            <BoxOpenView status={props.show && status}>
                <ul>
                    {props.options.map((item)=>{
                        return(<li onClick={() => selectItem(item)} key={item.id}>
                            {item.value}
                        </li>)
                    })}
                    {props.extraItem && <li>{props.extraItem}</li>}
                </ul>
            </BoxOpenView>
        </Box>
    )

};

export default DropDown;
