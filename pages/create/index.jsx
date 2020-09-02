import { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';

import Navbar from '../../Components/Navbar';
import MenuFooter from '../../Components/MenuFooter';
import CustomButton from '../../Components/CustomButton';
import InputKilograms from '../../Components/InputKilograms';
import UploadProduct from './components/UploadProduct';
import {
  GetProduct,
  addHarvest,
  imageHarvest,
  getHarvest
} from '../../lib/services';

import {
  Layout,
  Col,
  Row,
  Input,
  DatePicker,
  Select,
  Form,
  Button
} from 'antd';
const { Content } = Layout
const { TextArea } = Input

export default function Create () {
  const [product, setProduct] = useState(false)
  const [result, setResult] = useState([])
  const [images, setImages] = React.useState([])
  const [harvestProduct, setHarvestProduct] = useState({})
  const { Option } = Select

  // function handleChangeProduct (value) {
  //   console.log(`selected ${value}`)
  // };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  };

  useEffect(() => {
    async function fetchproduc () {
      const token = localStorage.getItem('token')
      try {
        const response = await GetProduct(
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGIwM2MxMmUwMWZhYmEwZmU5Y2EzNiIsImlhdCI6MTU5OTAzMzUwNCwiZXhwIjoxNTk5MjA2MzA0fQ.w-EDRLmEAu1s2ez2Q2UH7Y8D-4KGwIeXtVf2Hf9rNNk'
        )
        const { data } = response
        const { products } = data
        setResult(products)
      } catch (error) {}
    }
    fetchproduc()
  }, [])
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
    console.log(total)
  };

  const onFinish = async (values) => {
    console.log(values)
    // try {
    //   const response = await addHarvest(){

    //   }
    // } catch (error) {}
  };

  return (
    <div>
      <Layout>
        <Navbar />
        <Content className='container-create'>
          <Row>
            <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
              <p>Agrega una foto interesante de tu cosecha</p>
              <div className='uploadImage'>
                <h1>Upload image</h1>

                <div className='App'>
                  <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={1}
                    dataURLKey='data_url'
                  >
                    {({ imageList, onImageUpload, onImageRemoveAll }) => (
                      <div className='upload__image-wrapper'>
                        <CustomButton callback={onImageUpload}>
                          Click
                        </CustomButton>
                        &nbsp;
                        <button onClick={onImageRemoveAll}>
                          Remove all images
                        </button>
                        {imageList.map((image, index) => (
                          <div key={index} className='image-item'>
                            <img
                              src={image.data_url}
                              alt=''
                              width='300'
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
                <CustomButton callback={handelFormProduct}>
                  + Agregar Producto
                </CustomButton>

                {/* <Select defaultValue='Uvas' onChange={handleChangeProduct}>
                {result.map((product) => (
                  <Option value={product.name} key={product._id}>
                    {product.name}
                  </Option>
                ))}
              </Select> */}

                <Form.Item name='Product'>
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
                {/* <TextArea rows={6} c/> */}

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
                    style={{ background: '#dfdfe3', width: '100%' }}
                  />
                </Form.Item>

                {/* <p>Fecha límite de venta de la cosecha</p>
              <DatePicker style={{ background: "#dfdfe3", width: "100%" }} /> */}
                <br />
                <br />

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
