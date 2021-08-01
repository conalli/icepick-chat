import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore"
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { TopicOption, topicList } from "./components/TopicOption";
import { ChatRoom } from "./components/ChatRoom";

function App() {
  const [user] = useAuthState(auth);
  // const topicsRef = db.collection("topics");
  // const getTopics = topicsRef.orderBy("name").limit(25);
  // const [dbTopics, loading, error] = useCollectionData(getTopics, { idField: 'id' });

  return (
    <div className="App bg-ip-black text-white">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <section className="main bg-ip-black">
              <div>
                <h2 className="text-8xl text-white pb-10 md:pb-20">
                  Let's talk...
                </h2>
              </div>
              {user ? <Redirect to="/icebreaker" /> : <Login />}
            </section>
          </Route>
          <Route exact path="/icebreaker">
            {/* {error && <h1>There was an error</h1>}
            {loading && <h1>Loading...</h1>} */}
            <TopicOption topics={topicList} />
          </Route>
          {topicList &&
            topicList.map((topic: any, idx: any) => {
              return (
                <Route key={idx} exact path={`/icebreaker/${topic.name}`}>
                  {/* fix when getting topics from the server */}
                  <h1>{topic.name}</h1>
                  <ChatRoom topic={topic} />
                </Route>
              );
            })}
        </Switch>
        <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
