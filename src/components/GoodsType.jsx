import { Filters } from "./Categories";
import { Header } from "./Header";

import { Link, useLocation } from "react-router-dom";

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

  return (
    <div className="mainWindow">
      <Header />
      <Filters />
      <div className="category">
        {purchases.map((product) => (
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
