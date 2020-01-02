import React from 'react';

class TextControl extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <section className="section">
                    <h2 className="section__heading">Цвет текста</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder="255"/>
                        <input type="number" className="input input_control-bar" placeholder="255"/>
                        <input type="number" className="input input_control-bar" placeholder="255"/> 
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Размер текста</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder="8"/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Шрифт</h2>
                    <select name="" id="">
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
                        <input type="number" className="input input_control-bar" placeholder="по X"/>
                        <input type="number" className="input input_control-bar" placeholder="по Y"/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Поворот</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder=""/>
                    </div>
                </section>
            </div>
        );
    }
}

export default TextControl;