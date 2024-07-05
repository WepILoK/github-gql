import {createEffect} from "effector";
import {fetchUserLogin} from "../api";

export const fetchUserLoginFx = createEffect<void, string, Error>(async () => {
    return await fetchUserLogin()
})