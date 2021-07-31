import { useState } from "react";
import firebase, { db, auth } from "../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore"
import { ChatMessage } from "./ChatMessage";
import { Redirect } from "react-router-dom";

// TODO: set up pagination
// const [lastMessage, setLastMessage] = useState();
// const initialMessage = async () => {
//   const firstBatch = await getMessages.get();
//   return firstBatch.docs[firstBatch.docs.length-1];
// };
// const showMoreMessages = () => {
//   const lastVisible = 
// }
// TODO: fix any types

// interface Message {
//   message: String;
//   room: String;
//   sentAt: String
//   uid: String;
//   userDisplayName: String;
//   userPhotoUrl: String;
// }
export const ChatRoom = ({ topic }:any) => {
  const messagesRef = db.collection("messages");
  const getMessages = messagesRef.where("room", "==", topic.name).orderBy("sentAt").limit(25);
  const [messages, loading, error] = useCollectionData(getMessages, { idField: 'id' });
  const [messageInput, setMessageInput] = useState("");
  const messageInputHandler = ((e:any) => setMessageInput(e.target.value));
  
  const submitHandler = async (e:any) => {
    e.preventDefault();
    const { uid, displayName, photoURL }:any = auth.currentUser;
    await messagesRef.add({
      message: messageInput,
      room: topic.name,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      userDisplayName: displayName,
      userPhotoUrl: photoURL
    })
    setMessageInput("");
  }
  return (
  <>
    <div className="prompt">Prompt: {topic.prompt}</div>
    <ol>
      {error ? <Redirect to="/" /> : loading ? <h1>Loading messages...</h1> : 
      messages && messages.map(m => <li key={m.id}><ChatMessage  newMessage={m}/></li>)}
    </ol>
    <form onSubmit={submitHandler}>
      <input type="text" name="messageInput" autoComplete="off" value={messageInput} onChange={messageInputHandler}/>
      <button type="submit">Send</button>
    </form>
  </>)
}