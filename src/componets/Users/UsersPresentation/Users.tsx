import React from "react";
import styles from "../users.module.css";
import {v1} from "uuid";
import userPhoto from "../../../images/images.png";
import {UsersPropsType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    users: UsersPropsType[]
    pageSize: number
    totalUSerCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
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
                              key={v1()}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p + ","}</span>
                    )
                })}
            </div>
            {
                props.users.map(userId => <div key={v1()}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + userId.id}>

                                <img src={userId.photos.small != null ? userId.photos.small : userPhoto}
                                     className={styles.photo} alt={'Avatar'}/>

                                </NavLink>
                        </div>
                          <div>
                              {userId.followed
                                  ? <button disabled={props.followingImProgress.some(el => el === userId.id)}
                                            onClick={() => {
                                                props.unFollow(userId.id)
                                            }}>Unfollow</button>
                                  : <button disabled={props.followingImProgress.some(el => el === userId.id)}
                                            onClick={() => {
                                                props.follow(userId.id)
                                            }}>Follow</button>}
                                  </div>
                                  </span>
                        <span>
                                  <span>
                                  <div>{userId.name}</div>
                                  <div>{userId.status}</div>
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

