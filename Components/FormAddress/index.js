import { Input, Row, Col } from 'antd';
import CustomButton from '../CustomButton';

function FormAddress () {
  return (
    <div className='card-address-container'>
      <div className='card-address-header'>
        <h3>Dirección</h3>
      </div>
      <div className='card-address-body'>
        <p>Estado:</p>
        <Input gray-5 placeholder='Oaxaca' />
        <p>Municipio / Delegación:</p>
        <Input placeholder='Tlaxiaco' />
        <p>Colonia:</p>
        <Input placeholder='Cuatro Caminos' />
        <p>Calle:</p>
        <Input placeholder='Camino real' />
        <Row className='spaceRow'>
          <Col span={11}>
            <p>Número:</p>
            <Input placeholder='235' />
          </Col>
          <Col span={11} offset={2}>
            <p>CP:</p>
            <Input placeholder='68000' />
          </Col>
        </Row>
        <p>Calles de referencia:</p>
        <Input placeholder='Entre camino viejo y empedrado' />
        <div className='card-container-button'>
          <CustomButton btnStyle='btn-green'>Guardar</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default FormAddress
