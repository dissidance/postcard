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
            <div className="canvas">
                {objects.map((elem, i) => {
                    return React.createElement(typeMap[elem.type], {value: elem.value, key: i});
                })}
            </div>
        );
    }
}

export default Canvas;