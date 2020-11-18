import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Home from './component/Home';
import Pariwisata from './component/Pariwisata';
import Kuliner from './component/Kuliner';
import Sejarah from './component/Sejarah';
import Pemerintahan from './component/Pemerintahan';

function App() {
  return (
     <BrowserRouter>
          <Switch>
              <Link path="/" exact component={Home} />
              <Link path="/pariwisata" exact component={Pariwisata} />
              <Link path="/kuliner" exact component={Kuliner} />
              <Link path="/sejarah" exact component={Sejarah} />
              <Link path="/pemerintahan" exact component={Pemerintahan} />
          </Switch>
     </BrowserRouter>
  );
}

export default App;
