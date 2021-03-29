import React from "react"
import ProfileInfo from "./MyPosts/PorfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


// type profilePropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionsTypes) => void
//
// }
export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}
