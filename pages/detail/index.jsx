import Layout from "../../Components/Layout"
import InputKilograms from "../../Components/InputKilograms"

import { Row, Col, Button } from 'antd';

export default function Deatails(){
    
  const addToBag =  () =>{

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
        <Col span={24}><hr/></Col>
          <Col span={12}>
            <InputKilograms/>
          </Col>
          <Col span={12}>
            <div><span>Total:</span> $10000</div>
            <Button callback={addToBag}>Agregar a la bolsa</Button>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}