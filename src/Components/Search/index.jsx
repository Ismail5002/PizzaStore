import React, { useState } from "react";
import styles from "./search.module.scss";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import { category } from "../../features/categories/categoriesSlice";
import { keyboards } from "../../assets/IMAGE/helper/keyboard";

const Search = ({ searchValue, setSearchValue, count, setCount }) => {
  const { setFilterValue, filterValue } = useContext(AppContext);

  const deleteCode = "Backspace";

  const mainKey = keyboards.map((i) => i);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 96 96"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z" />
      </svg>
      <input
        value={searchValue}
        onKeyDown={(e) => {
          if (count < 0) return;
          if (mainKey.includes(e.code) & (e.code !== deleteCode)) {
            setCount((prev) => {
              return prev + 1;
            });
          }
          if (count === 0) return;
          if (e.code === deleteCode) {
            setCount((prev) => {
              return prev - 1;
            });
            setFilterValue((prev) => {
              return prev.pop();
            });
          }
          return;
        }}
        onChange={(e) => {
          // if (!e.target.value) {
          //   setFilterValue("");
          // }
          setSearchValue(e.target.value);
          setFilterValue((prev) => {
            return [e.target.value, ...prev];
          });
        }}
        className={styles.input}
        placeholder="Look for pizza"
        type="text"
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
