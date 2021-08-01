import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { db } from "../firebase/firebase";
// import { useCollectionData } from "react-firebase-hooks/firestore"
// TODO: add types to components
// interface Topic {
//   name: String;
//   prompt: String;
// }
// TODO: use redux store
export const topicList = [
  { name: "Movies", prompt: "What was the last movie you saw?" },
  { name: "Games", prompt: "Have you played any good video games recently?" },
];

export const TopicOption = ({ topics }: any) => {
  // const topicsRef = db.collection("topics");
  // const getTopics = topicsRef.orderBy("name").limit(25);
  // const [dbTopics, loading, error] = useCollectionData(getTopics, { idField: 'id' });
  // const [topics, setTopics] = useState(dbTopics);
  // const topics = dbTopics;
  const [currentTopicIdx, setCurrentTopicIdx] = useState(0);
  const history = useHistory();

  // const removeTopic = () => {
  //   setTopics((topics) => {
  //     const current = dbTopics;
  //     if (current.length === 0) return [];
  //     return current;
  //   });
  // };
  const nextTopic = () => {
    setCurrentTopicIdx((current) => {
      return current++;
    });
  };

  const goToChat = () => {
    topics
      ? history.push(`/icebreaker/${topics[currentTopicIdx].name}`)
      : history.push("/");
  };

  return (
    <section>
      {/* {error && <h1>There was an error</h1>} */}
      {/* {loading && <h1>Loading...</h1>} */}
      {topicList && currentTopicIdx >= topicList.length - 1 ? (
        <h1 className="text-4xl py-10">No topics left!</h1>
      ) : (
        <h1 className="text-4xl pt-52 pb-52">
          Let's talk about {topics && topicList[currentTopicIdx].name}!
        </h1>
      )}
      {topicList && (
        <button
          onClick={nextTopic}
          className="bg-ip-darkgrey text-gray-100 font-semibold py-2 px-4 border border-white rounded shadow"
        >
          No way!
        </button>
      )}
      {topicList && (
        <button
          onClick={goToChat}
          className="bg-ip-secondary text-gray-100 font-semibold py-2 px-4 border border-white rounded shadow"
        >
          I'd love to!
        </button>
      )}
    </section>
  );
};
