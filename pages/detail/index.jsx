import {useState} from 'react';
import Layout from "../../Components/Layout"
import InputKilograms from "../../Components/InputKilograms"

import { Row, Col, Alert } from 'antd';


export default function Deatails(){

  const [alertMsg, showAlert] = useState(false);
  const [totalCost, setTotalCost] = useState(100)

  const handleTotal = (total) => {
    setTotalCost(total * 10)
  }

  const onFinish = (e) => {
    e.preventDefault();

    let totalKilograms = parseInt(e.target.elements[1].value);

    if(totalKilograms < 100){
      showAlert(true)
      
    }else{
      showAlert(false)
    }
  }

  return(
    <Layout>
      <div className="details-view">
        <Row>
          <Col span={12}>
              <div className="btn-return">
                <img src="/images/Group23.png" alt=""/>
              </div>
          </Col>
          <Col span={12}>
            <div className="creation-date">
              <div className="">Publicado el mañana</div>
            </div>
          </Col>
        </Row>
        <Row className="header">
          <Col xs={24} sm={12} >
            <img src="/images/oranges.jpg" alt="img detail"/>
            <div className="price-per-kilogram">
              <span className="kilogram">1 Kg.</span>
              <span className="price-kg">$10.00</span>
            </div>
          </Col>
          <Col xs={24} sm={12} className="description">
            <h2>Naranjas verdes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum explicabo nobis quasi in, eum praesentium facere, impedit suscipit quis quam dicta quisquam laboriosam non culpa neque. Deserunt expedita quisquam hic.</p>
          </Col>
        </Row>
        <Row className="footer">
          <Col span={24}>
            <div><span className="title-green">Productor</span></div>
          </Col>
          <Col xs={5} sm={3}>
            <img src="images/icon-category.png" alt="Icon category"/>
          </Col>
          <Col  xs={19} sm={18} className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nam iusto accusantium. Saepe modi perspiciatis ullam, esse cupiditate dicta culpa qui pariatur accusantium dolor ad aspernatur nihil quam recusandae iste.</Col>
          <Col span={24}>
            <div><span className="title-green">Fecha de caducidad: </span>30 de agosto</div>
          </Col>
        </Row>
        <Row className="add-bag">
          <Col span={24}>
            <hr/>
            {alertMsg && <Alert message="La compra mínima es de 100 Kg" type="error" showIcon />}
          </Col>
          <Col span={24}>
            <div >
              <div>kg</div>
              <div>{`$ ${totalCost}.00`}</div>
            </div>
            <form onSubmit={onFinish}>
              <Row>
                <Col span={14}>
                {/* <div className="kilograms">Kg.</div> */}
                  <div className="input-container">
                    <InputKilograms callback={handleTotal}/>
                  </div>
                </Col>
                <Col span={10}>
                  <div className="btn-container">
                    <button type="submit">Agregar a la bolsa</button>
                  </div>
                </Col> 
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}