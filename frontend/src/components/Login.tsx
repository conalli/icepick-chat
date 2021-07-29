import firebase from "firebase";
import { auth } from "../firebase/setup";

export const Login = () => {
  const googleLogin = () => {
    const google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
  }
  return (
    <div>
      <button type="submit" onClick={googleLogin}>Sign in with Google</button>
    </div>
  )
}