import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/header/HeaderNav';
import GlobalStyle from './components/styles/GlobalStyle';
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
          <Route exact path='/' component={FindPathPage} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/signup/email' component={EmailVerification} />
          <Route exact path='/signup/email/reauthorization' component={EmailReauthorization}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
