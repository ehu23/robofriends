import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { //like a catch block, but for components
        this.setState({hasError : true})
    }

    render() {
        if (this.state.hasError) {
            return <h1> woops. not a graceful move. </h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;