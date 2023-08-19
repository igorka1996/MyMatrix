import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import {
  getMatrixChildrenAdmin,
  updateMatrixChildrenAdmin,
} from "../../redux-store/get-matrix-children";
import { Button, SelectChangeEvent } from "@mui/material";

type MatrixChildrenAdmin =
  | "isCharacteristicsOfQualities"
  | "isRecommendationsForParents"
  | "isChildInCommunication"
  | "isTalentsFomBirth"
  | "isTalentsInTheMaleLine"
  | "isTalentsInTheFemaleLine"
  | "isDirectionsOfHobbiesAndHobbyGroups"
  | "isWhatToConsiderWhenRaisingAChild"
  | "isLessonsOnTheGenderOfTheMaleLine"
  | "isLessonsOnTheGenderOfTheFemaleLine"
  | "isDirectionOfActivityOptionsForFutureProfessions"
  | "isForSuccessItIsImportant"
  | "isFirstPersonalPurpose"
  | "isSecondSocialPurpose"
  | "isSubconsciousScript"
  | "isYear";

type Category =
  | "isPersonalQualitiesChildren"
  | "isChildTalents"
  | "isRelationshipWithParents"
  | "isSelfRrealizationOfTheChild"
  | "isPurposeOfTheChild"
  | "isSubconsciousScript"
  | "isYear";

export function MatrixChildrenAdmin() {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.getMatrixChildren.id);
  const data = useAppSelector((state) => state.getMatrixChildren.data);
  const [num, setNum] = useState<number>(0);
  const [txt, setTxt] = useState<string>("");
  const [category, setCategory] = useState<Category>(
    "isPersonalQualitiesChildren"
  );
  console.log(data.isYear);
  const [nameCategory, setNameCategory] = useState("1. Личные качества");
  const [selectMatrix, setSelectMatrix] = useState<MatrixChildrenAdmin>(
    "isCharacteristicsOfQualities"
  );
  const onChangeTxt = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTxt(e.currentTarget.value);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSelectMatrix(event.target.value as MatrixChildrenAdmin);
    if (
      event.target.value === "isCharacteristicsOfQualities" ||
      event.target.value === "isRecommendationsForParents" ||
      event.target.value === "isChildInCommunication"
    ) {
      setNameCategory("1. Личные качества");
      setCategory("isPersonalQualitiesChildren");
    } else if (
      event.target.value === "isTalentsFomBirth" ||
      event.target.value === "isTalentsInTheMaleLine" ||
      event.target.value === "isTalentsInTheFemaleLine" ||
      event.target.value === "isDirectionsOfHobbiesAndHobbyGroups"
    ) {
      setNameCategory("2. Таланты ребенка");
      setCategory("isChildTalents");
    } else if (
      event.target.value === "isWhatToConsiderWhenRaisingAChild" ||
      event.target.value === "isLessonsOnTheGenderOfTheMaleLine" ||
      event.target.value === "isLessonsOnTheGenderOfTheFemaleLine"
    ) {
      setNameCategory("3. Отношения с родителями");
      setCategory("isRelationshipWithParents");
    } else if (
      event.target.value ===
        "isDirectionOfActivityOptionsForFutureProfessions" ||
      event.target.value === "isForSuccessItIsImportant"
    ) {
      setNameCategory("4. Самореализация ребенка");
      setCategory("isSelfRrealizationOfTheChild");
    } else if (
      event.target.value === "isFirstPersonalPurpose" ||
      event.target.value === "isSecondSocialPurpose"
    ) {
      setNameCategory("5. Предназначение ребенка");
      setCategory("isPurposeOfTheChild");
    } else if (event.target.value === "isSubconsciousScript") {
      setNameCategory("6. Подсознательный сценарий");
      setCategory("isSubconsciousScript");
    } else if (event.target.value === "isYear") {
      setNameCategory("7. Прогнозы по годам");
      setCategory("isYear");
    }
  };

  const onClickHandler = (
    index: number,
    description: string,
    id: string,
    name: string,
    category: string,
    gender?: string
  ) => {
    setNum(0);
    dispatch(
      updateMatrixChildrenAdmin({
        index,
        name,
        id,
        description,
        category,
        gender,
      })
    );
  };

  const onDoubleClickChange = (value: number, text: string) => {
    setTxt(text);
    setNum(value);
  };
  const matrixDescription = (arrDesc: any[]) => {
    return arrDesc.map((e: any, index) => {
      if (e.m || e.w) {
        return (
          <React.Fragment key={index}>
            {e.m && (
              <React.Fragment>
                <span>
                  <b>Мужчина</b>
                </span>
                <p className="descriptionAdmin">
                  {e.m.text
                    .split("\n")
                    .map((paragraph: string, idx: number) => (
                      <React.Fragment key={idx}>
                        {paragraph}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </React.Fragment>
            )}
            {e.w && (
              <React.Fragment>
                <span>
                  <b>Женщина</b>
                </span>
                <p className="descriptionAdmin">
                  {e.w.text
                    .split("\n")
                    .map((paragraph: string, idx: number) => (
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
                    onClickHandler(e.value, txt, id, selectMatrix, category)
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
                {e.text.split("\n").map((paragraph: string, idx: number) => (
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

  let table;
  if (selectMatrix === "isYear") {
    table = matrixDescription(data.isYear);
  } else if (selectMatrix === "isCharacteristicsOfQualities") {
    table = matrixDescription(
      data.isPersonalQualitiesChildren.isCharacteristicsOfQualities
    );
  } else if (selectMatrix === "isRecommendationsForParents") {
    table = matrixDescription(
      data.isPersonalQualitiesChildren.isRecommendationsForParents
    );
  } else if (selectMatrix === "isChildInCommunication") {
    table = matrixDescription(
      data.isPersonalQualitiesChildren.isChildInCommunication
    );
  } else if (selectMatrix === "isTalentsFomBirth") {
    table = matrixDescription(data.isChildTalents.isTalentsFomBirth);
  } else if (selectMatrix === "isTalentsInTheMaleLine") {
    table = matrixDescription(data.isChildTalents.isTalentsInTheMaleLine);
  } else if (selectMatrix === "isTalentsInTheFemaleLine") {
    table = matrixDescription(data.isChildTalents.isTalentsInTheFemaleLine);
  } else if (selectMatrix === "isDirectionsOfHobbiesAndHobbyGroups") {
    table = matrixDescription(
      data.isChildTalents.isDirectionsOfHobbiesAndHobbyGroups
    );
  } else if (selectMatrix === "isWhatToConsiderWhenRaisingAChild") {
    table = matrixDescription(
      data.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild
    );
  } else if (selectMatrix === "isLessonsOnTheGenderOfTheMaleLine") {
    table = matrixDescription(
      data.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine
    );
  } else if (selectMatrix === "isLessonsOnTheGenderOfTheFemaleLine") {
    table = matrixDescription(
      data.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine
    );
  } else if (
    selectMatrix === "isDirectionOfActivityOptionsForFutureProfessions"
  ) {
    table = matrixDescription(
      data.isSelfRrealizationOfTheChild
        .isDirectionOfActivityOptionsForFutureProfessions
    );
  } else if (selectMatrix === "isForSuccessItIsImportant") {
    table = matrixDescription(
      data.isSelfRrealizationOfTheChild.isForSuccessItIsImportant
    );
  } else if (selectMatrix === "isFirstPersonalPurpose") {
    table = matrixDescription(data.isPurposeOfTheChild.isFirstPersonalPurpose);
  } else if (selectMatrix === "isSecondSocialPurpose") {
    table = matrixDescription(data.isPurposeOfTheChild.isSecondSocialPurpose);
  } else if (selectMatrix === "isSubconsciousScript") {
    table = matrixDescription(data.isSubconsciousScript);
  }
  useEffect(() => {
    dispatch(getMatrixChildrenAdmin({ id }));
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
          <ListSubheader data-group={"isPersonalQualitiesChildren"}>
            1. Личные качества
          </ListSubheader>
          <MenuItem value={"isCharacteristicsOfQualities"}>
            -Характеристика качеств
          </MenuItem>
          <MenuItem value={"isRecommendationsForParents"}>
            -Рекомендации для родителей
          </MenuItem>
          <MenuItem value={"isChildInCommunication"}>
            -Ребенок в общении
          </MenuItem>
          <ListSubheader aria-valuetext={"isChildTalents"}>
            2. Таланты ребенка
          </ListSubheader>
          <MenuItem value={"isTalentsFomBirth"}>-Талант от рождения</MenuItem>
          <MenuItem value={"isTalentsInTheMaleLine"}>
            -Таланты по мужской линии
          </MenuItem>
          <MenuItem value={"isTalentsInTheFemaleLine"}>
            -Таланты по женской линии
          </MenuItem>
          <MenuItem value={"isDirectionsOfHobbiesAndHobbyGroups"}>
            -Направления увлечений, хобби и кружков по интересам
          </MenuItem>
          <ListSubheader data-group={"isRelationshipWithParents"}>
            3. Отношения с родителями
          </ListSubheader>
          <MenuItem value={"isWhatToConsiderWhenRaisingAChild"}>
            -Что нужно учитывать в вопросах воспитания ребенка
          </MenuItem>
          <MenuItem value={"isLessonsOnTheGenderOfTheMaleLine"}>
            -Уроки по роду мужской линии
          </MenuItem>
          <MenuItem value={"isLessonsOnTheGenderOfTheFemaleLine"}>
            -Уроки по роду женской линии
          </MenuItem>
          <ListSubheader data-group={"isSelfRrealizationOfTheChild"}>
            4. Самореализация ребенка
          </ListSubheader>
          <MenuItem value={"isDirectionOfActivityOptionsForFutureProfessions"}>
            -Направление деятельности, варианты будущих профессий
          </MenuItem>
          <MenuItem value={"isForSuccessItIsImportant"}>
            -Для достижения успеха важно
          </MenuItem>
          <ListSubheader data-group={"isPurposeOfTheChild"}>
            5. Предназначение ребенка
          </ListSubheader>
          <MenuItem value={"isFirstPersonalPurpose"}>
            -Первое, личное предназначение
          </MenuItem>
          <MenuItem value={"isSecondSocialPurpose"}>
            -Второе, социальное предназначение
          </MenuItem>
          <ListSubheader data-group={"isSubconsciousScript"}>
            6. Подсознательный сценарий
          </ListSubheader>
          <MenuItem value={"isSubconsciousScript"}>
            -Подсознательные страхи и блоки
          </MenuItem>
          <ListSubheader data-group={"isYear"}>
            7. Прогнозы по годам
          </ListSubheader>
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
