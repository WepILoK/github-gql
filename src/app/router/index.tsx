import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "shared/ui";
import {RepositoriesPage ,RepositoryPage} from "pages";

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