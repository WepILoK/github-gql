import styles from "./styles.module.scss"
import {$searchData, fetchRepositoriesFx, RepositoryCard} from "entities/Repository";
import {useUnit} from "effector-react";
import {SearchIRepositoryInput} from "features/SearchIRepositoryInput";
import {Pagination} from "features/Pagination";
import {Loader} from "shared/ui";

export const RepositoriesPage = () => {
    const [data, isLoading] = useUnit([$searchData, fetchRepositoriesFx.pending])

    return (
        <div>
            <SearchIRepositoryInput/>
            <div className={styles.repositories}>
                {isLoading && <Loader/>}
                {!isLoading &&
                    <div className={styles.data}>
                        {data.repos?.map(({repo}) => (
                            <RepositoryCard key={repo.id} {...repo}/>
                        ))}
                    </div>
                }
            </div>
            <Pagination/>
        </div>
    )
}