import React, {useState} from "react";

type ProfileStatusPropsType = {
    status: string
}

// const [editMode, setEdiMode] = useState(false)

export const ProfileStatusFunction = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                : <div>
                    <input value={props.status} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
            }
        </div>)
}



