import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Singleread from "./components/Singleread";
import Notfound from "./components/Notfound";
import Header from "./components/Header";
import SearchHeader from "./searchComponentHeader/SearchHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read/:id" element={<Singleread />} />
          <Route path="*" element={<Notfound />} />
          <Route path='/search/*' element={<SearchHeader />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
