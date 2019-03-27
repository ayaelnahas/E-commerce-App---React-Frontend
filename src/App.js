import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import ProductList from './containers/productList/productList'
import ProductDetails from './containers/productDetails/productDetails'
import AddProduct from './containers/addProduct/addProduct'
import Header from './components/header/header';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Header}></Route>
            <Route path="/home" exact  component={ProductList}></Route>
            <Route path="/addProduct" exact  component={AddProduct}></Route>
            <Route path="/productDetails/:id" exact  component={ProductDetails}></Route>
            <Route render={() => <h1>Page Not Found!!</h1>}></Route>
          </Switch>
      </BrowserRouter >

    )
  }
}

export default App;

