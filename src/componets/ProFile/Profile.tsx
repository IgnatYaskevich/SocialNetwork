import React from "react"
import ProfileInfo from "./MyPosts/PorfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/Store";
import SuperMyPostContainer from "./MyPosts/MyPostsContainer";


type profilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}
export const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostContainer />
        </div>
    )
}
