import React from "react";

type ProfileStatusPropsType = {
    status: string
}

// const [editMode, setEdiMode] = useState(false)

export class ProfileStatusClass extends React.Component<ProfileStatusPropsType, {}> {
    state = {
        editMode: false
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode() {
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
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}/>
                    </div>
                }
            </div>)
    }
}


