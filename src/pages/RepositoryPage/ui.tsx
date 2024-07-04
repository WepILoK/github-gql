import styles from "./styles.module.scss"
import {RepositoryCardDetails} from "../../entities/Repository";

export const RepositoryPage = () => {
    return (
        <div className={styles}>
            <RepositoryCardDetails/>
        </div>
    )
}