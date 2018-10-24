import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';

const particlesParams = {
  particles: {
    number: {
      value: 35,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParams} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
