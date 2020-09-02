import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";

import {
  Layout,
  Upload,
  message,
  Col,
  Row,
  Input,
  DatePicker,
  Select,
  Form,
} from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CustomButton from "../../Components/CustomButton";
import InputKilograms from "../../Components/InputKilograms";
import UploadProduct from "./components/UploadProduct";
import { GetProduct } from "../../lib/services";
import { addHarvestId } from "../../lib/services";

const { Content } = Layout;
const { TextArea } = Input;

export default function Create() {
  const [product, setProduct] = useState(false);
  const [result, setResult] = useState([]);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  useEffect(() => {
    async function fetchproduc() {
      const viz =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDliN2Y3YjE1MjI3MDA3ZTA5NTA4NyIsImlhdCI6MTU5ODg5ODMxMCwiZXhwIjoxNTk5MDcxMTEwfQ.dTgbhZJTyDMPHkhd4E65FpNHoDkt552CoZBIiYS0LLc";
      try {
        const response = await GetProduct(viz);
        const { data } = response;
        const { products } = data;
        console.log(data);
        setResult(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchproduc();
  }, []);
  const handelFormProduct = () => {
    setProduct(true);
  };

  return (
    <div>
      <Layout>
        <Navbar />
        <Content className="container-create">
          <Row>
            <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
              <p>Agrega una foto interesante de tu cosecha</p>
              <Form onSubmit={processHarvest}>
                <div className="uploadImage">
                  <h1>Upload image</h1>
                  <div className="App">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={1}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          {/* <button
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        ></button> */}
                          <CustomButton callback={onImageUpload}>
                            Click or Drop here
                          </CustomButton>
                          &nbsp;
                          <button onClick={onImageRemoveAll}>
                            Remove all images
                          </button>
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img
                                src={image["data_url"]}
                                alt=""
                                width="300"
                                height="200"
                              />
                              {/* <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>
                                Update
                              </button>
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div> */}
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                  ); }
                </div>
              </Form>
              {({ imageList, onImageUpload, onImageRemoveAll, errors }) => (
                <div>
                  {errors.maxNumber && (
                    <span>Number of selected images exceed maxNumber</span>
                  )}
                </div>
              )}

              <CustomButton callback={handelFormProduct}>
                + Agregar Producto
              </CustomButton>
              {product && <UploadProduct />}
              <Select defaultValue="Uvas" onChange={handleChange}>
                {result.map((product) => (
                  <Option value={product.name} key={product._id}>
                    {product.name}
                  </Option>
                ))}
              </Select>
              <p>Describe tu cosecha:</p>
              <TextArea rows={6} />
              <p>Precio por kilogramo</p>
              <div
                style={{
                  marginBottom: 16,
                  width: "70%",
                }}
              >
                <Input
                  className="kilogramos"
                  addonBefore="$"
                  addonAfter="Kg"
                  defaultValue=" "
                />
              </div>
              <p>Kilogramos disponibles de la cosecha</p>
              <InputKilograms />
              <p>Fecha límite de venta de la cosecha</p>
              <DatePicker style={{ background: "#dfdfe3", width: "100%" }} />
              <br />
              <br />
              <CustomButton>Publicar Cosecha</CustomButton>
              <div className="space" />
            </Col>
          </Row>
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  );
}
