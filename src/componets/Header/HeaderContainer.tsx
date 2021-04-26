import React from 'react'
import Header from './Header1'
import {connect} from 'react-redux';
import {authMe, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

// type HeaderContainerType = {
//     isAuth: boolean;
//     login: string | null;
//     setAuthUserData: (id: string, email: string, login: string) => void;
//
// };
type HeaderContainerPropsType = {
    authMe : ()=>void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer)