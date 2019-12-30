import React from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';

class App extends React.Component {

  state = {
    objects: []
  };

  render() {
    return (
      <div className="main">
        <Toolbar addComponent={this.addComponentToCanvas} />
        <Canvas objects={this.state.objects} />
      </div>
    );
  }

  addComponentToCanvas = (value) => {
    this.setState((state) => {
      state.objects.push(value);
      return state;
    })
  }

}

export default App;
