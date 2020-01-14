import React from 'react';
import BaseComponent from './BaseComponent';


class Text extends BaseComponent {
    constructor(props) {
        super(props);
        this.arrStyles = ['color', 'fontSize', 'top', 'left', 'fontFamily', 'transform'];
    }

    render() {
        const style = this.pick(this.props, this.arrStyles);
        return (
            <span id={this.props.id} 
              onMouseDown={this.dragNdrop} 
              onMouseUp={() => this.removeDragNdrop({id: this.props.id, type: this.props.type, value: this.props.value,  ...style}, this.props.changeStyle)} 
              className="text" 
              style={style}>
                {this.props.value}
            </span>
        );
    }
}

export default Text;