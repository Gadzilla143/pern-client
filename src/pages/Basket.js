import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import "../styles/basket.scss";
import BasketItem from "../components/BasketItem";

const Basket = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="basket__container">
      {Object.keys(device.basket).length ? (
        <div className="basket__list">
          {Object.keys(device.basket).map((product) => {
            return <BasketItem key={product} id={product} />;
          })}
          <div className="basket__panel">
            <button
              onClick={() => {
                alert("Заказ оформлен");
                device.clearBasketList();
              }}
            >
              Оформить заказ
            </button>
            <button className="clear" onClick={() => device.clearBasketList()}>
              Очистить корзину
            </button>
          </div>
        </div>
      ) : (
        <h2 style={{ marginTop: "40px" }}>Ваша корзина пуста</h2>
      )}
    </div>
  );
});

export default Basket;
