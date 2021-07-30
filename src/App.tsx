import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import firebase, { analytics, auth, db } from "./firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
// import { useCollectionData } from "react-firebase-hooks/firestore"
import { Header } from "./components/Header";
import { Login } from './components/Login';
import { TopicOption, topicList } from "./components/TopicOption";

function App() {
  const [user] = useAuthState(auth)

  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {user ?  <Redirect to="/icebreaker" />: <Login />}
          </Route>
          <Route exact path="/icebreaker">
            <TopicOption />
          </Route>
          {topicList.map((topic, idx) => {
            return (
              <Route key={idx} exact path={`/icebreaker/${topic.name}`}>
                <h1>{topic.name}</h1>
              </Route>
            )
          })}
        </Switch>
        <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
