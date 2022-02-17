import React, {ReactDOM} from 'react'
import {connect} from 'react-redux'
import { token } from '../actions'
import { populateData } from '../actions';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduct from './NewProduct';
import ProductDetail from './ProductDetail';
import MyProducts from './MyProducts';
import Cart from './Cart';
import History from './HIstory';
import Login from './Login';
import Signup from './Signup';
import Account from './Account';

const payload = JSON.parse(window.atob(token.split('.')[1]))


class App extends React.Component{
  
  componentDidMount() {
    const token = localStorage.getItem('app-token');

    const { dispatch } = this.props;
    dispatch(populateData(payload.id));
  }
  render() {
    const {loading} = this.props;
    return (
      <BrowserRouter>
        <div className='font-mono min-w-min'>
          <NavBar/>
            {loading? null :
              <Routes>
                <Route exact path='/home' element={<Dashboard/>}/>
                <Route path='/product/create' element={<NewProduct/>}/>
                <Route path='/product/:id' element={<ProductDetail/>}/>
                <Route path='/products/me' element={<MyProducts/>} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/history' element={<History/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/account' element={<Account/>}/>
              </Routes>
            }
        </div>
      </BrowserRouter>
      
    );
  }
  
}

const mapStateToProps = ({loading}) => {
  return {
    loading
  }
}

export default connect(mapStateToProps)(App);