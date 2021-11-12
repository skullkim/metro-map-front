import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/header/HeaderNav';
import GlobalStyle from './components/styles/GlobalStyle';
import { ClientPath } from "./lib/dataPath";
import Bookmark from './pages/Bookmark';
import EmailVerification from "./pages/EamilVerification";
import EmailReauthorization from "./pages/EmailReauthorization";
import FindPathPage from './pages/FindPathPage';
import LostAndFound from './pages/LostAndFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StoreBox from './pages/StoreBox';
import UserComplain from './pages/userComplain';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <HeaderNav />
        <Switch>
          <Route exact path={ClientPath.findPath} component={FindPathPage} />
          <Route exact path={ClientPath.signUp} component={SignUp} />
          <Route exact path={ClientPath.emailVerification} component={EmailVerification} />
          <Route exact path={ClientPath.emailReauthorization} component={EmailReauthorization}/>
          <Route path={ClientPath.signIn} component={SignIn}/>
          <Route path={ClientPath.bookmark} component={Bookmark} />
          <Route path={ClientPath.lostAndFound} component={LostAndFound} />
          <Route path={ClientPath.storeBox} component={StoreBox} />
          <Route path={ClientPath.userComplain} component={UserComplain} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
