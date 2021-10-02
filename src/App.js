import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/header/HeaderNav';
import GlobalStyle from './components/styles/GlobalStyle';
// eslint-disable-next-line import/extensions
import FindPathPage from './pages/FindPathPage.js';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <HeaderNav />
        <Switch>
          <Route path='/' component={FindPathPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
