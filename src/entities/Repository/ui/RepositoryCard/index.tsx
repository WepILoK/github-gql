import styles from "./styles.module.scss"
import {Headline} from "shared/ui";
import star from "shared/ui/icon/star.svg"
import {dateToRUFormat} from "shared/utils";
import {Link} from "react-router-dom";
import React from "react";

export const RepositoryCard: React.FC<{ name }> = ({name}) => {
    return <div className={styles.card}>
        <div className={styles.content}>
            <Link className={styles.headline}
                  to={"/"}>
                <Headline text={name}/>
            </Link>
            <a className={styles.github}
               href={"/"} target={"_blank"}>
                Github
            </a>
        </div>
        <div className={styles.content}>
            <div className={styles.starCount}>
                <div className={styles.count}>
                    3
                </div>
                <img src={star as string} alt={"star"}/>
            </div>
            <div className={styles.date}>
                Обновлено - {dateToRUFormat("")}
            </div>
        </div>
    </div>
}