interface ITweet {
  title: string;
}

export function Tweet(props: ITweet) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}
