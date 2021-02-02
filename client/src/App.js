import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/HomeView';
import SignInView from './views/LoginView';
import RegisterView from './views/RegisterView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInView} />
        <Route path='/register' component={RegisterView} />
      </Switch>
    </Router>
  );
}

export default App;
