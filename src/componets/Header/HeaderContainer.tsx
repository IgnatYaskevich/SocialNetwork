import React from 'react'
import Header from './Header1'
import {connect, ConnectedProps} from 'react-redux';
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

// type HeaderContainerType = {
//     isAuth: boolean;
//     login: string | null;
//     setAuthUserData: (id: string, email: string, login: string) => void;
//
// };
// type HeaderContainerPropsType = {
//     getAuthUserData : ()=>void
// }
class HeaderContainer extends React.Component<HeaderPropsType> {


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
const connector = connect(mapStateToProps, {logoutTC})
export default connector(HeaderContainer)
export type HeaderPropsType = ConnectedProps<typeof connector>