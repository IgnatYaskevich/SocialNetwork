import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatusClass extends React.Component<ProfileStatusPropsType, {}> {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        debugger
        this.setState({
            editMode: true,
            // status: this.props.status
        })
    };

    deactivateEditMode = () => {
        debugger
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('update')
    }


    render() {
        console.log('render')

        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || '--------'}</span>
                    </div>
                    : <div>
                        <input
                            onChange={this.onStatusChange} value={this.state.status} autoFocus={true}
                            onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>)
    }
}


