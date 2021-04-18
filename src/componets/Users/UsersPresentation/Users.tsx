import React from "react";
import styles from "../users.module.css";
import {v1} from "uuid";
import userPhoto from "../../../images/images.png";
import {UsersPropsType} from "../../../redux/users-reducer";
import Navbar from "../../Navbar/Navbar";
import {NavLink} from "react-router-dom";

type PropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    users: UsersPropsType[]
    pageSize: number
    totalUSerCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUSerCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? styles.selectedPage : ''}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>
                    )
                })}
            </div>
            {
                props.users.map(u => <div key={v1()}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>

                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.photo} alt={'Avatar'}/>

                                </NavLink>
                        </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      props.follow(u.id)
                                  }}>Follow</button>
                                  : <button onClick={() => {
                                      props.unFollow(u.id)
                                  }}>Unfollow</button>}
                        </div>
                    </span>
                        <span>
                      <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

