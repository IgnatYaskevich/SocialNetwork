import React from "react";
import styles from "../../Users/users.module.css";
import {v1} from "uuid";

type PropsType = {
    pageSize: number
    totalUSerCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUSerCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (<span className={props.currentPage === p ? styles.selectedPage : ''}
                                  key={v1()}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}>{p + ","}</span>
                    )
                })}
            </div>
        </div>
    )
}

