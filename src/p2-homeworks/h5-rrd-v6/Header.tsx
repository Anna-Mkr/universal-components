import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

type SetActiveType = (props: { isActive: boolean; }) => string | undefined

function Header() {
    const setActive: SetActiveType = ({isActive}) => isActive ? s.active : s.notActive
    return (
        <div className={s.wrapper}>
            <NavLink style={{textDecoration: 'none'}} className={setActive} to={PATH.PRE_JUNIOR}> PreJunior </NavLink>
            <NavLink style={{textDecoration: 'none'}} className={setActive} to={PATH.JUNIOR}> Junior </NavLink>
            <NavLink style={{textDecoration: 'none'}} className={setActive} to={PATH.JUNIOR_PLUS}> JuniorPlus </NavLink>
            <img className={s.NavigationIcon} alt={"Navigations icon"} src={"https://img.icons8.com/nolan/344/compass.png"}/>
        </div>
    )
}

export default Header
