import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Header from './components/Header';
function App() {
  return (
    <Provider store={store}>
      <Router>
    <Fragment>
      <Header/>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
