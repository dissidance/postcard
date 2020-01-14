import React from 'react';

const styleValues = {
    value: (value) => value,
    width: (value) => `${value}px`,
    height: (value) => `${value}px`,
    top: (value) => `${value}px`,
    left: (value) => `${value}px`,
    transform: (value) =>  `rotate(${value}deg)`
}

class ImageControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.activeElement
        }
    }

    change(key, value) {
        this.setState(state => {
            state[key] = styleValues[key](value);
            this.props.changeStyle(state)
            return state;
        });
    }

    getStyleValue = (value) => {
        return value.slice(value.indexOf('(') + 1, value.indexOf('d'));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeElement !== this.props.activeElement) {
            this.setState({...this.props.activeElement});
        }
    }

    render() {
        return(
            <div className="wrapper">
                <section className="section">
                    <h2 className="section__heading">Положение</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder="по X"
                            value={parseInt(this.state.left)}
                            onChange={(e) => this.change('left', e.target.value)}/>
                        <input type="number" className="input input_control-bar" placeholder="по Y"
                            value={parseInt(this.state.top)}
                            onChange={(e) => this.change('top', e.target.value)}/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Размеры</h2>
                    <div className="section__inputs-container">
                        <span className="section__input-heading">Ширина</span>
                        <input type="number" className="input input_control-bar" placeholder="px"
                            value={parseInt(this.state.width)}
                            onChange={(e) => this.change('width', e.target.value)}/>
                        <span className="section__input-heading">Высота</span>
                        <input type="number" className="input input_control-bar" placeholder="auto"
                            onChange={(e) => this.change('height', e.target.value)}/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Поворот</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder=""
                            value={this.getStyleValue(this.state.transform)}
                            onChange={(e) => this.change('transform', e.target.value)}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default ImageControl;