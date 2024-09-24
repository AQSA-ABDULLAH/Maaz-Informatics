import React from "react";
import "./Button.module.css";

const Button = (props) => {
  const {
    btnText,
    primary,
    secondary,
    size,
    radius,
    fontWeight,
    bgColor,
    textColor,
    bw,
    width, 
    btnClick,
    hoverColor, // Using hoverColor prop
    padding,
  } = props;

  const buttonStyle = {
    backgroundColor:
      bgColor || (primary ? "#9f29bd" : secondary ? "#61AC8A" : "transparent"),
    color: textColor || "#ffffff",
    borderRadius: radius || "40px",
    fontSize: size || "16px",
    width: width || "auto",
    fontWeight: fontWeight || "400",
    border: bw || "0px",
    padding: padding || "8px 11px",
    transition: "0.3s",
  };

  const [hovered, setHovered] = React.useState(false);

  const toggleHover = () => setHovered(!hovered);

  return (
    <button 
      className="btn" 
      style={{
        ...buttonStyle,
        backgroundColor:  buttonStyle.backgroundColor, 
        cursor: "pointer",
      }} 
      onClick={btnClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {btnText}
    </button>
  );
};

export default Button;

