import { useState } from "react";
import { Header } from "./Components/Header";
import { Filters } from "./Components/Categories";
import { Slideshow } from "./components/Slideshow";
import { Recommendations } from "./components/recommendations";
import { createBrowserRouter } from "react-router-dom";
import { Detailes } from "./Components/Detailes";
import { Type } from "./Components/goodsType";
import { Search } from "./Components/Search";
import { Basket } from "./components/Basket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:id",
    element: <Type />,
  },
  {
    path: "/detailes/:id",
    element: <Detailes />,
  },
  {
    path: "/search/:id",
    element: <Search />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

function App() {
  return (
    <div className="mainWindow">
      <Header />
      <Filters />
      <Slideshow />
      <Recommendations />
    </div>
  );
}

export default App;
