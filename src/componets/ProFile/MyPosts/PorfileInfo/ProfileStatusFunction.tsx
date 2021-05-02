import React from "react";

type ProfileStatusPropsType = {
    status: string
}

// const [editMode, setEdiMode] = useState(false)

export const ProfileStatusFunction = (props: ProfileStatusPropsType) => {
    let state = {
        editMode: false
    }
    return (
        <div>
            {state
                ? <div>
                    <span>{props.status}</span>
                </div>
                : <div>
                    <input value={props.status}/>
                </div>
            }
        </div>)
}



