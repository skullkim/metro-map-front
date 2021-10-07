import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/header/HeaderNav';
import GlobalStyle from './components/styles/GlobalStyle';
// eslint-disable-next-line import/extensions
import FindPathPage from './pages/FindPathPage.js';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <HeaderNav />
        <Switch>
          <Route exact path='/' component={FindPathPage} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
