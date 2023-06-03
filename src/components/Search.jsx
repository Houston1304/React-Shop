import { Filters } from "./Categories";
import { Header } from "./Header";
import { products } from "./GoodsType";
import { Link, useLocation } from "react-router-dom";
import { store, switchSearch } from "../store/store";

function trimString(s) {
  var l = 0,
    r = s.length - 1;
  while (l < s.length && s[l] == " ") l++;
  while (r > l && s[r] == " ") r -= 1;
  return s.substring(l, r + 1);
}

function compareObjects(o1, o2) {
  var k = "";
  for (k in o1) if (o1[k] != o2[k]) return false;
  for (k in o2) if (o1[k] != o2[k]) return false;
  return true;
}

function itemExists(haystack, needle) {
  for (var i = 0; i < haystack.length; i++)
    if (compareObjects(haystack[i], needle)) return true;
  return false;
}

export const Search = () => {
  console.log(store.getState());

  const location = useLocation();

  const results = [];

  function searchFor(toSearch) {
    toSearch = trimString(toSearch).toLowerCase();

    for (var i = 0; i < products.length; i++) {
      for (var key in products[i]) {
        if (products[i][key].toLowerCase().indexOf(toSearch) != -1) {
          if (!itemExists(results, products[i])) results.push(products[i]);
        }
      }
    }
    return results;
  }

  searchFor(location.state);

  return (
    <div className="mainWindow">
      <Header />
      <Filters />
      <div className="category">
        {results.map((product) => (
          <Link
            to={`/detailes/${product.title}`}
            state={product.title}
            style={{ textDecoration: "none" }}
            key={product.title}
          >
            <div key={product.value} id="recommendation-item">
              <img src={product.img}></img> <span>{product.title}</span>
              <span>{product.price} Р.</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
