import React, { useState } from "react";
import { PizzaBlock } from "../Content/PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";

const Pizzas = ({
  items,
  filter,
  filterIndex,
  filterValue,
  searchValue,
  count,
}) => {
  const filterByName_1 = (item) => {
    if (filterValue[0] === "") return item;
    return item.filter(
      (i) =>
        i.title.charAt(count - 1).toUpperCase() === filterValue[0].toUpperCase()
    );
  };

  const filterByName = (items) => {
    return items.filter((item) => {
      if (filterValue[0] === "") return item;
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    });
  };

  return (
    <>
      {filter === "Все"
        ? filterByName_1(items).map((obj, id) => (
            <PizzaBlock key={id} {...obj} />
          ))
        : filterByName(items)
            .filter((i) => {
              return i.rating;
            })
            .filter((i) => i.category + 1 === filterIndex)
            .map((obj, id) => {
              return <PizzaBlock key={id} {...obj} />;
            })}
    </>
  );
};

export default Pizzas;
