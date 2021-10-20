import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/header/HeaderNav';
import GlobalStyle from './components/styles/GlobalStyle';
import { ClientPath } from "./lib/dataPath";
import EmailVerification from "./pages/EamilVerification";
import EmailReauthorization from "./pages/EmailReauthorization";
import FindPathPage from './pages/FindPathPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <HeaderNav />
        <Switch>
          <Route exact path={ClientPath.findPath} component={FindPathPage} />
          <Route exact path={ClientPath.signUp} component={SignUp} />
          <Route exact path={ClientPath.emailReauthorization} component={EmailVerification} />
          <Route exact path={ClientPath.emailReauthorization} component={EmailReauthorization}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
