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

        this.arrStyles = ['background'];
        this.state = {
            objects: props.objects
        }
    }

    pick = (obj, props) => {
        return props.reduce((acc, curr) => {
          acc[`${curr}`] = obj[curr];
          return acc;
        }, {});
    }

    render() {
        const { objects } = this.state;
        const { styles } = this.props;
        const style = this.pick(styles, this.arrStyles);
        return (
            <div className="canvas" style={style} onMouseDown={(e) => {this.toggleControlBar(e)}}>
                {objects.map((elem, i) => {
                    const component = React.createElement(typeMap[elem.type], {...elem, changeStyle: this.props.changeStyle, key: i});
                    return component;
                })}
            </div>
        );
    }

    toggleControlBar(e) {
        if (e.target.classList.contains('text')) return this.props.changeActiveElement(e.target.id);
        if (e.target.classList.contains('image')) return this.props.changeActiveElement(e.target.id);
        if (e.target.classList.contains('canvas')) return this.props.changeActiveElement(null);
    }
}

export default Canvas;