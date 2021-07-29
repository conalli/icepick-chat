import firebase from "firebase";
import { auth } from "../firebase/setup";

export const Login = () => {
  const googleLogin = () => {
    const google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
  }
  return (
    <div>
      <button type="submit" onClick={googleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in with Google</button>
    </div>
  )
}