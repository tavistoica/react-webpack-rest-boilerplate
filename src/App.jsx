import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Main from "./pages/Main";
import Author from "./pages/Author";
import Header from "./components/organisms/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
