import React from "react";

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
    <button type="button" className="Button" onClick={onClick}>
      {leftIcon && <span>+</span>}
      {title || children}
      {rightIcon && <span>+</span>}
    </button>
  );
};
