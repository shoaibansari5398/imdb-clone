import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
// import Pagination from "./Components/Pagination";
import Favourites from "./Components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> <Content />
              </>
            }
          />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
