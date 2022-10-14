import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AxiosHeader from "./App/Utility/AxiosHeader";
import Home from "./Pages/Home";

function App() {
useEffect(() => { AxiosHeader(); }, [])
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
    </Routes>
  );
}

export default App;
