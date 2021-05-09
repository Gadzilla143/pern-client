import React, { useContext, useState } from "react";

import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../..";

const CreateOrder = ({ show, onHide }) => {
  const { device } = useContext(Context);

  const onRegOrder = () => {
    onHide();
    device.clearBasketList();
    alert(`Заказ оформлен, номер заказа №${new Date().getTime()} `);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Оформление заказа</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Способ получения</Form.Label>
          <Form.Control as="select">
            <option>Доставка</option>
            <option>Самовывоз</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Дата получения</Form.Label>
        </Form.Group>
        <input type="date" />
        <Form.Control
          className="mt-3"
          placeholder="Комментарий к заказу"
          as="textarea"
          rows={3}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={onRegOrder}>
          Оформить заказ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateOrder;
