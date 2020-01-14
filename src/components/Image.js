import React from 'react';
import BaseComponent from './BaseComponent';

class Image extends BaseComponent {
    constructor(props) {
        super(props);
        this.arrStyles = ['width', 'height', 'top', 'left', 'transform', 'position'];
    }
    render() {
        const style = this.pick(this.props, this.arrStyles);
        return(
            <img id={this.props.id}
                style={style} className="image"
                src={this.props.value}
                onMouseDown={this.dragNdrop}
                onDragStart={(e) => e.preventDefault()}
                onMouseUp={() => this.removeDragNdrop({
                                                        id: this.props.id,
                                                        value: this.props.value,
                                                        type: this.props.type,  ...style}, this.props.changeStyle)} alt="img"/>
        );
    }
}

export default Image;