import React, {ReactDOM} from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../actions/products';
import {handleAddUsers} from '../actions/users';
import {getOrders} from '../actions/orders';
import {getActiveCart} from '../actions/cart'
import { token } from '../actions'

const payload = JSON.parse(window.atob(token.split('.')[1]))

class App extends React.Component{
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
    dispatch(handleAddUsers());
    dispatch(getOrders(payload.id));
    dispatch(getActiveCart(payload.id));
  }
  render() {
    return (
      <div>
        <span>Front store</span>
      </div>
    );
  }
  
}

export default connect()(App);