import React from 'react'
import {Box} from "@mui/material";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    function valuetext(value: number) {
        return `${value}`;
    }


    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number]);
        console.log(newValue)
    };

    return (
        <Box sx={{width: 228 }}>
            <Grid container spacing={2} alignItems="center">
            <Grid item>{value&&value[0]}</Grid>
                <Grid item xs>
            <Slider
                getAriaLabel={() => 'Numbers range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                color={"secondary"}
            />
                </Grid>
            <Grid item>{value&&value[1]}</Grid>
            </Grid>
        </Box>
    )
}

export default SuperDoubleRange
