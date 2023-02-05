import { StatusBar } from "expo-status-bar";
import { Post } from "./src/screens/Post";

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Post />
    </>
  );
}
