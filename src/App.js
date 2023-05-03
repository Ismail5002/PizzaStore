import React, { createContext, useState } from "react";
import {
  arrow_top,
  cart_svg,
  empty_cart,
  grey_arrow_left,
  plus,
  trash,
} from "./assets/IMAGE/ImportImages/images";
import { Sort, Categories, Header } from "./Components/index";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import Cart from "./pages/cart";
import Pagination from './Components/Pagination/index';


export const AppContext = createContext()



function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filter, setFilter] = React.useState("Все");
  const [filterIndex, setFilterIndex] = React.useState(0);
  const [filterValue, setFilterValue] = React.useState([""]);
  const [searchValue, setSearchValue] = React.useState("")
  const [count, setCount] = useState(0);
  const search = searchValue ? `search=${searchValue}` : ""
  const [selectedPage, setSelectedPage] = useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://run.mocky.io/v3/26f58125-cdfb-4eb6-b8db-067d251f4b80")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [filterIndex, searchValue]);

  const calculatePages = (count) => {
    const onePage = Math.ceil(items.length / count)
    let arrOfPage = []
    for (let i = 1; i <= onePage; i++) {
      arrOfPage.push(i)
    }
    return arrOfPage
  }


  return (
    <div className="wrapper">
      <AppContext.Provider value={{ filterValue, setFilterValue }}>

        <Header count={count} setCount={setCount} searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <div className="content__top">
            <Categories setFilterIndex={setFilterIndex} setFilter={setFilter} />
            <Sort
              setItems={setItems}
              items={items}
              setFilterValue={setFilterValue}
            />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Home searchValue={searchValue}
                  count={count}
                  setCount={setCount}
                  filter={filter}
                  filterIndex={filterIndex}
                  items={items}
                  isLoading={isLoading}
                  filterValue={filterValue}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Pagination calculatePages={calculatePages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
