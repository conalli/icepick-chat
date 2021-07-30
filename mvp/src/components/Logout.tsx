import { auth } from "../firebase/firebase";

export const Logout = () => {
  return auth.currentUser && (
    <div>
      <button type="submit" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}