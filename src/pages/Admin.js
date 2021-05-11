import React, { useContext, useEffect, useState } from "react";
import Download from "@axetroy/react-download";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import { Context } from "..";
import { fetchDevices } from "../http/deviceAPI";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);



  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetchDevices(null, null, null, null)
      .then((data) => setDevices(data));
  }, []);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить товар
      </Button>
      <Download
        style={{
          width: "100%",
        }}
        file="json_db.txt"
        content={JSON.stringify(devices)}
      >
        <Button
          style={{
            width: "100%",
          }}
          className="mt-4 p-2"
          onClick={() => console.log(devices)}
          type="button"
        >
          Экспорт базы данных товаров в JSON формате
        </Button>
      </Download>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
