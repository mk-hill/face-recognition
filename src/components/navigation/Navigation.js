import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="f3 link dim black pa2 ma2 pointer navlink"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black pa2 ma2 mr0 pointer navlink"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className="f3 link dim black pa2 ma2 pointer navlink"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
