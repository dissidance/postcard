import React from 'react';
import Button from './Button';

function makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 const startTextStyles = {
    color: 'rgb(0, 0, 0)',
    fontSize: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    position: 'absolute',
    top: '50px',
    left: '50px',
    transform: 'rotate(0deg)'
}

const startImageStyles = {
    width: '250px',
    height: 'auto',
    position: 'absolute',
    top: '150px',
    left: '150px',
    transform: 'rotate(0deg)'
}

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
        this.props.addComponent({type: 'text', value: 'Введите текст', ...startTextStyles, id: makeid(5)});
    }

    addImage = () => {
        const input = document.querySelector('.input');
        if (this.getImageLink().startsWith('http://') || this.getImageLink().startsWith('https://')) {
            this.props.addComponent({type: 'image', value: this.getImageLink(), ...startImageStyles, id: makeid(5)});
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