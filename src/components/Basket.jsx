import { Header } from "./Header";
import { Filters } from "./Categories";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBasket, saveBasket } from "../storage/storage";
import { useEffect, useState } from "react";

export const Basket = () => {
  const [basketProduct, setBasket] = useState(getBasket() || []);

  function deletePurchase(index) {
    saveBasket([
      ...basketProduct.slice(0, index),
      ...basketProduct.slice(index + 1),
    ]);

    setBasket([
      ...basketProduct.slice(0, index),
      ...basketProduct.slice(index + 1),
    ]);
  }

  return (
    <div className="mainWindow">
      <Header />
      <Filters />
      <div className="basket">
        <h1>Корзина</h1>
        <div className="purchase">
          {basketProduct.map((product, index) => (
            <div key={index} id="purchase-item">
              <Link
                to={`/detailes/${product.title}`}
                state={product.title}
                style={{ textDecoration: "none" }}
                key={product.title}
              >
                <div id="purchasePreview">
                  <img src={product.img}></img> <span>{product.title}</span>
                </div>
              </Link>
              <button onClick={() => deletePurchase(index)}>Удалить</button>
              <div id="purchasePrice">
                <span>{product.price} Р.</span>
              </div>
            </div>
          ))}
        </div>
        <p>
          Сумма:
          {basketProduct.reduce(
            (accum, item) => Number(accum) + Number(item.price),
            0
          )}
        </p>
        <button>Оформить заказ</button>
      </div>
    </div>
  );
};
