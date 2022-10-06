import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const arrValues: [number, number] = [value1, value2]

    const onChangeRange = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleRange = (arrValue: [number, number]) => {
        setValue1(arrValue[0]);
        setValue2(arrValue[1]);
    }
    return (
        <div>
            <hr/>
            homeworks 11

            <div className={s.superRangeContainer}>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <SuperDoubleRange
                    onChangeRange={onChangeDoubleRange}
                    value={arrValues}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>
        </div>
    )
}

export default HW11
