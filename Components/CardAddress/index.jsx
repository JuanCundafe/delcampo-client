import { Row, Col, Space, Button } from "antd";
import Link from "next/link";

export default function CardAddress({
  address,
  title,
  btnSelect,
  id,
  callback,
}) {
  // const imgPhone = "/images/phone.jpg";
  // const imgEmail = "/images/email.jpg";
  const imgAddress = "/images/address.jpg";

  const handlerClick = (id) => {
    callback(id);
  };

  return (
    <div className="card-address-container">
      <div className="card-address-header">
        <h3>{title}</h3>
      </div>
      <div className="card-address-body">
        {/* <Row className="contact-information-phone">
          <Col span={4}>
            <img src={imgPhone} width="20" height="20" />
          </Col>
          <Col span={4}>{phone}</Col>
        </Row>
        <Row className="contact-information-mail">
          <Col span={4}>
            <img src={imgEmail} width="20" height="20" />
          </Col>
          <Col span={4}>{email}</Col>
        </Row> */}
        <div className="space-align-block">
          <Space align="start" className="contact-information-address">
            <Row align="top" className="contact-information-address">
              <Col
                className="contact-information-address-col1"
                span={4}
                offset={1}
              >
                <img src={imgAddress} width="15" height="20" />
              </Col>
              <Col span={13} className="Cardaddres-text-info">
                {address}
              </Col>
            </Row>
          </Space>
        </div>
        <div className="card-button-container">
          <Button className="btn-green" onClick={() => handlerClick(id)}>
            Seleccionar
          </Button>
          <div className="shipping-space-btn"></div>
          <Link href="/address/[id]" as={`/address/${id}`}>
            <a>
              <Button className="btn-green">Editar</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
