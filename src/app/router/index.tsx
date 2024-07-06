import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "shared/ui";
import {RepositoriesPage ,RepositoryDetailsPage} from "pages";

export const router = createBrowserRouter([
    {
        path: "/github-gql/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <RepositoriesPage/>
            },
            {
                path: "/github-gql/:id",
                element: <RepositoryDetailsPage/>
            }
        ]
    }
])