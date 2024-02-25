import Hero from "./components/content/Hero";
import HeroThree from "./components/content/HeroThree";
import HeroTwo from "./components/content/HeroTwo";
import Header from "./components/headers/Header";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-900 to-indigo-500">
        <Header />
        <Hero />
        <HeroTwo />
        <HeroThree />
      </div>
    </>
  );
}

export default App;
