import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <h1>Магазичик</h1>
      </Link>
      <span>Главная</span>
      <p>
        <a href="magazinchik@mail.ru">Связаться с нами</a>
      </p>
      <button>
        <Link
          to={`/basket`}
          style={{ textDecoration: "none", color: `rgb(255, 255, 255, 0.781)` }}
        >
          Корзина
        </Link>
      </button>
    </div>
  );
}
