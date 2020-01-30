import React, { Fragment } from 'react';

import { Provider } from "react-redux";
import store from "./store";
import Header from './components/Header';
function App() {
  return (
    <Provider store={store}>
    <Fragment>
      <Header/>
    </Fragment>
    </Provider>
  );
}

export default App;
