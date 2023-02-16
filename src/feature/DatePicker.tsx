import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {ChangeEvent, useState} from "react";
import {Button} from "@mui/material";


type PropsType = {
    setBirthday: (value: string) => void
}

export function DatePicker(props: PropsType) {
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <Stack component="form"
               style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}
               noValidate spacing={3}>
            <TextField
                onChange={onChangeHandler}
                id="date"
                label="Дата рождения"
                type="date"
                sx={{width: 220}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button onClick={() => props.setBirthday(value)} variant={'contained'} style={{width: '150px'}}>Рассчитать</Button>
        </Stack>
    );
}