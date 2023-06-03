import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { useEffect, useState } from "react";
import { store, switchSearch } from "../store/store";

export function Filters() {
  const [input, setInput] = useState("");
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    if (input.length > 2) {
      setCancel(true);
      store.dispatch(switchSearch(cancel));
    } else {
      setCancel(false);
      store.dispatch(switchSearch(cancel));
    }
  });

  return (
    <div className="categories">
      <Dropdown placeHolder="Категории" />
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        placeholder="Поиск товара"
      ></input>
      {cancel ? (
        <Link
          to={`/search/${input}`}
          state={input}
          style={{ textDecoration: "none" }}
        >
          <button>Поиск</button>
        </Link>
      ) : (
        <Link onClick={(event) => event.preventDefault()}>
          <button>Поиск</button>
        </Link>
      )}
    </div>
  );
}
