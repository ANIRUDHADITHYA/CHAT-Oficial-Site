import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";


function App() {

  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route exact path="/" element={<HomePage/>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;