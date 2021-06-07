import React, {useState} from "react";
import styles from "../../Users/users.module.css";
import {v1} from "uuid";

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number

}

export const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={styles.paginateContainer}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (<span className={props.currentPage === p ? styles.selectedPage : ''}
                                  key={v1()}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}><span className={styles.portionSize}>{p}</span></span>
                    )
                })}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

