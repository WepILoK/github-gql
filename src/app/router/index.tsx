import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "shared/ui";
import {RepositoriesPage} from "../../pages/RepositoriesPage";
import {RepositoryPage} from "../../pages/RepositoryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <RepositoriesPage/>
            },
            {
                path: ":id",
                element: <RepositoryPage/>
            }
        ]
    }
])