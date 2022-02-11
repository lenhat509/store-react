import React, {ReactDOM} from 'react'
import {connect} from 'react-redux'
import { token } from '../actions'
import { populateData } from '../actions';
import { Container } from '@mui/material';
import Dashboard from './Dashboard';

const payload = JSON.parse(window.atob(token.split('.')[1]))


class App extends React.Component{
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(populateData(payload.id));
  }
  render() {
    return (
      <Container sx={{
        width: 1,
        height: 1
      }}>
      {this.props.loading ? null :
        <Dashboard/>
      }
      </Container>
    );
  }
  
}

const mapStateToProps = ({loading}) => {
  return {
    loading
  }
}

export default connect(mapStateToProps)(App);