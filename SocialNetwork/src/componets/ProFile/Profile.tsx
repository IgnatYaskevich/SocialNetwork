import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/PorfileInfo/ProfileInfo";
import {changeNewTextPost, ProfilePageType} from "../../redux/State";


type profilePropsType = {
    // state: RootStateType
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    upDateNewPostText: (newText: string) => void
}
const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     onChange={changeNewTextPost}
                     addPost={props.addPost}/>
        </div>
    )
}
export default Profile;