import React from "react";
import styles from "../users.module.css";
import {v1} from "uuid";
import userPhoto from "../../../images/images.png";
import {UsersPropsType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {deleteUsers, getUsers, postUsers} from "../../../api/api";

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
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingImProgress: string[]
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
                                  ? <button disabled={props.followingImProgress.some( el => el === u.id )} onClick={() => {
                                      debugger
                                      props.unFollow(u.id)
                                      props.toggleFollowingProgress(true, u.id)

                                      //   deleteUsers - вынес  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                          deleteUsers(u.id).then(data => {
                                              if (data.resultCode === 0) {
                                                  props.unFollow(u.id)
                                              }
                                              props.toggleFollowingProgress(false, u.id)
                                          })

                                  }}>Unfollow</button>
                                  : <button disabled={props.followingImProgress.some( el => el === u.id)} onClick={() => {
                                      props.toggleFollowingProgress(true, u.id)

                                      //    postUsers - вынес  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                         postUsers(u.id).then(data => {
                                              if (data.resultCode === 0) {
                                                  props.follow(u.id)
                                              }
                                              props.toggleFollowingProgress(false, u.id)
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

