import "./App.css";

import Header from "./pages/Header";
import FirstSlide from "./pages/FirstSlide";
import Whatis from "./pages/WhatIs";
import Roadmap from "./pages/Roadmap";
import Tokenomics from "./pages/Tokenomics";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <>
      <div className="headerClass">
        <Header />

        <FirstSlide />
      </div>
      <Whatis />
      <Roadmap />
      <Tokenomics />
      <OurTeam />
    </>
  );
}

export default App;
