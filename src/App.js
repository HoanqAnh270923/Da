import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import { ViewProvider } from "./context/viewContext/viewContext";

// import "./App.css";

function App() {
  return (
    <Router>
      <ViewProvider>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </ViewProvider>
    </Router>
  );
}

export default App;
