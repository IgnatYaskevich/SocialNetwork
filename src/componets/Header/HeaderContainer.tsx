import React from 'react'
import Header from './Header1'
import {connect} from 'react-redux';
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

// type HeaderContainerType = {
//     isAuth: boolean;
//     login: string | null;
//     setAuthUserData: (id: string, email: string, login: string) => void;
//
// };
type HeaderContainerPropsType = {
    getAuthUserData : ()=>void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)