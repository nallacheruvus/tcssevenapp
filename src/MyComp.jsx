import React from "react";

var newData = {
    data:"This is some data from HOC...."
}

var myHoc = (ComposedComponent) => class extends React.Component{
    componentDidMount() {
        this.setState({ data: newData.data });
    }
    render() {
        return <>
            <ComposedComponent {...this.props} {...this.state} />
        </>
    }
}

class MyComponent extends React.Component{
    render() {
        return <>
            <h1>{ this.props.data}</h1>
        </>
    }
}

export default myHoc(MyComponent);