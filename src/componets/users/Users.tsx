import React from "react";
import {UsersPropsType} from "../../redux/Store";
import {v1} from "uuid";
import styles from './users.module.css'

type PropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    users: UsersPropsType[]
}

export const Users = (props: PropsType) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(), followed: true, fullName: 'Ignat', status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'},
                photoUrl: "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg"
            },
            {
                id: v1(), followed: false, fullName: 'Sacha', status: 'I am a boss tooa',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg",
            },
            {
                id: v1(), followed: false, fullName: 'Rashid', status: 'I am a boss too',
                location: {city: 'Kair', country: 'Egipt'},
                photoUrl: "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg"
            }
        ])
    }


    return (
        <div>
            {
                props.users.map(u => <div key={v1()}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.photo} alt={'Avatar'}/>
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
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}