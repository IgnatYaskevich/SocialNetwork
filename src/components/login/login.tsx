import React from "react";
import {FormDataType, LoginReduxForm} from "./loginForm";
import {connect, ConnectedProps} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

// type LoginType = MapDispatchToProps & MapStateToProps

const Login: React.FC<Props> = props => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const MapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const connector = connect(MapStateToProps, {loginTC})
export default connector(Login)
type Props = ConnectedProps<typeof connector>