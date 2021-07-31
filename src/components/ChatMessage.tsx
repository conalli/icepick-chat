import { auth } from "../firebase/firebase";

// TODO: fix any type
export const ChatMessage = ({ newMessage }:any) => {
  const { message, uid, userPhotoUrl, userDisplayName } = newMessage;

  const userMessage = auth.currentUser?.uid;
  const messageType = uid === userMessage ? "sent" : "received";
  return (
    <div className={messageType}>
      <p>{userDisplayName}</p>
      <img src={userPhotoUrl} alt={`${userDisplayName} profile`} className="inline object-cover w-12 h-12 mr-2 rounded-full"/>
      <p>{message}</p>
      <p>{`${messageType}`}</p>
    </div>
  )
} 