import {
    $event,
    $repositoryDetail,
    fetchRepositoryDetailsFx,
    RepositoryCardDetails
} from "../../entities/Repository";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Button, Loader} from "../../shared/ui";
import {useUnit} from "effector-react";

export const RepositoryDetailsPage = () => {
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
        <div>
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