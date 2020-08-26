import { Button } from "antd";

export default function CustomButton({ btnStyle, children }) {
  return (
    <Button type="primary" className={btnStyle}>
      {children}
    </Button>
  );
}
