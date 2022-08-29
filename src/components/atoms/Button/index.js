import React from "react";
import { Fragment } from "react";

const sizeClassName = {
    small: "h-8 text-sm rounded-3xl",
    medium: "h-12 text-base leading-[22px] rounded-3xl",
    large: "h-14 text-base leading-[22px] rounded-[100px]",
  },
  typeClassName = {
    fill: "",
    text: "text",
    icon: "rounded-full",
  },
  sizeIconClassName = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-14 w-14",
  };

const Button = ({
  children,
  inverted,
  type,
  size,
  variant,
  disabled,
  icon,
  iconType,
  block,
  className,
  style,
  ...props
}) => {
  const classNameAssigned = [
    "relative flex",
    iconType === "left" ? "flex-row" : "flex-row-reverse",
    "justify-center items-center px-4 gap-x-1.5 font-medium btn",
    variant,
    inverted ? "inverted" : "",
    typeClassName[type],
    type === "icon" ? sizeIconClassName[size] : sizeClassName[size],
    block ? "w-full" : "",
    className,
  ];

  return (
    <button
      className={classNameAssigned.join(" ")}
      disabled={disabled}
      style={{
        ...style,
      }}
      {...props}
    >
      {icon ? (
        <div className="flex items-center justify-center h-full align-middle">
          {icon}
        </div>
      ) : (
        <Fragment />
      )}
      {children ? (
        <span className="text-center">{children}</span>
      ) : (
        <Fragment />
      )}
    </button>
  );
};

Button.defaultProps = {
  inverted: false,
  disabled: false,
  block: false,
  variant: "color1",
  size: "medium",
  icon: null,
  iconType: "left",
  type: "fill",
  className: "",
  style: {},
};

export default Button;
