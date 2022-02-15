import React, {ReactDOM} from 'react'
import {connect} from 'react-redux'
import { token } from '../actions'
import { populateData } from '../actions';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduct from './NewProduct';
import ProductDetail from './ProductDetail';
const payload = JSON.parse(window.atob(token.split('.')[1]))


class App extends React.Component{
  
  componentDidMount() {
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