import React from "react"
import {ProfileInfo} from "./MyPosts/PorfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type PropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}


export const Profile = React.memo((props: PropsType) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostContainer/>
        </div>
    )
})
