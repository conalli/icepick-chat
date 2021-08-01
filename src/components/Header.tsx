import { auth } from "../firebase/firebase";
import { Logout } from './Logout';
export const Header = () => {
  return (
    <header className="grid grid-cols-2 mx-auto p-12 items-center">
      <h1 className="self-start font-sans text-4xl col-span-1 place-self-start">
        <span className="logo-ice text-white">Ice</span>
        <span className="logo-pick text-ip-primary">pick</span>
        <span className="logo-period text-ip-secondary">.</span>
      </h1>
      {auth.currentUser && <Logout />}
    </header>
  )
}