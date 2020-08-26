import Link from "next/link";
import { Row, Col } from "antd";

export default function Category({ imgPath, children, redirect, rowStyle }) {
  return (
    <Row className={rowStyle}>
      <Col className="categories-img" xs={6} sm={12}>
        <Link href={redirect}>
          <a>
            <img src={imgPath} height="40" width="40" />
          </a>
        </Link>
      </Col>
      <Col className="categories-name" xs={18} sm={12}>
        <Link href={redirect}>
          <a>
            <h3>{children}</h3>
          </a>
        </Link>
      </Col>
    </Row>
  );
}
