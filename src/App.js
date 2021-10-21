import { Route, Switch } from 'react-router';
import './App.css';
import Form from './Components/Form/Form';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className='wrapper'>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
