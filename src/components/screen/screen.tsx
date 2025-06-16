import { Col, Input, Row } from "antd";
import "./screen.css";

interface IScreenProps {
  value?: string | number;
}

const Screen = ({ value }: IScreenProps) => (
  <Row justify={"center"}>
    <Col span={4}>
      <Input
        className="screen"
        disabled
        size="large"
        placeholder="0"
        value={value}
      ></Input>
    </Col>
  </Row>
);

export default Screen;
