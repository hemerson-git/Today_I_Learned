import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div>
      <Title size={20}>
        Hello World
        <span>Texto menor</span>
      </Title>

      <TitleSmall>
        Menor
      </TitleSmall>
    </div>
  );
}

export default App;
