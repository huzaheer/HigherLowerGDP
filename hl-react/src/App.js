import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
            <Routes>
              <Route 
              path = "/"
              element={<Game />}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
