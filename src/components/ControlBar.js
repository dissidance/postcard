import React from 'react';
import TextControl from './TextControl';
import ImageControl from './ImageControl';
import CanvasControl from './CanvasControl';

class ControlBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            control: this.props.control
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.control !== this.props.control) {
            this.setState({control: this.props.control});
        }
    }

    render() {
        const { control } = this.state;
        let widjet;
        if (control === 'text') {
            widjet = <TextControl />;
        } else if (control === 'image') {
            widjet = <ImageControl />;
        } else {
            widjet = <CanvasControl />
        };


        return (
            <div className="control-bar">
                {widjet}
            </div>
        );
    }
}

export default ControlBar;