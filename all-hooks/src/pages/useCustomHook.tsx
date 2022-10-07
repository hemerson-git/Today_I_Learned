import { useEffect, useState } from "react";
import { GoBack } from "../components/GoBack";
import "./styles/useCustomHook.css";

interface FetchResponse {
  json: {
    name: string;
    avatar_url: string;
    login: string;
  };

  status: number;
}

export function UseCustomHookExample() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/hemerson-git"
  );

  const { json, status } = response as unknown as FetchResponse;

  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    <div className="userContainer">
      <img src={json?.avatar_url} alt="" />
      <span className="name">{json?.name}</span>
      <span>{json?.login}</span>

      <GoBack />
    </div>
  );
}

function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<{ json: JSON; status: number }>({
    json: JSON.parse("{}"),
    status: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(url);
        const json = await resp.json();

        setResponse({ json, status: resp.status });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return [loading, response];
}
