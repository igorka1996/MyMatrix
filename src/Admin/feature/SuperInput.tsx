import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

type PropsType = {
  setPage: (num: number) => void;
  search: (payload: { text: string }) => any;
  txt: string;
};
const defaultDebouncedTime = 1500;
export const useDebounce = (
  value: string,
  delay = defaultDebouncedTime
): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};
export const SuperInput = (props: PropsType) => {
  const [value, setValue] = useState(props.txt);
  useEffect(() => {
    setValue(props.txt);
  }, [props.txt]);
  const debouncedValue = useDebounce(value);
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
  };
  useEffect(() => {
    props.search({ text: debouncedValue });
    props.setPage(0);
  }, [debouncedValue]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={onChangeHandler}
        value={value}
        style={{ height: "50px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        id="outlined-basic"
        label="Поиск по почте"
        variant="outlined"
      />
    </Box>
  );
};
