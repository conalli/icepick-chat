import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import firebase, { analytics, auth, db } from "./firebase/setup"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Topic } from "./components/Topic";

function App() {
  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      {user ? <Topic /> : <Login />}
      <Logout />
    </div>
  );
}

export default App;
