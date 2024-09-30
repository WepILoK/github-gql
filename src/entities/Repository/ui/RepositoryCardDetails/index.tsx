import styles from "./styles.module.scss";
import {Headline, Avatar} from "shared/ui";
import {dateToRUFormat, numWord} from "shared/utils";
import React from "react";
import {RepositoryDetailsType} from "../../model";

export const RepositoryCardDetails: React.FC<RepositoryDetailsType> = ({name,owner,languages,stargazerCount,description, defaultBranchRef}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headline}>
                    <Headline
                        text={name}/>
                </div>
                <div className={styles.stars}>
                    {stargazerCount} {numWord(stargazerCount, ["звёзда", "звёзды", "звёзд"])} на github
                </div>
                <div className={styles.date}>
                    Дата последнего коммита - {dateToRUFormat(defaultBranchRef.target.history.nodes[0].committedDate)}
                </div>
            </div>
            <div className={styles.user}>
                <Avatar src={owner.avatarUrl}/>
                <a className={styles.nickname} href={owner.url} target={"_blank"}>
                    {owner.login}
                </a>
            </div>
            <div className={styles.languages}>
                <ul>
                    {languages.nodes.map((lang) => <li key={lang.name}>{lang.name}</li>)}
                </ul>
            </div>
            <div className={styles.description}>
                {description ? description : "No description, website, or topics provided."}
            </div>
        </div>
    )
}