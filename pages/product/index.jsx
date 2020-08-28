import { Row, Col } from 'antd';
import Search from '../../Components/Search';
import CustomButton from '../../Components/CustomButton';
// import CustomButton from "../../Components/CustomButton";
// import Categories from "../../Components/Categories";

export default function Product () {
  return (
    <>
      <div className='product-wrapper'>
        <div>
          <Row className='navbar-product'>
            <Col span={3}>
              {' '}
              <a>
                <img src='images/logo-navbar.png' width='35' height='35' />{' '}
              </a>
            </Col>
            <Col xs={{ order: 3 }} sm={{ order: 2 }}>
              <Search />
            </Col>
            <Col
              className='product-header-btns'
              xs={{ span: 14, order: 2 }}
              sm={{ span: 4, order: 3 }}
            >
              {' '}
              <div>
                {' '}
                <CustomButton btnStyle='btn-orange-login'>
                  Iniciar Sesión
                </CustomButton>
              </div>
              <div>
                <CustomButton btnStyle='btn-outline-orange-signup'>
                  Regístrate
                </CustomButton>
              </div>
            </Col>
          </Row>
        </div>
        <div />
        <div className='product-btns-navigation/category'>
          <Row>
            <Col />
            <Col />
            <Col />
          </Row>
        </div>
      </div>
    </>
  )
}
