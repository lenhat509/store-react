import React, {ReactDOM} from 'react'
import {connect} from 'react-redux'
import { token } from '../actions'
import { populateData } from '../actions';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <div className='font-mono '>
          <NavBar/>
            {loading? null :
              <Routes>
                <Route exact path='/home' element={<Dashboard/>}/>

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