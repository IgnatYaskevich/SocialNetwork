import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.link}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={ '/UsersFuntionComponent'} activeClassName={s.link}>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} activeClassName={s.link}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/News'} activeClassName={s.link}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Music'} activeClassName={s.link}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'} activeClassName={s.link}>Settings</NavLink>
            </div>

        </nav>
    )
}
export default Navbar;