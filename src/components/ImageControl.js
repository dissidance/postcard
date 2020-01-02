import React from 'react';

class ImageControl extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <section className="section">
                    <h2 className="section__heading">Положение</h2>
                    <div className="section__inputs-container">
                        <input type="number" className="input input_control-bar" placeholder="по X"/>
                        <input type="number" className="input input_control-bar" placeholder="по Y"/>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section__heading">Размеры</h2>
                    <div className="section__inputs-container">
                        <span className="section__input-heading">Ширина</span>
                        <input type="number" className="input input_control-bar" placeholder="px"/>
                        <span className="section__input-heading">Высота</span>
                        <input type="number" className="input input_control-bar" placeholder="px"/>
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

export default ImageControl;