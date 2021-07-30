import { auth } from "../firebase/firebase";
import { Redirect } from "react-router-dom";

export const Logout = () => {
  const signOutHandler = () => {
    auth.signOut();
  }
  // TODO: find out how to do this with history
  return auth.currentUser ? (
    <div>
      <button onClick={signOutHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign out</button>
    </div>
  ) : <Redirect to="/" />
}