import React from 'react'
import s from './Header1.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
    return <header className={s.header}>
        <img
            src='https://www.meme-arsenal.com/memes/48591d901e6f0a3d64b5f822163258d6.jpg' alt={'s'}/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>login</NavLink>
            }
        </div>
    </header>
}

export default Header