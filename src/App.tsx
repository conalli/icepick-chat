import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import firebase, { analytics, auth, db } from "./firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { TopicOption } from "./components/TopicOption";

function App() {
  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      {user ? <TopicOption /> : <Login />}
      <Logout />
    </div>
  );
}

export default App;
