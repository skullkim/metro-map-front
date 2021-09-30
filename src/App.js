import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import FindPathPage from "./pages/FindPathPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path='/' component={FindPathPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
