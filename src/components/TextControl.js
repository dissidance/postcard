import React from 'react';

const styleValues = {
    fontSize: (value) => `${value}px`,
    value: (value) => value,
    top: (value) => `${value}px`,
    left: (value) => `${value}px`,
    color: (value) => `rgb(${value})`,
    transform: (value) =>  `rotate(${value}deg)`,
    fontFamily: (value) => value,
}

class TextControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.activeElement
        }
    }

    change(key, value) {
        this.setState(state => {
            state[key] = styleValues[key](value);
            this.props.changeStyle(state);
            return state;
        });
    }

    getStyleValue = (value) => {
        if (value.includes('deg')) {
            return value.slice(value.indexOf('(') + 1, value.indexOf('d'));
        };
        return value.slice(value.indexOf('(') + 1, value.indexOf(')'));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeElement !== this.props.activeElement) {
            this.setState({...this.props.activeElement});
        }
    }

    render() {
        return (
            <div className="wrapper">
                <section className="section">
                <h2 className="section__heading">Текст</h2>
                    <textarea className="textarea" value={this.state.value} onChange={(e) => this.change('value', e.target.value)}
                         name="addText"></textarea>
                </section>
                <section className="section">
                    <h2 className="section__heading">Цвет текста</h2>
                    <div className="section__inputs-container">
                        <input type="text" className="input" placeholder='0, 0, 0' 
                            value={this.getStyleValue(this.state.color)}
                            onChange={(e) => this.change('color', e.target.value)}/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Размер текста</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" 
                            value={parseInt(this.state.fontSize)}
                            onChange={(e) => this.change('fontSize', e.target.value)}/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Шрифт</h2>
                    <select name="" id="" 
                            value={this.state.fontFamily}
                            onChange={(e) => this.change('fontFamily', e.target.value)}>
                        <option value="Arial, Helvetica, sans-serif">Arial</option>
                        <option value='"Arial Black", Gadget, sans-serif'>Arial Black</option>
                        <option value='"Comic Sans MS", cursive'>Comic Sans MS</option>
                        <option value='Georgia, serif'>Georgia</option>
                        <option value='"Times New Roman", Times, serif'>Times New Roman</option>
                        <option value='"Trebuchet MS", Helvetica, sans-serif'>Trebuchet MS</option>
                    </select>
                </section>
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

export default TextControl;