import React from 'react';
import data from '../mockData/sitters.json';
import SitterList from './SitterList';
import GoogleAuth from './GoogleAuth.js';

class App extends React.Component {
  state = { sitters: data.sitters };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <GoogleAuth />
        <SitterList sitters = {this.state.sitters} />
      </div>
    );
  }
}

export default App;
