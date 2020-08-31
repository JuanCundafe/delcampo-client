import FormAddress from "../../Components/FormAddress";
import CustomButton from "../../Components/CustomButton";
import { LeftOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Navbar from "../../Components/NavBar";
import MenuFooter from "../../Components/MenuFooter";
import { useRouter } from "next/router";
import { addAddress } from "../../lib/services";

export default function Address() {
  const router = useRouter();
  console.log(router);

  const handlerBackAddress = () => {
    router.back();
  };

  // useEffect(async () => {
  //   const stringBag = await localStorage.getItem("bag");

  //   if (stringbag) {
  //     let parsedBag = JSON.parse(stringBag);
  //     setbag(parsedBag);
  //   }
  // }, []);
  // console.log(bag);

  // useEffect(() => {
  //   async function fetchAddress() {
  //     const viz =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGIwM2MxMmUwMWZhYmEwZmU5Y2EzNiIsImlhdCI6MTU5ODc1MTcwOCwiZXhwIjoxNTk4OTI0NTA4fQ.hZp8_DI26eaWIVPn8o6mW4phOUREB5fKvgxxaImFiEY";
  //     try {
  //       const response = await GetShipping(viz);
  //       const { data } = response;
  //       const { address } = data;
  //       setResult([...address]);

  //       console.log(cardShipping);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchAddress();
  // }, []);

  console.log(router.query);

  return (
    <div className="Container-Address-page">
      <div className="address-navbar">
        <Navbar />
      </div>
      <div className="address-form-address-header">
        <h3>Dirección</h3>
      </div>
      <CustomButton
        icon={<LeftOutlined />}
        btnStyle="btn-orange-address-return"
        callback={handlerBackAddress}
      />
      <Row justify="space-around" align="middle" className="address-row">
        <Col xs={{ span: 24 }} md={{ span: 17 }}>
          <FormAddress />
        </Col>
      </Row>
      <MenuFooter />
    </div>
  );
}
