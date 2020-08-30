import CustomButton from "../CustomButton";
import { Row, Col } from "antd";

export default function CardAddress({
  phone,
  email,
  address,
  title,
  btnSelect,
}) {
  const imgPhone = "images/phone.jpg";
  const imgEmail = "images/email.jpg";
  const imgAddress = "images/address.jpg";

  return (
    <div className="card-address-container">
      <div className="card-address-header">
        <h3>{title}</h3>
      </div>
      <div className="card-address-body">
        <Row className="contact-information">
          <Col span={4}>
            <img src={imgPhone} width="20" height="20" />
          </Col>
          <Col span={4}>{phone}</Col>
        </Row>
        <Row className="contact-information">
          <Col>
            <img src={imgEmail} width="20" height="20" />
          </Col>
          <Col>{email}</Col>
        </Row>
        <Row className="contact-information">
          <Col>
            <img src={imgAddress} width="15" height="20" />
          </Col>
          <Col>{address}</Col>
        </Row>

        <div className="card-button-container">
          {btnSelect ? (
            <CustomButton btnStyle="btn-green">Seleccionar</CustomButton>
          ) : null}
          <CustomButton btnStyle="btn-green">Editar</CustomButton>
        </div>
      </div>
    </div>
  );
}

{
  /* <CardAddress
  phone="9999999999"
  email="email@gmail.com"
  address="Tlaxiaco, Oaxaca"
  title="Contacto"
  btnSelect={false}
/>; */
}
