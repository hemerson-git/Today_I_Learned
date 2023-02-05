import { View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Description, Post, PostImage, PostTitle } from "./styles";

const posts = [
  {
    id: 1,
    title: "Hello, World!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 2,
    title: "Hello, World 2!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 3,
    title: "Hello, World 3!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 4,
    title: "Hello, World 4!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 5,
    title: "Hello, World 5!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 6,
    title: "Hello, World 6!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 7,
    title: "Hello, World 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 8,
    title: "Hello, World 8!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 9,
    title: "Hello, World 9!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 10,
    title: "Hello, World 10!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores" +
      "ullam, laboriosam placeat excepturi sed rem suscipit unde iste?" +
      "Error culpa veniam magni omnis doloremque atque sunt dolores" +
      "deserunt tempora molestiae.",
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
];

export function Posts() {
  return (
    <Container
      contentContainerStyle={{ paddingTop: 70, paddingBottom: 20 }}
      pagingEnabled
    >
      <Header />

      {posts.map((post) => (
        <Post key={post.id}>
          <PostImage source={{ uri: post.imageUrl }} />

          <View>
            <PostTitle>{post.title}</PostTitle>

            <Description>{post.description}</Description>
          </View>
        </Post>
      ))}
    </Container>
  );
}
