import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {ApolloProvider} from "@apollo/client";
import styles from "./styles/styles.module.scss"
import {client} from "shared/api";
import {useEffect} from "react";
import {fetchUserLoginFx} from "./init";

export const App = () => {

    useEffect(() => {
        fetchUserLoginFx()
    }, [])

    return <div className={styles.app}>
        <ApolloProvider client={client}>
            <RouterProvider router={router}>
            </RouterProvider>
        </ApolloProvider>
    </div>
}