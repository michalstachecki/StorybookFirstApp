import React from "react";
import 'notyf/notyf.min.css';
import * as CustomNotyf from "../defaults/notyfSetup";

export default class Bad extends React.Component {
    componentDidMount() {
        CustomNotyf.default.error("Error");
        throw new Error("Err");
    }

    render() {
        return (<div>Bad Component Example</div>);
    }
}