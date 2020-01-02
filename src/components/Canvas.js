import React from 'react';
import Text from './Text';
import Image from './Image';

const typeMap = {
    text: Text,
    image: Image
}

class Canvas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            objects: props.objects
        }
    }

    render() {
        const { objects } = this.state;
        
        return (
            <div className="canvas" onClick={(e) => {this.toggleControlBar(e)}}>
                {objects.map((elem, i) => {
                    return React.createElement(typeMap[elem.type], {value: elem.value, key: i});
                })}
            </div>
        );
    }

    toggleControlBar(e) {
        if(e.target.classList.contains('text')) return this.props.changeControl('text');
        if(e.target.classList.contains('image')) return this.props.changeControl('image');
        if(e.target.classList.contains('canvas')) return this.props.changeControl('canvas');
    }
}

export default Canvas;