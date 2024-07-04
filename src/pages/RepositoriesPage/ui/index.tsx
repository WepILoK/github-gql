import {useEffect} from "react";
import {Input} from "shared/ui";
import {RepositoryCard} from "entities/Repository";
import styles from "../styles.module.scss"
import {$searchData, fetchRepositoriesFx} from "../model";
import {useUnit} from "effector-react";

export const RepositoriesPage = () => {
    const [data,fetchRepositories] = useUnit([$searchData, fetchRepositoriesFx])
    useEffect(() => {
        fetchRepositories({name: "fafa"})
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return <div>
        <Input/>
        <div className={styles.repositories}>
            {data.repos?.map(({repo})=> (
                <RepositoryCard key={repo.id} name={repo.name}/>
            ))}
        </div>
    </div>
}