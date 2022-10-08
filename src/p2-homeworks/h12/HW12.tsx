import React from "react";
import s from "./HW12.module.css";
import {FormLabel} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useAppDispatch, useAppSelector} from "../../p1-main/m1-ui/u1-app/hooks";
import {changeTheme} from "./bll/themeSlice"

export const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme.theme); // useSelector

    const onChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTheme((event.target as HTMLInputElement).value));
    };
    const ucFirst = (str: string) => {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Color scheme</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={theme}
                    onChange={onChangeCallback}
                >
                    {themes ? themes.map((el, i) => (
                        <FormControlLabel
                            key={i}
                            value={el}
                            control={<Radio />}
                            label={ucFirst(el)} />
                        )
                    ): []}
                </RadioGroup>
            </FormControl>
            <hr/>
        </div>
    );
}

export default HW12;
