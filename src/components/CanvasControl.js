import React from 'react';

class CanvasControl extends React.Component {
    render () {
        return(
            <div className="wrapper">
                <section className="section">
                    <h2 className="section__heading">Цвет фона</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder="255"/>
                        <input type="number" className="input input_control-bar" placeholder="255"/>
                        <input type="number" className="input input_control-bar" placeholder="255"/> 
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Установить фон</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input" placeholder="ссылка на изображение"/>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default CanvasControl;