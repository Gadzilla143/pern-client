import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import { Context } from "..";

const DevicePage = () => {
  const [product, setProduct] = useState({ info: [] });
  const { user, device } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setProduct(data));
  }, []);

  const addToBasket = () => {
    device.addToBasketList(id);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + product.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{product.name}</h2>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {product.price} $</h3>

            {user.role === "USER" && (
              <Button onClick={addToBasket} variant={"outline-dark"}>
                Добавить в корзину
              </Button>
            )}
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {product.info.length ? <h1>Характеристики</h1> : ''}
        {product.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
