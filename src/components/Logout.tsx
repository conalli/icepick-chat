import { auth } from "../firebase/firebase";
import { Redirect } from "react-router-dom";

export const Logout = () => {
  const signOutHandler = () => {
    auth.signOut();
  }
  // TODO: find out how to do this with history
  return auth.currentUser ? (
    <div className="logout col-span-1 place-self-end">
      <button onClick={signOutHandler} className="bg-ip-secondary text-white font-bold py-2 px-4 rounded">Log out</button>
    </div>
  ) : <Redirect to="/" />
}