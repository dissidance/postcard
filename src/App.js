import React from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import ControlBar from './components/ControlBar';

class App extends React.Component {

  state = {
    objects: [],
    controls: undefined
  };

  render() {
    return (
      <div className="main">
        <Toolbar addComponent={this.addComponentToCanvas} />
        <div className="container">
          <Canvas objects={this.state.objects} changeControl={this.changeControl}/>
          <ControlBar control={this.state.controls}/>
        </div>
      </div>
    );
  }

  changeControl = (value) => {
    this.setState((state) => {
      state.controls = value;
      return state;
    });
  }

  addComponentToCanvas = (value) => {
    this.setState((state) => {
      state.objects.push(value);
      return state;
    });
  }

}

export default App;
