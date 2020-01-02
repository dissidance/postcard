import React from 'react';
import Button from './Button';

class Toolbar extends React.Component {

    render() {
        return (
            <div className="toolbar">
                <Button onClick={this.addText} name={'добавить текст'} />
                <div className="toolbar__add-image">
                    <Button onClick={this.addImage} name={'добавить изображение'} />
                    <input className="input" type="text" placeholder='ссылка на изображение'/>
                </div>
            </div>
        );
    }

    addText = () => {
        this.props.addComponent({type: 'text', value: 'Введите текст'});
    }

    addImage = () => {
        const input = document.querySelector('.input');
        if (this.getImageLink().startsWith('http://') || this.getImageLink().startsWith('https://')) {
            this.props.addComponent({type: 'image', value: this.getImageLink()});
            input.value = '';
        } else {
            alert('введите ссылку на изображение');
        }

    }

    getImageLink = () => {
        const input = document.querySelector('.input');
        return input.value;
    }

}

export default Toolbar;