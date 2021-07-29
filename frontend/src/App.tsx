import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import firebase, { analytics, auth, db } from "./firebase/setup"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Login } from './components/Login';


function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
