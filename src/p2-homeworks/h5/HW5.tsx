import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import PageRoutes from "./PageRoutes";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <PageRoutes/>

            </HashRouter>
        </div>
    )
}

export default HW5
