import { Col, Row } from "antd";
import { useAppContext } from "../appProvider/appContext";
import {
  MATH_BASICS_UNARY,
  type TMathBasicBinaryOperators,
  type TMathBasicOperators,
  type TMathBasicUnaryOperators,
} from "../../types/types";
import KeypadButton from "./keypadButton";

const Keypad = () => {
  const { dispatch } = useAppContext();

  const isUnary = (
    operator: TMathBasicOperators | "CE" | "="
  ): operator is TMathBasicUnaryOperators =>
    MATH_BASICS_UNARY.some((unary) => unary === operator);

  const handleKeypadClick = (
    value: TMathBasicOperators | number | "CE" | "=" | '.'
  ) =>
    typeof value === "number" || value === '.'
      ? dispatch({ type: "NUM_CLICKED", payload: value })
      : value === "CE"
      ? dispatch({ type: "RESET" })
      : value === "="
      ? dispatch({ type: "CALC" })
      : isUnary(value)
      ? dispatch({ type: "UNARY_OPERATOR_CLICKED", payload: value })
      : dispatch({ type: "BINARY_OPERATOR_CLICKED", payload: value });

  return (
    <>
      <Row justify={"center"}>
        <Col span={1}>
          <KeypadButton<"CE"> value={"CE"} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicUnaryOperators>
            value="±"
            onClick={handleKeypadClick}
          />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicUnaryOperators>
            value="1/x"
            onClick={handleKeypadClick}
          />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicUnaryOperators>
            value="sqrt"
            onClick={handleKeypadClick}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={1}>
          <KeypadButton<number> value={1} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<number> value={2} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<number> value={3} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicOperators>
            value="+"
            onClick={handleKeypadClick}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={1}>
          <KeypadButton<number> value={4} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<number> value={5} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<number> value={6} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicBinaryOperators>
            value="-"
            onClick={handleKeypadClick}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={1}>
          <KeypadButton<number> value={7} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<number> value={8} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<number> value={9} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicBinaryOperators>
            value="*"
            onClick={handleKeypadClick}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={2}>
          <KeypadButton<number> value={0} onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<'.'> value='.' onClick={handleKeypadClick} />
        </Col>
        <Col span={1}>
          <KeypadButton<TMathBasicBinaryOperators>
            value="/"
            onClick={handleKeypadClick}
          />
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={4}>
          <KeypadButton<"="> value="=" onClick={handleKeypadClick} />
        </Col>
      </Row>
    </>
  );
};

export default Keypad;
