import React from "react";
import { Box } from "./style";
import Input from "../Input";
import Button from "../Button";
import { Colors, Size } from "../../constants/styles/button";

const AddNew = props => {
    const { title, value } = props;
    return (
        <Box>
            <div className="header-box">
                <div className="title">{title} جدید</div>
                <i className="close flaticon-close" onClick={() => props.onClose()} />
            </div>
            <Input
                value={value}
                onChange={props.onChange}
                placeholder={`عنوان ${title}`}
            />
            <div className="footer-box">
                <Button
                    btn={Colors.primary}
                    size={Size.small}
                    onClick={() => {
                        props.onCreate();
                        props.onClose();
                    }
                    }
                >
                    ایجاد
                </Button>
            </div>
        </Box>
    );
};

export default AddNew;
