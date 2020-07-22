import React from "react";
import {Box} from "./style"

const Uploader = props => {

    const {files, limit} = props;
    return (
        <Box>
            <input
                type="file"
                id="file"
                className="input-file"

                onChange={e => {
                    if (props.accept.indexOf(e.target.files[0]["type"]) >= 0) {
                        if (e.target.files.length + files.length <= limit){
                            props.onChange(files.concat(e.target.files[0]))
                        }
                        else {
                            alert(`تعداد فایل‌های ارسالی نمی‌تواند از ${limit}  فایل بیشتر باشد.`)
                        }
                    }
                    return false;
                }}
                accept={props.accept}
            />
        </Box>
    );
};

export default Uploader;