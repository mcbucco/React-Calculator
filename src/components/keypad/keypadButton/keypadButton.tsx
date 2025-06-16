import { Button } from "antd";

type TKeypadButtonProps<T> = {
  value: T;
  onClick: (value: T) => void;
};

const KeypadButton = <T extends string | number>({
  value,
  onClick,
}: TKeypadButtonProps<T>) => {
  const handleClick = (value: T) => onClick(value);

  return (
    <Button
      size="large"
      onClick={() => handleClick(value)}
      block
      type="default"
    >
      {value}
    </Button>
  );
};

export default KeypadButton;
