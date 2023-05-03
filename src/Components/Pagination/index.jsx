import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ selectedPage, setSelectedPage, calculatePages }) => {
  //
  const changeOfPage = (e) => {
    if (selectedPage === 0) {
      setSelectedPage(1);
    }

    const value = e.target.innerText;
    if (
      calculatePages(4).length >= selectedPage &&
      value === "<" &&
      selectedPage !== 1
    ) {
      setSelectedPage((prev) => {
        return selectedPage - 1;
      });
    }

    if (calculatePages(4).length !== selectedPage && value === ">") {
      setSelectedPage((prev) => {
        return prev + 1;
      });
    }

    // if (calculatePages(4) > selectedPage && value === "<") {
    //   setSelectedPage((prev) => {
    //     return prev - 1;
    //   });
    // }
    // if (selectedPage < calculatePages(4)) {
    // }
  };

  console.log(selectedPage, "selected page");
  console.log(calculatePages(4).length, "calc");

  return (
    // <ReactPaginate
    //   className={styles.root}
    //   breakLabel="..."
    //   previousLabel="< "
    //   nextLabel=" >"
    //   onPageChange={(e) => console.log(e)}
    //   pageRangeDisplayed={4}
    //   pageCount={3}
    //   renderOnZeroPageCount={null}
    // />
    <>
      <div className={styles.root}>
        <div onClick={changeOfPage} className={styles.paginate}>{`<`}</div>
        {calculatePages(4).map((i) => {
          return (
            <div className={i === selectedPage ? styles.active : ""} key={i}>
              {i}
            </div>
          );
        })}
        <div onClick={changeOfPage} className={styles.paginate}>{`>`}</div>
      </div>
    </>
  );
};

export default Pagination;
