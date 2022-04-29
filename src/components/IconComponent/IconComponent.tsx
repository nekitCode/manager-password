import React from "react";

interface IIconComponent {
  className?: string;
  onClick?: () => void;
  children?: React.ReactChild;
  pathIcon: string;
  alt?: string;
}

export function IconComponent({
  children,
  onClick,
  className,
  pathIcon,
  alt,
}: IIconComponent) {
  return (
    <>
      <img className={className} onClick={onClick} src={pathIcon} alt={alt} />
      {children}
    </>
  );
}
