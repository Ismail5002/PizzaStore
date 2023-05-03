import React, { useContext } from "react";
import { AppContext } from "../../App";

export function Categories({ setFilter, setFilterIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
    "Сырные",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              className={activeIndex === index ? "active" : ""}
              key={index}
              onClick={(title) => {
                onClickCategory(index, title);
                const activeItem = title.target.innerText;

                setFilter(activeItem);
                setFilterIndex(index);
              }}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
