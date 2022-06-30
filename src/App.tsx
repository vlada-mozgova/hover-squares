import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GamePage } from "./pages/GamePage";
import { useAppDispatch } from "./redux/hooks";
import { setLevels } from "./redux/slices/levelSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://demo7919674.mockable.io/")
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => dispatch(setLevels(data)))
      .catch((err) => console.error("Error of fetching data: ", err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
