import React from "react";
import classnames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classnames.bind(styles);

interface IInputProps {
  handlerInput?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}

export const Input: React.FC<IInputProps> = (props) => {
  const {handlerInput, value, className} = props;
  return (
    <input
      type="text"
      className={ cx('Input', className) }
      value={ value }
      onChange={ handlerInput }
    />
  );
};
