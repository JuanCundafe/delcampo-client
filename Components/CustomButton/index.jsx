import { Button } from 'antd';

export default function CustomButton ({ callback, btnStyle, children, icon }) {
  const handleCallback = () => {
    callback()
  };

  return (
    <Button
      icon={icon}
      type='primary'
      className={btnStyle}
      onClick={handleCallback}
    >
      {children}
    </Button>
  )
}
