import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import PreJunior from "../h5-rrd-v6/pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "../h5-rrd-v6/pages/Error404";



export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/pre-junior',
    JUNIOR_PLUS: '/pre-junior',
}


function PageRoutes() {
    console.log("pagesRoutes")
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default PageRoutes;