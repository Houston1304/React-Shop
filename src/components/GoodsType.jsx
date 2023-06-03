import { Filters } from "./Categories";
import { Header } from "./Header";

import { Link, useLocation } from "react-router-dom";
import { Pagination } from "./Pagination";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const products = [
  {
    value: "TV-123",
    category: "Разгрузочная система",
    title: "ПОЯС РАЗГРУЗОЧНЫЙ ВЕКТОР-М TV-123",
    img: "../src/assets/TV123.PNG",
    price: "4100",
  },
  {
    value: "IDOGEAR Tactical Fanny Pack",
    category: "Рюкзаки и сумки",
    title: "ПОЯСНАЯ СУМКА IDOGEAR Tactical Fanny Pack",
    img: "../src/assets/IdogearPack.PNG",
    price: "1200",
  },
  {
    value: "UP-101",
    category: "Подсумки",
    title: "ПОДСУМОК АДМИНИСТРАТИВНЫЙ UP-101",
    img: "../src/assets/UP-101.PNG",
    price: "2450",
  },

  {
    value: "Shaman",
    category: "Подсумки",
    title: 'АПТЕЧКА "Шаман"',
    img: "../src/assets/ShamanMed.PNG",
    price: "9000",
  },
  {
    value: "TV-124",
    category: "Разгрузочная система",
    title: "ЧЕХОЛ ПОД БРОНЕЖИЛЕТ TV-124",
    img: "../src/assets/TV-124.PNG",
    price: "12000",
  },
];

export const Type = () => {
  const location = useLocation();

  const purchases = products.filter((item) => item.category == location.state);

  const page = useSelector((state) => state.pageSwitch.currentPage);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  console.log(purchases);

  const purchasesList = purchases.slice(min, max);

  useEffect(() => {
    setMin(page * 10 - 10);
    setMax(page * 10);

    console.log(min);
    console.log(max);
  });

  console.log(purchasesList);

  return (
    <div className="mainWindow">
      <Header />
      <Filters />
      <div className="category">
        <div className="categoryList">
          {purchasesList.map((product, index) => (
            <Link
              to={`/detailes/${product.title}`}
              state={product.title}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div key={product.value} id="recommendation-item">
                <img src={product.img}></img> <span>{product.title}</span>
                <span>{product.price} Р.</span>
              </div>
            </Link>
          ))}
        </div>
        <Pagination list={purchases} />
      </div>
    </div>
  );
};
