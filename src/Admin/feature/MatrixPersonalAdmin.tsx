import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { Button, SelectChangeEvent } from "@mui/material";
import {
  getMatrixPersonalAdmin,
  updateMatrixPersonalAdmin,
  updatePersonalProgramAndPastLifeMatrix,
} from "../../redux-store/get-matrix-personal";

type MatrixPersonalAdminType =
  | "isGeneral"
  | "isPositive"
  | "isNegative"
  | "isTalentFromGod"
  | "isTalentFromTheFather"
  | "isMotherTalent"
  | "isPastLife"
  | "isHealth"
  | "isPurpose20_40"
  | "isPurpose40_60"
  | "isGeneralPurpose"
  | "isPersonalPowerCode"
  | "isChildren"
  | "isManagement"
  | "parentMenLine"
  | "parentWomenLine"
  | "parentResentment"
  | "loveMen"
  | "loveWomen"
  | "loveTotal"
  | "loveMenCharacter"
  | "loveWomenCharacter"
  | "moneyLineOfActivity"
  | "moneySuccess"
  | "MoneyFlow"
  | "isProgram"
  | "isYear";

type Category =
  | "isPersonalQualities"
  | "isTalents"
  | "isPastLife"
  | "isHealth"
  | "isPurpose"
  | "isPersonalPowerCode"
  | "isChildren"
  | "isManagement"
  | "isParents"
  | "isLove"
  | "isMoney"
  | "isYear"
  | "isProgram";

export function MatrixPersonalAdmin() {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.getMatrixPersonal.id);
  const data = useAppSelector((state) => state.getMatrixPersonal.data);
  const [num, setNum] = useState<number | string>(0);
  const [numTitle, setNumTitle] = useState<string>("");
  const [gend, setGend] = useState<string>("");
  const [txt, setTxt] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<Category>("isPersonalQualities");
  const [nameCategory, setNameCategory] = useState("1. Личностные качества");
  const [selectMatrix, setSelectMatrix] =
    useState<MatrixPersonalAdminType>("isPositive");
  const onChangeTxtProgram = (
    e: ChangeEvent<HTMLTextAreaElement>,
    titleText: string
  ) => {
    setTxt(e.currentTarget.value);
    setTitle(titleText);
  };
  const onChangeTxt = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTxt(e.currentTarget.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>, text: string) => {
    setTitle(e.currentTarget.value);
    setTxt(text);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSelectMatrix(event.target.value as MatrixPersonalAdminType);
    if (
      event.target.value === "isGeneral" ||
      event.target.value === "isPositive" ||
      event.target.value === "isNegative"
    ) {
      setNameCategory("1. Личностные качества");
      setCategory("isPersonalQualities");
    } else if (
      event.target.value === "isTalentFromGod" ||
      event.target.value === "isTalentFromTheFather" ||
      event.target.value === "isMotherTalent"
    ) {
      setNameCategory("2. Таланты");
      setCategory("isTalents");
    } else if (event.target.value === "isPastLife") {
      setNameCategory("3. Прошлая жизнь");
      setCategory("isPastLife");
    } else if (event.target.value === "isHealth") {
      setNameCategory("4. Здоровье");
      setCategory("isHealth");
    } else if (
      event.target.value === "isPurpose20_40" ||
      event.target.value === "isPurpose40_60" ||
      event.target.value === "isGeneralPurpose"
    ) {
      setNameCategory("5. Предназначение");
      setCategory("isPurpose");
    } else if (event.target.value === "isPersonalPowerCode") {
      setNameCategory("6. Код личной силы");
      setCategory("isPersonalPowerCode");
    } else if (event.target.value === "isChildren") {
      setNameCategory("8. Дети");
      setCategory("isChildren");
    } else if (event.target.value === "isManagement") {
      setNameCategory("9. Руководство");
      setCategory("isManagement");
    } else if (
      event.target.value === "parentMenLine" ||
      event.target.value === "parentWomenLine" ||
      event.target.value === "parentResentment"
    ) {
      setNameCategory("10. Родители");
      setCategory("isParents");
    } else if (
      event.target.value === "loveMen" ||
      event.target.value === "loveWomen" ||
      event.target.value === "loveTotal" ||
      event.target.value === "loveMenCharacter" ||
      event.target.value === "loveWomenCharacter"
    ) {
      setNameCategory("11. Отношения и любовь");
      setCategory("isLove");
    } else if (
      event.target.value === "moneyLineOfActivity" ||
      event.target.value === "moneySuccess" ||
      event.target.value === "MoneyFlow"
    ) {
      setNameCategory("12. Деньги");
      setCategory("isMoney");
    } else if (event.target.value === "isProgram") {
      setNameCategory("13. Программы");
      setCategory("isProgram");
    } else if (event.target.value === "isYear") {
      setNameCategory("14. Прогнозы по годам");
      setCategory("isYear");
    }
  };
  const onClickHandler = (data: {
    index: number;
    description: string;
    id: string;
    name?: string;
    category: string;
    gender?: string;
  }) => {
    setGend("");
    setNum(0);
    dispatch(
      updateMatrixPersonalAdmin({
        index: data.index,
        name: data.name,
        id: data.id,
        description: data.description,
        category: data.category,
        gender: data.gender,
      })
    );
  };

  const onClickHandlerProgramAndPastLife = (data: {
    index: number;
    description: string;
    id: string;
    category: string;
    title: string;
    value: string;
  }) => {
    setGend("");
    setNum(0);
    setNumTitle("");
    dispatch(
      updatePersonalProgramAndPastLifeMatrix({
        index: data.index,
        id: data.id,
        description: data.description,
        category: data.category,
        title: data.title,
        value: data.value,
      })
    );
  };

  const onDoubleClickChange = (value: number, text: string, gend?: string) => {
    setTxt(text);
    setNum(value);
    if (gend) {
      setGend(gend);
    }
  };

  const onDoubleClickProgramAndPastLifeChange = (
    value: number,
    text: string,
    titleText: string
  ) => {
    setTxt(text);
    setNum(value);
    setTitle(titleText);
  };

  const onDoubleClickProgramAndPastLifeChangeTitle = (
    value: string,
    text: string,
    titleText: string
  ) => {
    setNumTitle(value);
    setTitle(titleText);
  };

  const matrixProgramAndPastLife = (arrDesc: any[]) => {
    return arrDesc.map((e: any, index) => {
      if (e.title) {
        return (
          <React.Fragment>
            {num === e.value ? (
              <React.Fragment>
                <span>{e.value}</span>
                <br />
                {numTitle ? (
                  <React.Fragment>
                    <textarea
                      style={{ width: "100%", height: "auto" }}
                      cols={30}
                      rows={10}
                      value={title}
                      onChange={(el) => onChangeTitle(el, e.text)}
                    >
                      {title}
                    </textarea>
                    <Button
                      onClick={() =>
                        onClickHandlerProgramAndPastLife({
                          index: index,
                          description: txt,
                          id,
                          title,
                          category,
                          value: e.value,
                        })
                      }
                      variant={"contained"}
                    >
                      Изменить
                    </Button>
                    <br />
                  </React.Fragment>
                ) : (
                  <span
                    onDoubleClick={() =>
                      onDoubleClickProgramAndPastLifeChangeTitle(
                        e.value,
                        e.text.split("\n").join("\n"),
                        e.title
                      )
                    }
                  >
                    {`Заголовок:${e.title}`}
                  </span>
                )}
                <textarea
                  style={{ width: "100%", height: "auto" }}
                  cols={30}
                  rows={10}
                  value={txt}
                  onChange={(el) => onChangeTxtProgram(el, e.title)}
                ></textarea>
                <Button
                  onClick={() =>
                    onClickHandlerProgramAndPastLife({
                      index: index,
                      description: txt,
                      id,
                      title: e.title,
                      category,
                      value: e.value,
                    })
                  }
                  variant={"contained"}
                >
                  Изменить
                </Button>
                <br />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span>{e.value}</span>
                <br />
                {numTitle === e.value ? (
                  <React.Fragment>
                    <textarea
                      style={{ width: "100%", height: "auto" }}
                      cols={30}
                      rows={10}
                      value={title}
                      onChange={(el) => onChangeTitle(el, e.text)}
                    >
                      {title}
                    </textarea>
                    <Button
                      onClick={() =>
                        onClickHandlerProgramAndPastLife({
                          index: index,
                          description: txt,
                          id,
                          title,
                          category,
                          value: e.value,
                        })
                      }
                      variant={"contained"}
                    >
                      Изменить
                    </Button>
                  </React.Fragment>
                ) : (
                  <span
                    onDoubleClick={() =>
                      onDoubleClickProgramAndPastLifeChangeTitle(
                        e.value,
                        e.text.split("\n").join("\n"),
                        e.title
                      )
                    }
                  >
                    {`Заголовок:${" " + e.title}`}
                  </span>
                )}
                <p
                  onDoubleClick={() =>
                    onDoubleClickProgramAndPastLifeChange(
                      e.value,
                      e.text.split("\n").join("\n"),
                      e.title
                    )
                  }
                  className="descriptionAdmin"
                  key={index}
                >
                  {e.text?.split("\n").map((paragraph: string, idx: number) => (
                    <React.Fragment key={idx}>
                      {paragraph}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      }
    });
  };

  const matrixDescription = (arrDesc: any[]) => {
    return arrDesc.map((e: any, index) => {
      if (e.m || e.w) {
        return (
          <React.Fragment key={index}>
            {e.m && (
              <React.Fragment>
                <br />
                <span>
                  <b>Мужчина</b>
                </span>
                {num === e.m.value && gend === "m" && e.m ? (
                  <React.Fragment>
                    <textarea
                      style={{ width: "100%", height: "auto" }}
                      cols={30}
                      rows={10}
                      onChange={onChangeTxt}
                    >
                      {txt}
                    </textarea>
                    <Button
                      onClick={() =>
                        onClickHandler({
                          index: e.m.value,
                          description: txt,
                          id,
                          name: selectMatrix,
                          category,
                          gender: gend,
                        })
                      }
                      variant={"contained"}
                    >
                      Изменить
                    </Button>
                  </React.Fragment>
                ) : (
                  <p
                    onDoubleClick={() =>
                      onDoubleClickChange(
                        e.m.value,
                        e.m.text.split("\n").join("\n"),
                        "m"
                      )
                    }
                    className="descriptionAdmin"
                  >
                    {e.m.text
                      .split("\n")
                      .map((paragraph: string, idx: number) => (
                        <React.Fragment key={idx}>
                          {paragraph}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                )}
              </React.Fragment>
            )}
            {e.w && (
              <React.Fragment>
                <br />
                <span>
                  <b>Женщина</b>
                </span>
                {num === e.w.value && gend === "w" && e.w ? (
                  <React.Fragment>
                    <textarea
                      style={{ width: "100%", height: "auto" }}
                      cols={30}
                      rows={10}
                      onChange={onChangeTxt}
                    >
                      {txt}
                    </textarea>
                    <Button
                      onClick={() =>
                        onClickHandler({
                          index: e.w.value,
                          description: txt,
                          id,

                          name: selectMatrix,
                          category,
                          gender: gend,
                        })
                      }
                      variant={"contained"}
                    >
                      Изменить
                    </Button>
                  </React.Fragment>
                ) : (
                  <p
                    onDoubleClick={() =>
                      onDoubleClickChange(
                        e.w.value,
                        e.w.text.split("\n").join("\n"),
                        "w"
                      )
                    }
                    className="descriptionAdmin"
                  >
                    {e.w.text
                      .split("\n")
                      .map((paragraph: string, idx: number) => (
                        <React.Fragment key={idx}>
                          {paragraph}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            {num === e.value ? (
              <React.Fragment>
                <textarea
                  style={{ width: "100%", height: "auto" }}
                  cols={30}
                  rows={10}
                  onChange={onChangeTxt}
                >
                  {txt}
                </textarea>
                <Button
                  onClick={() =>
                    onClickHandler({
                      index: e.value,
                      description: txt,
                      id,
                      name: selectMatrix,
                      category,
                    })
                  }
                  variant={"contained"}
                >
                  Изменить
                </Button>
              </React.Fragment>
            ) : (
              <p
                onDoubleClick={() =>
                  onDoubleClickChange(e.value, e.text.split("\n").join("\n"))
                }
                className="descriptionAdmin"
                key={index}
              >
                {e.text?.split("\n").map((paragraph: string, idx: number) => (
                  <React.Fragment key={idx}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            )}
          </React.Fragment>
        );
      }
    });
  };
  // console.log(data);
  let table;
  if (selectMatrix === "isPositive") {
    table = matrixDescription(data.isPersonalQualities.isPositive);
  } else if (selectMatrix === "isNegative") {
    table = matrixDescription(data.isPersonalQualities.isNegative);
  } else if (selectMatrix === "isGeneral") {
    table = matrixDescription(data.isPersonalQualities.isGeneral);
  } else if (selectMatrix === "isTalentFromGod") {
    table = matrixDescription(data.isTalents.isTalentFromGod);
  } else if (selectMatrix === "isTalentFromTheFather") {
    table = matrixDescription(data.isTalents.isTalentFromTheFather);
  } else if (selectMatrix === "isMotherTalent") {
    table = matrixDescription(data.isTalents.isMotherTalent);
  } else if (selectMatrix === "isPastLife") {
    table = matrixProgramAndPastLife(data.isPastLife);
  } else if (selectMatrix === "isHealth") {
    table = matrixDescription(data.isHealth);
  } else if (selectMatrix === "isPurpose20_40") {
    table = matrixDescription(data.isPurpose.isPurpose20_40);
  } else if (selectMatrix === "isPurpose40_60") {
    table = matrixDescription(data.isPurpose.isPurpose40_60);
  } else if (selectMatrix === "isGeneralPurpose") {
    table = matrixDescription(data.isPurpose.isGeneralPurpose);
  } else if (selectMatrix === "isPersonalPowerCode") {
    table = matrixDescription(data.isPersonalPowerCode);
  } else if (selectMatrix === "isChildren") {
    table = matrixDescription(data.isChildren);
  } else if (selectMatrix === "isManagement") {
    table = matrixDescription(data.isManagement);
  } else if (selectMatrix === "parentMenLine") {
    table = matrixDescription(data.isParents.parentMenLine);
  } else if (selectMatrix === "parentWomenLine") {
    table = matrixDescription(data.isParents.parentWomenLine);
  } else if (selectMatrix === "parentResentment") {
    table = matrixDescription(data.isParents.parentResentment);
  } else if (selectMatrix === "loveMen") {
    table = matrixDescription(data.isLove.loveMen);
  } else if (selectMatrix === "loveWomen") {
    table = matrixDescription(data.isLove.loveWomen);
  } else if (selectMatrix === "loveTotal") {
    table = matrixDescription(data.isLove.loveTotal);
  } else if (selectMatrix === "loveMenCharacter") {
    table = matrixDescription(data.isLove.loveMenCharacter);
  } else if (selectMatrix === "loveWomenCharacter") {
    table = matrixDescription(data.isLove.loveWomenCharacter);
  } else if (selectMatrix === "moneyLineOfActivity") {
    table = matrixDescription(data.isMoney.moneyLineOfActivity);
  } else if (selectMatrix === "moneySuccess") {
    table = matrixDescription(data.isMoney.moneySuccess);
  } else if (selectMatrix === "MoneyFlow") {
    table = matrixDescription(data.isMoney.MoneyFlow);
  } else if (selectMatrix === "isProgram") {
    table = matrixProgramAndPastLife(data.isProgram);
  } else if (selectMatrix === "isYear") {
    table = matrixDescription(data.isYear);
  }
  useEffect(() => {
    dispatch(getMatrixPersonalAdmin({ id }));
  }, []);
  return (
    <div>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel htmlFor="grouped-select">{nameCategory}</InputLabel>
        <Select
          onChange={handleChange}
          id="grouped-select"
          value={selectMatrix}
          label={nameCategory}
        >
          <ListSubheader>1. Личностные качества</ListSubheader>
          <MenuItem value={"isGeneral"}>-Общее</MenuItem>
          <MenuItem value={"isPositive"}>-В позитиве</MenuItem>
          <MenuItem value={"isNegative"}>-В негативе</MenuItem>
          <ListSubheader>2. Таланты</ListSubheader>
          <MenuItem value={"isTalentFromGod"}>-Талант от бога</MenuItem>
          <MenuItem value={"isTalentFromTheFather"}>-Талант от отца</MenuItem>
          <MenuItem value={"isMotherTalent"}>-Талант от матери</MenuItem>
          <ListSubheader>3. Прошлая жизнь</ListSubheader>
          <MenuItem value={"isPastLife"}>-Прошлая жизнь</MenuItem>
          <ListSubheader>4. Здоровье</ListSubheader>
          <MenuItem value={"isHealth"}>-Здоровье</MenuItem>
          <ListSubheader>5. Предназначение</ListSubheader>
          <MenuItem value={"isPurpose20_40"}>
            -Предназначение (20-40 лет)
          </MenuItem>
          <MenuItem value={"isPurpose40_60"}>
            -Предназначение (40-60 лет)
          </MenuItem>
          <MenuItem value={"isGeneralPurpose"}>
            -Предназначение (общие)
          </MenuItem>
          <ListSubheader>6. Код личной силы</ListSubheader>
          <MenuItem value={"isPersonalPowerCode"}>-Код личной силы</MenuItem>
          <ListSubheader>7. Отношения и любовь</ListSubheader>
          <MenuItem value={"loveMen"}>-Отношения у мужчин</MenuItem>
          <MenuItem value={"loveMenCharacter"}>
            -Характер партнёра у мужчин
          </MenuItem>
          <MenuItem value={"loveWomen"}>-Отношения у женщин</MenuItem>
          <MenuItem value={"loveWomenCharacter"}>
            -Характер партнёра у женщин
          </MenuItem>
          <MenuItem value={"loveTotal"}>-На выходе</MenuItem>
          <ListSubheader>8. Программы</ListSubheader>
          <MenuItem value={"isProgram"}>-Программы</MenuItem>
          <ListSubheader>9. Деньги</ListSubheader>
          <MenuItem value={"moneyLineOfActivity"}>
            -Направление деятельности
          </MenuItem>
          <MenuItem value={"moneySuccess"}>
            -Для достижения успеха важно
          </MenuItem>
          <MenuItem value={"MoneyFlow"}>-Как раскрыть денежный поток</MenuItem>
          <ListSubheader>10. Родители</ListSubheader>
          <MenuItem value={"parentMenLine"}>
            -Родовые программы по мужской линии
          </MenuItem>
          <MenuItem value={"parentWomenLine"}>
            -Родовые программы по женской линии
          </MenuItem>
          <MenuItem value={"parentResentment"}>-Обиды на родителей</MenuItem>
          <ListSubheader>11. Дети</ListSubheader>
          <MenuItem value={"isChildren"}>-Дети</MenuItem>
          <ListSubheader>12. Руководство</ListSubheader>
          <MenuItem value={"isManagement"}>-Руководство</MenuItem>
          <ListSubheader>13. Прогнозы по годам</ListSubheader>
          <MenuItem value={"isYear"}>-Прогнозы по годам</MenuItem>
        </Select>
      </FormControl>
      <div>
        <br />
        {table}
        <br />
      </div>
    </div>
  );
}
