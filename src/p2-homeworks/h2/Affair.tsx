import React from 'react'
import {AffairType} from './HW2';
import {LightbulbCircle} from "@mui/icons-material";
import s from './Affair.module.css'


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const finalIconStyle = props.affair.priority ? props.affair.priority : ""

    return (
        <div className={s.container}>
            {props.affair.name}
            <LightbulbCircle fontSize="small" className={s[finalIconStyle]}/>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
