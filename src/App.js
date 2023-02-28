// import Info from "./components/Home/home";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Info from "./components/Info/Info";
import ReviewCard from "./components/Review/ReviewCard";
import Toolkit from "./components/Toolkit/Toolkit";

function App() {
  return (
    <div className="App">
     <Header />
     {/* <Info /> */}
     <Info />
    <Skills />
    <Toolkit />
    <ReviewCard />
    </div>
  );
}

export default App;
