import {Button} from "../../shared/ui";
import styles from "./styles.module.scss"
import React, {useEffect, useState} from "react";
import {useUnit} from "effector-react";
import {$searchData, fetchRepositoriesFx} from "../../entities/Repository";
import {useSearchParams} from "react-router-dom";

export const Pagination: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, isLoading] = useUnit([$searchData, fetchRepositoriesFx.pending])
    const maxPages = Math.round(data.repositoryCount / 10)
    const [searchParams, setSearchParams] = useSearchParams();

    const paginationNumbersArray = () => {
        if (currentPage >= 5) {
            return [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((item) => item + currentPage)
        } else {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }

    const selectPage = (num: number) => {
        if (currentPage === num) return
        setCurrentPage(num)
        if (searchParams.get("page") != num) {
            setSearchParams(prev => {
                prev.set("page", String(num))
                return prev
            })
        }
        if (searchParams.get("search")) {
            fetchRepositoriesFx({
                name: searchParams.get("search"),
                page: num
            })
        } else {
            fetchRepositoriesFx({
                login: searchParams.get("login") || localStorage.getItem("login"),
                page: num
            })
        }
    }

    useEffect(() => {
        if (searchParams.get("page")) {
            selectPage(Number(searchParams.get("page")))
        }
    }, [searchParams]);

    return (
        <div className={styles.pagination}>
            {paginationNumbersArray().map((num) => {
                if (num > maxPages) return null
                return (
                    <Button
                        key={num}
                        disabled={currentPage !== num && isLoading}
                        isActive={currentPage === num}
                        onClick={() => {
                            selectPage(num)
                        }}>
                        {num}
                    </Button>
                )
            })}
        </div>
    )
}