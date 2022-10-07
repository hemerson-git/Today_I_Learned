import { useEffect, useState } from "react";
import { GoBack } from "../components/GoBack";
import "./styles/useCustomHook.css";

export function UseCustomHookExample() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/hemerson-git"
  );

  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    <div className="userContainer">
      {response && (
        <>
          <img src={response?.avatar_url} alt="" />
          <span className="name">{response?.name}</span>
          <span>{response?.login}</span>

          <GoBack />
        </>
      )}
    </div>
  );
}

function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<JSON | null>(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse(json);
    })();
  }, [url]);

  return [loading, response];
}
