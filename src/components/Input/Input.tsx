import React from "react";
import classnames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classnames.bind(styles);

interface IInputProps {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  placeholder?: string;
}

export const Input: React.FC<IInputProps> = (props) => {
  const { onChange, value, className, placeholder } = props;
  return (
    <input
      type="text"
      className={cx("Input", className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
