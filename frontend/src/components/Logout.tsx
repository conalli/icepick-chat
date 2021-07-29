import { auth } from "../firebase/setup";

export const Logout = () => {
  return auth.currentUser && (
    <div>
      <button type="submit" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}