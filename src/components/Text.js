import React from 'react';

class Text extends React.Component {

    render() {
        return (
            <span className="text">{this.props.value}</span>
        );
    }
}

export default Text;