import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import SubwayMap from "./components/SubwayMap";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path='/' component={SubwayMap}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
