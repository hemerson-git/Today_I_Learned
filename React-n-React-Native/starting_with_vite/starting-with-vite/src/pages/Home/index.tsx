import { useState } from "react";

import { Tweet } from "../../components/Tweet";

export function Home() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
  ]);

  function createTweet() {
    const newTweet = "Tweet 5";
    setTweets([...tweets, newTweet]);
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet title={tweet} />
      ))}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#8257e6",
          padding: "6px 12px",
          color: "white",
          border: 0,
          cursor: "pointer",
        }}
      >
        Adicionar Tweet
      </button>
    </div>
  );
}
