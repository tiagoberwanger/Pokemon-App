import './App.css';
import Start from './Badges/Start';
import End from './Badges/End';
import Firesbg from './Badges/Firesbg';
import Firecbg from './Badges/Firecbg';
import Fightingsbg from './Badges/Fightingsbg';
import Fightingcbg from './Badges/Fightingcbg';
import Electricsbg from './Badges/Electricsbg';
import Electriccbg from './Badges/Electriccbg';
import Fairysbg from './Badges/Fairysbg';
import Fairycbg from './Badges/Fairycbg';
import Flyingsbg from './Badges/Flyingsbg';
import Flyingcbg from './Badges/Flyingcbg';
import Ghostsbg from './Badges/Ghostsbg';
import Ghostcbg from './Badges/Ghostcbg';
import Rocksbg from './Badges/Rocksbg';
import Rockcbg from './Badges/Rockcbg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/end" component={End} />
            <Route path="/firesbg" component={Firesbg} />
            <Route path="/firecbg" component={Firecbg} />
            <Route path="/fightingsbg" component={Fightingsbg} />
            <Route path="/fightingcbg" component={Fightingcbg} />
            <Route path="/electricsbg" component={Electricsbg} />
            <Route path="/electriccbg" component={Electriccbg} />
            <Route path="/fairysbg" component={Fairysbg} />
            <Route path="/fairycbg" component={Fairycbg} />
            <Route path="/flyingsbg" component={Flyingsbg} />
            <Route path="/flyingcbg" component={Flyingcbg} />
            <Route path="/ghostsbg" component={Ghostsbg} />
            <Route path="/ghostcbg" component={Ghostcbg} />
            <Route path="/rocksbg" component={Rocksbg} />
            <Route path="/rockcbg" component={Rockcbg} />
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
