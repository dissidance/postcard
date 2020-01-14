import React from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import ControlBar from './components/ControlBar';



class App extends React.Component {

  state = {
    objects: [],
    activeElement: {
      type: 'canvas',
    },
    styles: {
      background: 'rgb(255, 255, 255)'
    }
  };

  render() {
    return (
      <div className="main">
        <Toolbar addComponent={this.addComponentToCanvas} />
        <div className="container">
          <Canvas objects={this.state.objects} changeActiveElement={this.changeActiveElement} styles={this.state.styles} activeElement={this.state.activeElement} changeCanvasStyle={this.changeCanvasStyle} changeStyle={this.changeStyle}/>
          <ControlBar activeElement={this.state.activeElement} styles={this.state.styles} changeCanvasStyle={this.changeCanvasStyle} changeStyle={this.changeStyle}/>
        </div>
      </div>
    );
  }

  changeActiveElement = (activeElementId) => {
    if (!activeElementId) return this.setState({activeElement: {type: 'canvas'}});
    const activeElement = this.state.objects.find(elem => elem.id === activeElementId);
    this.setState({activeElement});
  }

  addComponentToCanvas = (value) => {
    this.setState((state) => {
      state.objects.push(value);
      return state;
    });
  }

  changeStyle = (element) => {
    const { id } = element;
    const index = this.state.objects.findIndex(elem => elem.id === id);
    this.setState(state => {
      state.objects[index] = element;
      state.activeElement = element;
      return state;
    });
  }

  changeCanvasStyle =(value) => {
    this.setState(state => {
      state.canvasBackground = value;
      return state;
    })
  }
}

export default App;
