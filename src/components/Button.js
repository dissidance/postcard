import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button className="toolbar__button" {...this.props}>{this.props.name}</button>
        );
    }
}

export default Button;