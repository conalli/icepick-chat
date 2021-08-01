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
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button
        onClick={googleLogin}
        className="bg-ip-secondary text-white font-bold py-2 px-4 rounded"
      >
        Log in with Google
      </button>
    </div>
  );
};
