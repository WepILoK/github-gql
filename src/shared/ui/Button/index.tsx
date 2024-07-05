import styles from "./styles.module.scss"
import React, {ButtonHTMLAttributes} from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
}

export const Button: React.FC<Button> = ({isActive = false, ...rest}) => {
    return <button className={`${styles.button} ${isActive ? styles.active : ""}`} {...rest}/>
}