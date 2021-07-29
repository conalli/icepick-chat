import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import firebase, { defaultAnalytics, defaultAuth, db } from "./firebase/setup"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
