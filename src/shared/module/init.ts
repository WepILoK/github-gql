import {createEffect} from "effector";
import {fetchUserLogin} from "../api";

export const fetchUserLoginFx = createEffect<void, string, Error>(async () => {
   const login = await fetchUserLogin()
    return login
})