import React from "react";
import {v1} from "uuid";
import {UsersPropsType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../images/images.png'

type PropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    users: UsersPropsType[]
}

export const Users = (props: PropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>

            {
                props.users.map(u => <div key={v1()}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small === '' ? u.photos.small : userPhoto}
                                className={styles.photo} alt={'Avatar'}/>
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


// props.setUsers([
//     {
//         id: v1(), followed: true, fullName: 'Ignat', status: 'I am a boss',
//         location: {city: 'Minsk', country: 'Belarus'},
//         photoUrl: "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg"
//     },
//     {
//         id: v1(), followed: false, fullName: 'Sacha', status: 'I am a boss tooa',
//         location: {city: 'Moscow', country: 'Russia'},
//         photoUrl: "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg",
//     },
//     {
//         id: v1(), followed: false, fullName: 'Rashid', status: 'I am a boss too',
//         location: {city: 'Kair', country: 'Egipt'},
//         photoUrl: "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg"
//     }
// ])