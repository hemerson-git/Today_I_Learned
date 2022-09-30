import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

// Creating Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
`;

// Variables in css
const fontSize = 30;

const Title = styled.h3`
  font-size: ${fontSize}px;

  a {
    color: ${({ theme }) => {
      return theme.colors.primary
    }};

    text-decoration: none;

    &:hover {
      color: #778;
    }
  }
`;

const PostCardWrapper = styled.article`
  border: 1px solid orange;
  padding: 15px;
`;

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <PostCardWrapper>
        <Title>
          <a href="#">Hello World</a>
        </Title>
        <small>Feb 7, 2022 - 1 min read</small>
        <p>Come waste your time with me</p>
      </PostCardWrapper>
    </main>
  );
}
