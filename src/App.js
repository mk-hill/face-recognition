import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/faceRecognition/FaceRecognition';

// const particlesParams = {
//   particles: {
//     number: {
//       value: 70,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// };

const initialState = {
  input: '',
  imgUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    const { id, name, email, entries, joined } = data;
    this.setState({
      user: {
        id: id,
        name: name,
        email: email,
        entries: entries,
        joined: joined,
      },
    });
  };

  calculateFaceLocation = data => {
    // const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const facesArr = [];
    const apiFaces = data.outputs[0].data.regions;
    apiFaces.forEach(faceData => {
      const faceBox = faceData.region_info.bounding_box;
      facesArr.push({
        leftCol: faceBox.left_col * width,
        topRow: faceBox.top_row * height,
        rightCol: width - faceBox.right_col * width,
        bottomRow: height - faceBox.bottom_row * height,
      });
    });
    return facesArr;
  };

  displayFaceBox = box => {
    this.setState({ box });
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onImgSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    // ? setState apparently causes issues when using state.imgUrl above ?
    // todo Research further
    fetch('http://localhost:3001/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then(res => res.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then(res => res.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imgUrl, route, box, user } = this.state;
    return (
      <div className="App">
        {/* <Particles className="particles" params={particlesParams} /> */}
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onImgSubmit={this.onImgSubmit}
            />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        ) : route === 'signin' || route === 'signout' ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
