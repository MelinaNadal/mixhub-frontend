import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import { getUser, logout } from './services/userService';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import {useState } from 'react';
import './App.css';
function App(props) {
  // app state 
  const [ userState, setUserState ] = useState({ user: getUser() });



  // helper functions
  function handleSignupOrLogin(){
    
    setUserState({ user:getUser()})
    
    props.history.push('./searchpage')
   

  }

  function handleLogout(){
    logout()
    setUserState({user:null})
    props.history.push('/')
  }


  return (
    <div className="App">
    <Header user={userState.user}
     handleLogout={handleLogout}/>
      <Switch>
        <Route exact path ='/' render={ props=>
          <HomePage user={userState.user}/>        
        }/> 
        <Route exact path ='/search' render={props=>
          <Redirect to = '/login'/>
        }/>
        <Route exact path ='/login' render={props=>
          <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
        <Route exact path ='/signup' render={props=>
          <SignupPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
        <Route exact path ='/searchpage' render={props=>
          <SearchPage {...props}/>
        }/>
      </Switch>
    <Footer/>
    </div>
 
  );
}

export default withRouter(App);