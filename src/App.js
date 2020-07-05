import React from 'react';
import Main from './route/Main';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import NavBar from './components/general/NavBar';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="col-md-12 text-center">
          <i className="fab fa-github fa-4x mb-4 mt-4"></i>
          <NavBar />
        </div>
        <hr />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
