import React from "react"
import ProfileInfo from "./MyPosts/PorfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


// type profilePropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionsTypes) => void


type PropsType = {
    profile: ProfileType
}


export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}
