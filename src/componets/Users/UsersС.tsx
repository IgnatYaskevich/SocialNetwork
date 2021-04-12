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
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    users: UsersPropsType[]
    pageSize: number
    totalUSerCount: number
    currentPage: number

}

export class UsersC extends React.Component<PropsType, {}> {  // какие данные приходт в пропсах
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUSerCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                              onClick={(e) => {
                                  this.onPageChanged(p)
                              }}>{p}</span>
                    )
                })}
                {/*<span>1</span>*/}
                {/*<span className={styles.selectedPage}>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
                {/*<span>5</span>*/}
            </div>
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

//
// if (this.props.users.length === 0) {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then(response => {
//             this.props.setUsers(response.data.items)
//         })
// }