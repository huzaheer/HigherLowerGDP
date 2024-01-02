import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ACTUAL_GAME from './pages/ActualGame'
import Earth from './components/Earth'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
            <Routes>
              <Route 
              path = "/"
              element={<ACTUAL_GAME />}
              />
              <Route 
              path = "/earth"
              element={<Earth />}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
