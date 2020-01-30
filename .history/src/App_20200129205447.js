import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Header from './components/Header';
import Products from './components/product/Products';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="add-product" component={AddProduct} />
              <Route exact path="products/edit/:id" component={EditProduct} />
            </Switch>
          </div>

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
