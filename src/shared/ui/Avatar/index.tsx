import styles from "./styles.module.scss"
import React from "react";

export const Avatar: React.FC<{ src?: string }> = ({src}) => {
    return <img
        className={styles.avatar}
        alt="Index"
        src={src || "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"}
    />
}