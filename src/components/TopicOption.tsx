import { useState } from "react"
import { useHistory } from "react-router-dom";
// TODO: add types to components
// interface Topic {
//   name: String;
//   prompt: String;
// }
// TODO: use redux store
export const topicList = [
  {name: "Movies", prompt: "What was the last movie you saw?"},
  {name: "Games", prompt: "Have you played any good video games recently?"}
]

export const TopicOption = () => {
  const [topics, setTopics] = useState(topicList);
  const history = useHistory();

  const removeTopic = () => {
    setTopics((topics) => {
      const current = topics.slice(1);
      if (current.length === 0) return [];
      return current;
    });
  };

  const goToChat = () => {
    history.push(`/icebreaker/${topics[0].name}`)
  }
  
  return (
    <section>
      {topics.length === 0 ? <h1>No topics left!</h1> : <h1>Let's talk about {topics[0].name}!</h1>}
      {topics && <button onClick={goToChat} className="bg-green-500 hover:bg-green-400 text-gray-100 font-semibold py-2 px-4 border border-green-600 rounded shadow">I'd love to!</button>}
      {topics && <button onClick={removeTopic} className="bg-red-500 hover:bg-red-600 text-gray-100 font-semibold py-2 px-4 border border-red-600 rounded shadow">No way!</button>}
    </section>
  )
}