import { auth } from "../firebase/firebase";

// TODO: fix any type
export const ChatMessage = ({ newMessage }:any) => {
  const { message, uid, userPhotoUrl, userDisplayName } = newMessage;

  const userMessage = auth.currentUser?.uid;
  const messageType = uid === userMessage ? "sent" : "received";
  return (
    <div className={`${messageType} flex-row`}>
      <h4 className="order-1 text-ip-primary">{userDisplayName}</h4>
      <img src={userPhotoUrl} alt={`${userDisplayName} profile`} className="inline object-cover w-12 h-12 mr-2 rounded-full order-2"/>
      <div className="h-0.5"></div>
      <p className="order-3"><p className="order-4 text-ip-secondary">{`${messageType}`}</p>{message}</p>
      
    </div>
  )
} 