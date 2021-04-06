import React from "react";
import {UsersPropsType} from "../../redux/users-reducer";
import {v1} from "uuid";
import userPhoto from "../../images/images.png";
import styles from "./users.module.css";
import axios from "axios";


type PropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    users: UsersPropsType[]
}

export class UsersC extends React.Component<PropsType, {}> {  // какие данные приходт в пропсах
    constructor(props: any) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    getUsers = () => {

    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={v1()}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small === '' ? u.photos.small : userPhoto}
                                className={styles.photo} alt={'Avatar'}/>
                        </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      this.props.follow(u.id)
                                  }}>Follow</button>
                                  : <button onClick={() => {
                                      this.props.unFollow(u.id)
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
    }
}

