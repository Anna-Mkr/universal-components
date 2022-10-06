import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import Slider from "@mui/material/Slider";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = ( event: Event, value: number | number[]) => {
        // onChange && onChange(event) // сохраняем старую функциональность

        onChangeRange && onChangeRange(value as number)
    }

    function valuetext(value: number) {
        return `${value}`;
    }
    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <Box sx={{width: 180 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>{value}</Grid>
                <Grid item xs>
            <Slider
                getAriaLabel={() => 'Numbers range'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color={"secondary"}
            />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SuperRange
