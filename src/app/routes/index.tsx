import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "shared/ui/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <>core</>
            },
            {
                path: "id",
                element: <>rep detail</>
            }
        ]
    }
])