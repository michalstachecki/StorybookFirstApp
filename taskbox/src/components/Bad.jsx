import React from "react";

export default class Bad extends React.Component {
    componentDidMount() {
        throw new Error("Err");
    }

    render() {
        return (<div>Bad Component Example</div>);
    }
}