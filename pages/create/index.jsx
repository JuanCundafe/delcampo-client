import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CustomButton from "../../Components/CustomButton";
import InputKilograms from "../../Components/InputKilograms";
import UploadProduct from "./components/UploadProduct";
import {
  GetProduct,
  addProduct,
  addHarvest,
  imageHarvest,
} from "../../lib/services";

import {
  Layout,
  Col,
  Row,
  Input,
  DatePicker,
  Select,
  Form,
  Button,
} from "antd";

import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";
const { Content } = Layout;
const { TextArea } = Input;

function Create ({ jwt, userinfo }) {
  const [product, setProduct] = useState(false)
  const [result, setResult] = useState([])
  const [images, setImages] = React.useState([])
  const [weight, setweight] = useState({})
  const [date_end, setDate_end] = useState('')
  const { Option } = Select

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList)
  };

  useEffect(() => {
    async function fetchproduc (jwt) {
      try {
        const response = await GetProduct(jwt)
        const { data } = response
        const { products } = data
        setResult(products)
      } catch (error) {}
    }
    fetchproduc(jwt)
  }, [jwt])

  useEffect(() => {
    async function fetchHarvest () {
      try {
        const response = await getHarvest()
        const { dataHarvest } = response
        const { harvestProduct } = dataHarvest
        setResult(harvestProduct)
      } catch (error) {}
    }
    fetchHarvest()
  }, [])

  const handelFormProduct = () => {
    setProduct(true)
  };

  const handeleTotal = (total) => {
    setweight(total)
  };

  const onFinish = async (values) => {
    const harvest = { ...values, weight, date_end }

    try {
      harvest.picture = 'www.ejemplo.com';
      harvest.tag = 'populares';

      const data = await addHarvest(harvest, jwt)
      const { _id } = data.data
      const picture = images[0].file
      const formData = new FormData()

      formData.append('images', picture)
      try {
        const hervestUpdate = await imageHarvest(_id, formData, jwt)
      } catch (error) {
        console.log('error 1:', error)
      }
    } catch (error) {
      console.log('error 2:', error)
    }
  }

  return (
    <div>
      <Layout>
        <Navbar />
        <Content className='container-create'>
          <Row>
            <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
              <p>Agrega una foto interesante de tu cosecha</p>
              <div>
                <div className='App'>
                  <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={1}
                    dataURLKey='data_url'
                  >
                    {({ imageList, onImageUpload, onImageRemoveAll }) => (
                      <div className='upload__image-wrapper'>
                        <CustomButton
                          callback={onImageUpload}
                          className='btn-image-upload'
                        >
                          Upload image
                        </CustomButton>
                        &nbsp;
                        <CustomButton callback={onImageRemoveAll}>
                          Remove
                        </CustomButton>
                        {imageList.map((image, index) => (
                          <div key={index} className='image-item'>
                            <img
                              src={image.data_url}
                              alt=''
                              width='265'
                              height='200'
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>

              {product && <UploadProduct />}

              <Form onFinish={onFinish}>
                <Form.Item name='product'>
                  <Select placeholder='Selecciona un Producto'>
                    {result.map(({ _id, name }) => (
                      <Option value={_id} key={_id}>
                        {name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <p>Describe tu cosecha:</p>
                <Form.Item name='description'>
                  <Input.TextArea />
                </Form.Item>

                <p>Precio por kilogramo</p>
                <div
                  style={{
                    marginBottom: 16,
                    width: '70%'
                  }}
                >
                  <Form.Item name='price'>
                    <Input
                      className='kilogramos'
                      addonBefore='$'
                      addonAfter='Kg'
                    />
                  </Form.Item>
                </div>

                <p>Kilogramos disponibles de la cosecha</p>
                <InputKilograms callback={handeleTotal} />

                <p>Fecha límite de venta de la cosecha</p>
                <Form.Item name='date_end'>
                  <DatePicker
                    onChange={(date, dateString) => setDate_end(dateString)}
                    style={{ background: '#dfdfe3', width: '100%' }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    Agregar Cosecha
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  )
}

Create.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {}
  }

  const jwt = getCookie('jwt', ctx.req)
  const userInfo = await session(jwt)

  return {
    jwt,
    userinfo: userInfo.data.user
  }
};

export default Create
