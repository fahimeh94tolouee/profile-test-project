import React from "react";
import { Box } from "./style";

const Button = props => {
    const {loading, disabled, children, btn , size} = props;
    return (
        <Box btn={btn} size={size}

                onClick={
                    !loading
                        ? props.onClick
                        : e => {
                            e.preventDefault();
                            return false;
                        }
                }
                disabled={disabled}
            >

                {loading?
                    "loading..."
                    :
                children}
        </Box>
    );
};

export default Button;