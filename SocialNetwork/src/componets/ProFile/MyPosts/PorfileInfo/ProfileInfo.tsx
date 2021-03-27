import React from "react";
import s from './ProfileIndo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'http://www.meissl.com/media/images/8f24db1f/schweiz.jpg'} alt={'s'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;