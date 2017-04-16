import React from 'react';

class Hello extends React.Component {
    render() {
        return <h1>Hello {this.props.name}, Welcome to React.js!</h1>;
    }
}

Hello.defaultProps = {
    name: 'John Doe'
};

export default Hello;
