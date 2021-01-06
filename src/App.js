import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
// import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" render={ props => 
            <HomePage />
          } />
          {/* <Route exact path="/dashboard" render={ props =>  */}
            {/* <DashboardPage /> */}
          {/* } /> */}
          <Route exact path="/signup" render={ props => 
            <SignupPage />
          } />
          <Route exact path="/login" render={ props => 
            <LoginPage />
          } />
        </Switch>
      <Footer />
    </div>
  );
}
export default App;

