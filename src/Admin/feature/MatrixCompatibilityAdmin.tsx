import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import {
  getMatrixCompatibilityAdmin,
  isDescription,
  updateMatrixCompatibilityAdmin,
} from "../../redux-store/get-matrix-compatibility";
import "./MatrixCompatibilityAdmin.scss";
import InputLabel from "@mui/material/InputLabel";
import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";

type MatrixCompatibilityAdminType =
  | "isWhyDidYouMeet"
  | "isTheSpiritualEssenceOfTheCouple"
  | "isMaterialKarma"
  | "isCouplesSpiritualKarma"
  | "isGenericTasksOfPartners"
  | "isCouplesWellBeing"
  | "isThePurposeOfTheCouple";

export const MatrixCompatibilityAdmin = () => {
  const id = useAppSelector((state) => state.getMatrixCompatibility.id);
  const data = useAppSelector((state) => state.getMatrixCompatibility.data);
  const [selectMatrix, setSelectMatrix] =
    useState<MatrixCompatibilityAdminType>("isWhyDidYouMeet");
  const [num, setNum] = useState<number>(0);
  const [txt, setTxt] = useState<string>("");
  const userAdminWait = useAppSelector((state) => state.errorReducer.userAdmin);
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setSelectMatrix(event.target.value as MatrixCompatibilityAdminType);
    setNum(0);
  };

  const onChangeTxt = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTxt(e.currentTarget.value);
  };

  const onClickHandler = (
    index: number,
    description: string,
    id: string,
    name: string
  ) => {
    setNum(0);
    dispatch(updateMatrixCompatibilityAdmin({ index, name, id, description }));
  };

  const onDoubleClickChange = (value: number, text: string) => {
    setTxt(text);
    setNum(value);
  };

  useEffect(() => {
    dispatch(getMatrixCompatibilityAdmin({ id }));
  }, []);
  const matrixDescription = (value: isDescription[]) => {
    return value.map((e, index) => {
      return (
        <div className={"divDesc"} key={index}>
          <div className={"spanValue"}>{`Энергии: ${" " + e.value}`}</div>
          {num === e.value ? (
            <React.Fragment>
              <textarea
                style={{ width: "100%", height: "auto" }}
                cols={30}
                rows={10}
                value={txt.split("\n").join("\n")}
                onChange={onChangeTxt}
              ></textarea>
              <Button
                style={{ marginRight: 10 }}
                onClick={() => onClickHandler(e.value, txt, id, selectMatrix)}
                variant={"contained"}
              >
                Изменить
              </Button>
              <Button onClick={() => setNum(0)} variant={"contained"}>
                Отмена
              </Button>
            </React.Fragment>
          ) : (
            <p
              onDoubleClick={() =>
                onDoubleClickChange(e.value, e.text.split("\n").join("\n"))
              }
              className={"descriptionAdmin"}
            >
              <React.Fragment key={index}>
                {e.text.split("\n").map((paragraph: string, innerIndex) => (
                  <React.Fragment key={innerIndex}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
                <br />
              </React.Fragment>
            </p>
          )}
        </div>
      );
    });
  };

  let table;
  if (selectMatrix === "isWhyDidYouMeet") {
    table = matrixDescription(data.isWhyDidYouMeet);
  } else if (selectMatrix === "isTheSpiritualEssenceOfTheCouple") {
    table = matrixDescription(data.isTheSpiritualEssenceOfTheCouple);
  } else if (selectMatrix === "isMaterialKarma") {
    table = matrixDescription(data.isMaterialKarma);
  } else if (selectMatrix === "isCouplesSpiritualKarma") {
    table = matrixDescription(data.isCouplesSpiritualKarma);
  } else if (selectMatrix === "isGenericTasksOfPartners") {
    table = matrixDescription(data.isGenericTasksOfPartners);
  } else if (selectMatrix === "isCouplesWellBeing") {
    table = matrixDescription(data.isCouplesWellBeing);
  } else if (selectMatrix === "isThePurposeOfTheCouple") {
    table = matrixDescription(data.isThePurposeOfTheCouple);
  }

  if (userAdminWait) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          top: "50%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <div>
      <FormControl style={{ width: 300, marginBottom: 50 }}>
        <InputLabel id="demo-simple-select">
          Редактирование матрицы совместимости
        </InputLabel>
        <Select
          labelId="demo-simple-select"
          id="demo-simple-select"
          label={"Редактирование матрицы совместимости"}
          value={selectMatrix}
          onChange={handleChange}
        >
          <MenuItem value={"isWhyDidYouMeet"}>Для чего встретились</MenuItem>
          <MenuItem value={"isTheSpiritualEssenceOfTheCouple"}>
            Духовная суть пары
          </MenuItem>
          <MenuItem value={"isMaterialKarma"}>Материальная карма</MenuItem>
          <MenuItem value={"isCouplesSpiritualKarma"}>
            Духовная карма пары
          </MenuItem>
          <MenuItem value={"isGenericTasksOfPartners"}>
            Родовые задачи партнеров
          </MenuItem>
          <MenuItem value={"isCouplesWellBeing"}>Благополучие пары</MenuItem>
          <MenuItem value={"isThePurposeOfTheCouple"}>
            Предназначение пары
          </MenuItem>
        </Select>
      </FormControl>
      <div>
        <br />
        {userAdminWait ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "100vh",
              top: "40%",
              textAlign: "center",
              width: "100%",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          table
        )}
        <br />
      </div>
    </div>
  );
};
