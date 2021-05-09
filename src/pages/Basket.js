import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import "../styles/basket.scss";
import BasketItem from "../components/BasketItem";
import CreateOrder from "../components/modals/CreateOrder";

const Basket = observer(() => {
  const { device } = useContext(Context);
  const [deviceVisible, setDeviceVisible] = useState(false);

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
                setDeviceVisible(true)
                // device.clearBasketList();
              }}
            >
              Оформить заказ
            </button>

            <button className="clear" onClick={() => device.clearBasketList()}>
              Очистить корзину
            </button>
          </div>
          <CreateOrder
            show={deviceVisible}
            onHide={() => setDeviceVisible(false)}
          />
        </div>
      ) : (
        <h2 style={{ marginTop: "40px" }}>Ваша корзина пуста</h2>
      )}
    </div>
  );
});

export default Basket;
