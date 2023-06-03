import { Header } from "./Header";
import { Filters } from "./Categories";
import { useLocation } from "react-router-dom";
import { products } from "./goodsType";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBasket, saveBasket } from "../storage/storage";

export const Detailes = () => {
  const location = useLocation();
  const [basket, setBasket] = useState(getBasket() || []);

  const product = products.find((product) => product.title == location.state);

  const toBasket = () => {
    setBasket([
      ...basket,
      {
        title: product.title,
        price: product.price,
        img: product.img,
      },
    ]);
  };

  useEffect(() => {
    saveBasket(basket);
  });

  return (
    <div className="mainWindow">
      <Header />
      <Filters />
      <div className="product">
        <div className="preview">
          <span>{product.title}</span>
          <img src={product.img}></img>
        </div>
        <div className="mainInfo">
          <span className="price">{product.price} Р.</span>
          <button onClick={toBasket}>В корзину</button>
        </div>
      </div>
    </div>
  );
};
