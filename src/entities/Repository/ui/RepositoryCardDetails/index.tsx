import styles from "./styles.module.scss";
import {Headline, Avatar} from "shared/ui";
import {dateToRUFormat, numWord} from "shared/utils";

export const RepositoryCardDetails = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headline}>
                    <Headline
                        text={"Название репозиторияНазвание репозиторияНазвание репозиторияНазвание репозиторияНазвание репозитория"}/>
                </div>
                <div className={styles.stars}>
                    4 {numWord(4, ["звёзда", "звёзды", "звёзд"])} на github
                </div>
                <div className={styles.date}>
                    Дата последнего коммита - {dateToRUFormat("")}
                </div>
            </div>
            <div className={styles.user}>
                <Avatar/>
                <a className={styles.nickname} href={"/44"}>
                    PetyaPalo4kin
                </a>
            </div>
            <div className={styles.languages}>
                <ul>
                    <li>Java</li>
                    <li>Piton</li>
                    <li>EptaSctipt</li>
                </ul>
            </div>
            <div className={styles.description}>
                No description, website, or topics provided.
            </div>
        </div>
    )
}