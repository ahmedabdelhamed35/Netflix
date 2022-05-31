
import './App.scss';
import Register from './components/register/Register';
import {BrowserRouter, Route} from 'react-router-dom'
import {React, Component} from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    )
  }
}


export default App;