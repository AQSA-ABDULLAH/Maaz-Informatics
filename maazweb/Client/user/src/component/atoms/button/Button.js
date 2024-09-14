import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
    const {
        btnText,
        primary,
        secondary,
        size,
        radius,
        bgColor,
        textColor,
        width,
        fontWeight,
        icon,
        btnClick
    } = props;

    const buttonStyle = {
        backgroundColor: bgColor || (primary ? "#9f29bd" : secondary ? "#61AC8A" : "transparent"),
        color: textColor || "#ffffff",
        borderRadius: radius || "40px",
        fontSize: size || "16px",
        width: width || "auto",
        fontWeight: fontWeight || "normal",
        transition: "background-color 0.3s ease, color 0.3s ease",
    };

    return (
        <button
            className={styles.btn}
            style={buttonStyle}
            onClick={btnClick}
        >
            {icon}
            {btnText}
        </button>
    );
}

export default Button;
