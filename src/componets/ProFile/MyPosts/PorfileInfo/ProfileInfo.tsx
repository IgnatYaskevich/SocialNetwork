import React from "react";
import s from './ProfileIndo.module.css'
import {ProfileType} from "../../../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: PropsType) => {

    return (
        <div>
            <div>
                <img src={'http://www.meissl.com/media/images/8f24db1f/schweiz.jpg'} alt={'s'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'photoProfile'}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;