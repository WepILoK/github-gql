import React, {InputHTMLAttributes} from "react";
import styles from "./styles.module.scss"

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <div className={styles.wrapper}>
        <input {...props}/>
    </div>
}