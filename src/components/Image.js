import React from 'react';

class Image extends React.Component {
    render() {
        return(
            <img src={this.props.value} alt="img"/>
        );
    }
}

export default Image;