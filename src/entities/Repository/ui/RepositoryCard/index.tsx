import styles from "./styles.module.scss"
import {Headline} from "shared/ui";
import star from "shared/ui/icon/star.svg"
import {dateToRUFormat} from "shared/utils";
import {Link} from "react-router-dom";
import React from "react";
import {RepositoryCardType} from "../../model";

export const RepositoryCard: React.FC<RepositoryCardType> = ({name,url,stargazerCount,defaultBranchRef, owner,id}) => {
    return <div className={styles.card}>
        <div className={styles.content}>
            <Link className={styles.headline}
                  to={`/${id}`}
                  state={{
                      owner,name
                  }}
            >
                <Headline text={name}/>
            </Link>
            <a className={styles.github}
               href={url} target={"_blank"}>
                Github
            </a>
        </div>
        <div className={styles.content}>
            <div className={styles.starCount}>
                <div className={styles.count}>
                    {stargazerCount}
                </div>
                <img src={star as string} alt={"star"}/>
            </div>
            <div className={styles.date}>
                Обновлено - {dateToRUFormat(defaultBranchRef ? defaultBranchRef.target.history.nodes[0].committedDate : "")}
            </div>
        </div>
    </div>
}