import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { publicRoutes } from "./routes";
import { ViewProvider } from "./context/viewContext/viewContext";

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <ViewProvider>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Routes>
          </div>
        </ViewProvider>
      </DndProvider>
    </Router>
  );
}

export default App;
