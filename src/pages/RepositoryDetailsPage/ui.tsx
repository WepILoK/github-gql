import styles from "./styles.module.scss"
import {
    $event,
    $repositoryDetail,
    fetchRepositoryDetailsFx,
    getRepositoryDetails,
    RepositoryCardDetails
} from "../../entities/Repository";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Button, Loader} from "../../shared/ui";
import {useUnit} from "effector-react";

export const RepositoryPage = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    const [data, leavePage, isLoading] = useUnit([$repositoryDetail, $event, fetchRepositoryDetailsFx.pending])

    useEffect(() => {
        if (state) {
            fetchRepositoryDetailsFx(state)
        } else {
            navigate(-1)
        }
    }, []);

    return (
        <div className={styles}>
            <div>
                <Button
                    onClick={() => {
                        navigate(-1)
                        leavePage()
                    }}
                >
                    Go back
                </Button>
            </div>

            {!data.repository && isLoading && <Loader/>}
            {data.repository && <RepositoryCardDetails {...data.repository}/>}
        </div>
    )
}