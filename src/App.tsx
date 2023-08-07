import BG from "./Element/BG";
import Cards from "./Element/Cards";
import Main from "./Element/Main";
import Thanks from "./Element/Thanks";
import useCardState from "./store";

const App = () => {
  const scene = useCardState((s) => s.scene);

  return (
    <main className="h-screen w-screen flex">
      <BG />

      {scene === 1 ? <Main /> : <Thanks />}
      <Cards />
    </main>
  );
};

export default App;
