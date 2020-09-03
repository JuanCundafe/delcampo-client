import { useRouter } from "next/router";
import Link from "next/link";

import { Card, Avatar, Row, Col } from "antd";

export default function CardHarvest({
  product,
  price,
  description,
  picture,
  weight,
  _id,
}) {
  const router = useRouter();
  const { Meta } = Card;

  return (
    <>
      <Link href="/home/[id]" as={`/home/${_id}`}>
        <a>
          <div className="wrapper-cardHarvest">
            <Card
              hoverable
              className="card-harvest"
              cover={
                <img className="cardHarvest-img" alt="example" src={picture} />
              }
            >
              <Meta
                className="meta-cardHarvest module overflow"
                title={product}
                description={description}
              />
              <Row className="productor-cardHarvest">
                <Avatar
                  className="avatar-cardHarvest"
                  src="images/avatar-test.png"
                />
                <Meta description="Frutas y verduas" />
                <Col
                  xs={{ offset: 1 }}
                  lg={{ offset: 10 }}
                  className="col-precio-cardHarvest"
                >
                  <Meta
                    className="precio-cardHarvest"
                    description={`${price} mxn / Kg`}
                  />
                </Col>
              </Row>
            </Card>
          </div>
        </a>
      </Link>
    </>
  );
}
