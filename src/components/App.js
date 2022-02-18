import React, {ReactDOM, useEffect} from 'react'
import { token } from '../actions'
import { populateData } from '../actions';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduct from './NewProduct';
import ProductDetail from './ProductDetail';
import MyProducts from './MyProducts';
import Cart from './Cart';
import History from './History';
import Login from './Login';
import Signup from './Signup';
import Account from './Account';
import ProtectedElement from './ProtectedElement';
import Logout from './Logout';
import { useDispatch, useSelector } from 'react-redux';


const  App = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(populateData());
  }, []) 
    
  return (
    <BrowserRouter>
      <div className='font-mono min-w-min'>
        <NavBar/>
          {loading? null :
            <Routes>
              <Route exact path='/home' element={<Dashboard/>}/>
              <Route path='/product/create' element={
                <ProtectedElement>
                  <NewProduct/>
                </ProtectedElement>
              }/>
              <Route path='/product/:id' element={
                <ProtectedElement>
                  <ProductDetail/>
                </ProtectedElement>
              }/>
              <Route path='/products/me' element={
                <ProtectedElement>
                  <MyProducts/>
                </ProtectedElement>
              }/>
              <Route path='/cart' element={
                <ProtectedElement>
                  <Cart/>
                </ProtectedElement>
              }/>
              <Route path='/history' element={
                <ProtectedElement>
                  <History/>
                </ProtectedElement>
              }/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/account' element={
                <ProtectedElement>
                  <Account/>
                </ProtectedElement>
              }/>
              <Route path='/logout' element={
                <ProtectedElement>
                  <Logout/>
                </ProtectedElement>
              }/>
            </Routes>
          }
      </div>
    </BrowserRouter>
    
  );
}
export default App;