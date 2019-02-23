import React, { Component } from 'react';
import Home from './view/Home'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
