import React from "react";
import styles from "../users.module.css";
import {v1} from "uuid";
import userPhoto from "../../../images/images.png";
import {UsersPropsType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                               debugger
                              {u.followed
                                  ? <button onClick={() => {
                                      props.unFollow(u.id)
                                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                          {
                                              withCredentials: true,
                                              headers: {
                                                  'API-KEY': '9c834141-c332-4d1d-a35e-d6573784e0c2'
                                              }
                                          })
                                          .then(response => {
                                              if (response.data.resultCode === 0) {
                                                  props.unFollow(u.id)
                                              }
                                          })

                                  }}>Unfollow</button>
                                  : <button onClick={() => {
                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                          {},
                                          {
                                              withCredentials: true,
                                              headers: {
                                                  'API-KEY': '9c834141-c332-4d1d-a35e-d6573784e0c2'
                                              }
                                          })
                                          .then(response => {
                                              if (response.data.resultCode === 0) {
                                                  props.follow(u.id)
                                              }
                                          })

                                  }}>Follow</button>}
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

