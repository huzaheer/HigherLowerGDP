import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './pages/Game'
import ACTUAL_GAME from './pages/ActualGame'


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
              <Route 
              path = "/game"
              element={<ACTUAL_GAME />}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
