import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar';
import MenuFooter from '../../Components/MenuFooter';
import CardAddress from '../../Components/CardAddress';
import CustomButton from '../../Components/CustomButton';
import { Row, Col, Divider } from 'antd';

const data = {
  address: 'tecaltitla',
  phone: '7777',
  email: 'viz@kodemia'
}

export default function Shipping () {
  const [ejemplo, setEjemplo] = useState(data)
  // const handleUsedate = setEjemplo

  return (
    <>
      <NavBar />
      <Divider orientation='center'>
        <Row>
          <Col>
            <Row>
              <Col span={24} xl={24} sm={12}>
                <h2>2.Dirección de envio</h2>
              </Col>
            </Row>
            <Row justify='left'>
              <Col span={24}>
                <div className='container-card-shippin'>
                  <CardAddress
                    address={ejemplo.address}
                    phone={ejemplo.phone}
                    email={ejemplo.email}
                  />
                </div>
                <br />
              </Col>
            </Row>
            <div>
              <Row>
                <Col span={24}>
                  <div>
                    <CustomButton btnStyle='btn-orange'>
                      Agregar otra Dirección
                    </CustomButton>
                  </div>
                  <br />
                </Col>
              </Row>
            </div>
            <Row>
              <Col span={24}>
                <div>
                  <h2>3. Metodo de pago</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  <button>PayPal</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  <CustomButton btnStyle='btn-orange'>
                    Agregar otra Dirección
                  </CustomButton>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Divider>
      <MenuFooter />
    </>
  )
}
