import React from 'react';

class BaseComponent extends React.Component {
    constructor() {
        super();

        this.canvas = document.querySelector('.canvas');
        this.target = null;
    }

    mouseMove = (e) => {
        const left = parseInt(this.target.style.left);
        const top = parseInt(this.target.style.top);
        this.target.style.left = `${left + e.movementX}px`;
        this.target.style.top = `${top + e.movementY}px`;
    }

    removeDragNdrop = (element, changeStyleCb) => {
        this.canvas.removeEventListener('mousemove', this.mouseMove); 
        element.left = this.target.style.left;
        element.top = this.target.style.top;
        changeStyleCb(element);
    }

    dragNdrop = (e) => {
        const { target } = e;
        if (target.classList.contains('canvas')) return;
        this.target = target;
        this.canvas.addEventListener('mousemove', this.mouseMove);
    }

    pick = (obj, props) => {
        return props.reduce((acc, curr) => {
          acc[`${curr}`] = obj[curr];
          return acc;
        }, {});
    }
}

export default BaseComponent;