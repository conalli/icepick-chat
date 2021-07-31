// import { useState, useMemo } from "react";
import { db } from "../firebase/firebase";
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
// TODO: fix any type
export const ChatRoom = ({ topic }:any) => {
  const messagesRef = db.collection("messages");
  const getMessages = messagesRef.where("room", "==", topic).orderBy("sentAt").limit(25);
  
  const [messages, loading, error] = useCollectionData(getMessages, { idField: 'id' });
  if (error) console.error(error);
  console.log(messages);
  return (
  <>
    {error ? <Redirect to="/" /> : loading ? <h1>Loading messages...</h1> : 
    messages && messages.map(m => <ChatMessage key={m.id} newMessage={m}/>)}
  </>)
}