import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ACTUAL_GAME from './components/ActualGame'
import Earth from './components/Earth'
import GDPComparison from './components/test'


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
              <Route 
              path = "/home"
              element={<GDPComparison />}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
