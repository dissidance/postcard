import React from 'react';

const styleValues = {
    background: (value) => {
        if (value.includes('http')) {
            return `url(${value})`
        };
        return `rgb(${value})`
    }
}

class CanvasControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeElement !== this.props.activeElement) {
            this.setState({...this.props.activeElement});
        }
    }

    render () {
        return(
            <div className="wrapper">
                <section className="section">
                    <h2 className="section__heading">Цвет фона</h2>
                    <div className="section__inputs-container">
                        <input type="text" className="input" placeholder="0, 0, 0"
                            value={this.canvasColorValue(this.state.styles.background)}
                            onChange={(e) => this.change('background', e.target.value)}/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Установить фон</h2>
                    <div className="section__inputs-container">
                        <input type="text" className="input" placeholder="ссылка на изображение"
                            onChange={(e) => this.change('background', e.target.value)}/>
                    </div>
                </section>
            </div>
        );
    }

    change(key, value) {
        this.setState(state => {
            state.styles[key] = styleValues[key](value);
            this.props.changeCanvasStyle(state);
            return state;
        });
    }

    canvasColorValue = (value) => {
        const colorValue = value.slice(value.indexOf('(') + 1, value.indexOf(')'));
        return colorValue;
    }
}

export default CanvasControl;