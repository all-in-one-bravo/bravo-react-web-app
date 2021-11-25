import React from "react";
import Logo from "../components/content/Logo";
import Message from "../components/content/Message";

import NavBar from "../components/navigation/NavBar";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Logo />
        <Message />
      </header>
    </div>
  );
}

export default Home;
