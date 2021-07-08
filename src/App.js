import './App.css';
import { BrowserRouter as Router, Switch, Link, Route, } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home/>
          </Route>
          <Route path="/add" component={AddContact}>
              <AddContact/>
          </Route>
          <Route path="/edit/:id" component={EditContact}>
              <EditContact/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
