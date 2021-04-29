import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import Image from "react-bootstrap/Image";
import { fetchOneDevice } from "../http/deviceAPI";
import "../styles/basket.scss";

const BasketItem = observer(({ id }) => {
  const [product, setProduct] = useState({});
  const { device } = useContext(Context);

  useEffect(() => {
    fetchOneDevice(id).then((data) => setProduct(data));
  }, []);

  return (
    <div className="basket__item">
      <div>
        <Image
          style={{
            borderRadius: "5px",
            marginRight: "30px",
          }}
          width={100}
          height={100}
          src={process.env.REACT_APP_API_URL + product.img}
        />
        {product.name}
      </div>{" "}
      <div className="basket__counter-panel">
        <div onClick={() => device.addToBasketList(id)} className="basket__btn">+</div>
        <div className="basket__btn counter">{device.basket[id]}</div>
        <div onClick={() => device.deleteOneFromBasketList(id)} className="basket__btn">-</div>
        <div onClick={() => device.deleteFromBasketList(id)} className="basket__btn delete">&times;</div>
      </div>
    </div>
  );
});

export default BasketItem;
