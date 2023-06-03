import { Link } from "react-router-dom";

export const goods = [
  {
    value: "TV-123",
    category: "Разгрузочная система",
    title: "ПОЯС РАЗГРУЗОЧНЫЙ ВЕКТОР-М TV-123",
    img: "src/assets/TV123.PNG",
    price: "4100",
  },
  {
    value: "IDOGEAR Tactical Fanny Pack",
    category: "Рюкзаки и сумки",
    title: "ПОЯСНАЯ СУМКА IDOGEAR Tactical Fanny Pack",
    img: "src/assets/IdogearPack.PNG",
    price: "1200",
  },
  {
    value: "UP-101",
    category: "Подсумки",
    title: "ПОДСУМОК АДМИНИСТРАТИВНЫЙ UP-101",
    img: "src/assets/UP-101.PNG",
    price: "2450",
  },
  {
    value: "Shaman",
    category: "Подсумки",
    title: 'АПТЕЧКА "Шаман"',
    img: "src/assets/ShamanMed.PNG",
    price: "9000",
  },
];

export const Recommendations = () => {
  return (
    <div className="recommendations">
      {goods.map((good) => (
        <Link
          to={`/detailes/${good.title}`}
          state={good.title}
          style={{ textDecoration: "none" }}
          key={good.title}
        >
          <div key={good.value} id="recommendation-item">
            <img src={good.img}></img>
            <span>{good.title}</span>
            <span>{good.price} Р.</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
