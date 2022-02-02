import React from "react";
import { testGenerator } from "../../common/generator/testGenerator";
import Render from "../../components/Render";

function App() {
  return (
    <div className="App">
      <Render config={testGenerator} />
    </div>
  );
}

export default App;
