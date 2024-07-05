import {Outlet, useLocation, useSearchParams} from "react-router-dom";
import styles from "./styles.module.scss"
import {useEffect} from "react";
import {fetchUserLoginFx} from "../../module";

export const MainLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation()

    useEffect(() => {
        fetchUserLoginFx()
            .then((data) => {
                if(data && searchParams.size === 0 && location.pathname === "/") {
                    setSearchParams({
                        login: data,
                        page: "1"
                    })
                }
            })
    }, [])

    return <div className={styles.layout}>
        <div className={styles.container}>
            <Outlet/>
        </div>
    </div>
}