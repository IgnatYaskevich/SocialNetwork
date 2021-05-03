import React from "react";
import s from './ProfileIndo.module.css'
import {ProfileType, updateUserStatus} from "../../../../redux/profile-reducer";
import userPhoto from "../../../../images/images.png";
import styles from "../../../Users/users.module.css";
import {ProfileStatusClass} from "./ProfileStatusClass";

type PropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void

}

const ProfileInfo = (props: PropsType) => {

    return (
        <div>
            {/*<div>*/}
            {/*    <img src={'http://www.meissl.com/media/images/8f24db1f/schweiz.jpg'} alt={'s'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.small : userPhoto}
                     className={styles.photo} alt={'Avatar'}/>
                <div>
                    {props.profile.fullName}
                </div>
                <ProfileStatusClass updateUserStatus={updateUserStatus}
                                    status={props.status}/>
                <div>
                    {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '-No description-'}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;