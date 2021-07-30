import firebase from "firebase";
import { auth } from "../firebase/firebase";

export const Login = () => {
  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // TODO: decide which sign in style to use
    // TODO: handle errors https://firebase.google.com/docs/auth/web/google-signin
    // auth.signInWithRedirect(provider);
    //   await auth.getRedirectResult()
    try {
      await auth.signInWithPopup(provider);
    } catch(err) {
      console.error(err);
    }
  }
  return (
    <div>
      <button type="submit" onClick={googleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in with Google</button>
    </div>
  )
}