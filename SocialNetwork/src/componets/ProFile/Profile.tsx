import React from "react"
import ProfileInfo from "./MyPosts/PorfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/Store";
import {store} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type profilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}
export const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage}
                              dispatch={props.dispatch.bind(store)}
                // addPost={props.addPost}
            />
        </div>
    )
}
