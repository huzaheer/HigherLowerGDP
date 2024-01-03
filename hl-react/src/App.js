import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ACTUAL_GAME from './components/ActualGame'
import Earth from './components/Earth'
import Frame from './components/test'
import GDPComparison from './components/test_final'


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
              element={<Frame />}
              />
              <Route
              path = "/homer"
              element={<GDPComparison />}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
