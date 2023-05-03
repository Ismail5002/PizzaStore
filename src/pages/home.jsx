import React from "react";
import { Skeleton } from "../Helper/MySkeleton";
import Pizzas from "../Components/Pizzas/Pizzas";

export function Home({
  isLoading,
  items,
  filter,
  filterIndex,
  filterValue,
  searchValue,
  setCount,
  count,
  itemsPerPage,
}) {
  return (
    <div className="container">
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : (
          <Pizzas
            count={count}
            setCount={setCount}
            searchValue={searchValue}
            filterValue={filterValue}
            filter={filter}
            items={items}
            filterIndex={filterIndex}
          />
        )}
      </div>
    </div>
  );
}
