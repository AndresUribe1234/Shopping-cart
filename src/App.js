import React from "react";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Items />
      </main>
    </React.Fragment>
  );
}

export default App;
