import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
    render() {
        return <h1>Hello {this.props.name}, you are {this.props.age} years old!</h1>;
    }
}

Hello.propTypes = {
    age: PropTypes.number.isRequired
};

Hello.defaultProps = {
    name: 'John Doe'
};

export default Hello;
