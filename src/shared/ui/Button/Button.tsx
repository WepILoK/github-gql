import styles from "./Button.module.scss"
import React, {ButtonHTMLAttributes} from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return <button className={styles.button} {...props}/>
}