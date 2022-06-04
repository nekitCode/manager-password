import React from "react";
import classnames from "classnames/bind";

import styles from "./Button.module.scss";

interface IButtonProps {
  onClick?: () => void;
  title?: string;
  className?: string;
  children?: React.ReactChild;
  size?: string;
  textColor?: string;
  variant?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const cx = classnames.bind(styles);

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    onClick,
    title,
    children,
    className,
    size,
    textColor,
    variant,
    leftIcon,
    rightIcon,
  } = props;
  return (
    <button type="button" className={cx("Button")} onClick={onClick}>
      <div className={cx("Button__add")}>
        {leftIcon || null}
        {title || children}
        {rightIcon || null}
      </div>
    </button>
  );
};
