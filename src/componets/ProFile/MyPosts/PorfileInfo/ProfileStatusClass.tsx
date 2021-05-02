import React from "react";
import {log} from "util";

type ProfileStatusPropsType = {
    status: string
}

// const [editMode, setEdiMode] = useState(false)

export class ProfileStatusClass extends React.Component<ProfileStatusPropsType, {}> {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        debugger
        console.log('this:', this)
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>)
    }
}


