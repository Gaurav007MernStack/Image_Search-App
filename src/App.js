import './Style/Style.css';
import {Wallpaper} from './Wallpaper'
import {Nav} from './Navbar';
import {Route,Switch, Link} from 'react-router-dom';
import {History} from './History';
import Error from './Error';

// "/"Wallpaper ,  "/history"History
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Wallpaper} />
        <Route path="/history" component={History} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
