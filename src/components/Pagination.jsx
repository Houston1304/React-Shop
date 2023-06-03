import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chengeNumberPage, store } from "../store/store";

export const Pagination = ({ list }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  function pageForward() {
    if (currentPage != Math.ceil(list.length / 10)) {
      setCurrentPage(currentPage + 1);
    }
  }

  function pageBack() {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    dispatch(chengeNumberPage(currentPage));
  }, [currentPage]);

  return (
    <div className="pagination">
      <button onClick={pageBack}>Назад</button>
      <span>
        {currentPage} из {Math.ceil(list.length / 10)}
      </span>
      <button onClick={pageForward}>Вперед</button>
    </div>
  );
};
