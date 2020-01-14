import React from 'react';
import TextControl from './TextControl';
import ImageControl from './ImageControl';
import CanvasControl from './CanvasControl';

class ControlBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeElement: this.props.activeElement,
            styles: this.props.styles
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeElement !== this.props.activeElement) {
            this.setState({activeElement: this.props.activeElement});
        }
    }

    getWidjet(type) {
        if (type === 'text') {
            return <TextControl activeElement={this.state.activeElement} changeStyle={this.props.changeStyle} />;
        } else if (type === 'image') {
            return <ImageControl activeElement={this.state.activeElement} changeStyle={this.props.changeStyle}/>;
        } else {
            return <CanvasControl activeElement={this.state.activeElement} styles={this.state.styles}  changeCanvasStyle={this.props.changeCanvasStyle} />
        };
    }

    render() {
        const { activeElement: { type } } = this.state;
        return (
            <div className="control-bar">
                {this.getWidjet(type)}
            </div>
        );
    }
}

export default ControlBar;