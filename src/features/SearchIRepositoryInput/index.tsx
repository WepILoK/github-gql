import {Button, Input} from "shared/ui";
import {fetchRepositoriesFx} from "../../entities/Repository";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import styles from "./styles.module.scss"

export const SearchIRepositoryInput = () => {
    const [searchText, setSearchText] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = () => {
        if (searchText) {
            setSearchParams(prev => {
                prev.delete("login")
                prev.set("search", searchText)
                prev.set("page", "1")
                return prev
            })
        } else {
            setSearchParams(prev => {
                prev.delete("search")
                prev.set("login", localStorage.getItem("login"))
                prev.set("page", "1")
                return prev
            })
        }
        fetchRepositoriesFx({
            name: searchText,
            login: localStorage.getItem("login")
        })
    }

    useEffect(() => {
        if (searchParams.get("search")) {
            fetchRepositoriesFx({
                name: searchParams.get("search"),
                page: Number(searchParams.get("page"))
            })
            setSearchText(searchParams.get("search"))
        } else {
            fetchRepositoriesFx({
                login: searchParams.get("login") || localStorage.getItem("login"),
                page: Number(searchParams.get("page"))
            })
        }
    }, []);

    return (
        <div className={styles.search}>
            <Input
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
                onClick={() => {
                    handleSubmit()
                }}>
                Поиск
            </Button>
        </div>
    )
}