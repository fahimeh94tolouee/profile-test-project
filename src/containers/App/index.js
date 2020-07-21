import React, { Component } from 'react';
import {GlobalStyle} from "./style";
import PostContent from "../PostContent";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle/>
                <PostContent/>
            </React.Fragment>
        );
    }
}

export default App;
