import styles from "./Headline.module.scss"
import React from "react";

export const Headline: React.FC<{text: string}> = ({text,}) => {
    return <div className={styles.text}>
        {text}
    </div>
}