import React from 'react'
import s from './Header1.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img
            src='https://www.meme-arsenal.com/memes/48591d901e6f0a3d64b5f822163258d6.jpg' alt={'s'}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logoutTC}>log out</button></div>
                : <NavLink to={'/login'}>login</NavLink>
            }
        </div>
    </header>
}

export default Header