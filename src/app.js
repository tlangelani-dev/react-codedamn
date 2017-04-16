import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="cp-app">
                <h1>Welcome To React App Buddy!</h1>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="Spree App" />,
    document.getElementById('app')
);
