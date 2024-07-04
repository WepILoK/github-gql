import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.scss"

export const MainLayout = () => {

    return <div className={styles.layout}>
        <Outlet/>
    </div>
}