import React from "react"
import ProfileInfo from "./MyPosts/PorfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


// type profilePropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionsTypes) => void
//
//
//}
export type ProfileTypeProps = {
    profile: any
}
export const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}
