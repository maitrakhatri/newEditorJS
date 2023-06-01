import "./App.css";
import { Route, Routes } from "react-router-dom";
import Editor from "./Editor";
import Website from "./Website";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/website" element={<Website />} />
      </Routes>
    </div>
  );
}

export default App;
