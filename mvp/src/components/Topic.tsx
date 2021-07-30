import React, { useState } from "react"

interface Subject {
  topic: String;
  prompt: String;
}

export const Topic = () => {
  const topicList = [
    {topic: "Movies", prompt: "What was the last movie you saw?"},
    {topic: "Games", prompt: "Have you played any good video games recently?"}
  ]
  const [topics, setTopics] = useState(topicList);
  const removeTopic = () => {
    setTopics((topics) => {
      const current = topics.slice(1);
      if (current.length === 0) return [];
      return current;
  });
  }
  
  return (
    <section>
      {topics.length === 0 ? <h1>No topics left!</h1> : <h1>Let's talk about {topics[0].topic}!</h1>}
      {topics && <button className="bg-green-500 hover:bg-green-400 text-gray-100 font-semibold py-2 px-4 border border-green-600 rounded shadow">I'd love to!</button>}
      {topics && <button onClick={removeTopic} className="bg-red-500 hover:bg-red-600 text-gray-100 font-semibold py-2 px-4 border border-red-600 rounded shadow">No way!</button>}
    </section>
  )
}