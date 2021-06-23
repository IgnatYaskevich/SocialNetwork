import React from "react";
import s from './ProfileIndo.module.css'
import {ProfileType, updateUserStatusTC} from "../../../../redux/profile-reducer";
import userPhoto from "../../../../images/images.png";
import styles from "../../../Users/users.module.css";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {LinearProgress} from "@material-ui/core";

type PropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto:  (file: File) => void
}



export const ProfileInfo = (props: PropsType) => {

    const statusApp = useSelector<AppStateType>((state) => state.app.statusApp)
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }
    return (
        <div>

            {statusApp === 'loading' && <LinearProgress/>}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}
                     className={styles.profileAvatar} alt={'Avatar'}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div>
                    {props.profile.fullName}
                </div>

                <ProfileStatusWithHooks updateUserStatus={updateUserStatusTC}
                                    status={props.status}/>
                <div>
                    {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '-No description-'}
                </div>
            </div>
        </div>
    )
}

