import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { getMatrixChildrenAdmin } from "../../redux-store/get-matrix-children";
import { SelectChangeEvent } from "@mui/material";

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
  const [category, setCategory] = useState<Category>(
    "isPersonalQualitiesChildren"
  );
  console.log(data.isYear);
  const [nameCategory, setNameCategory] = useState("1. Личные качества");
  const [selectMatrix, setSelectMatrix] = useState<MatrixChildrenAdmin>(
    "isCharacteristicsOfQualities"
  );

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
          <p className="descriptionAdmin" key={index}>
            {e.text.split("\n").map((paragraph: string, idx: number) => (
              <React.Fragment key={idx}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </p>
        );
      }
    });
  };

  // const matrixDescription = (arrDesc: []) => {
  //   return arrDesc.map((e: any, index) => {
  //     return index === 3 || index === 4 ? (
  //       <React.Fragment key={index}>
  //         <span>
  //           <b>{e.m ? "Мужчина" : "Женщина"}</b>
  //         </span>
  //         <p className={"descriptionAdmin"}>
  //           <React.Fragment key={index}>
  //             {e?.m?.text?.split("\n").map((paragraph: string) => (
  //               <React.Fragment>
  //                 {paragraph}
  //                 <br />
  //               </React.Fragment>
  //             ))}
  //             <br />
  //           </React.Fragment>
  //         </p>
  //         <span>
  //           <b>{e.m ? "Мужчина" : "Женщина"}</b>
  //         </span>
  //         <p className={"descriptionAdmin"}>
  //           <React.Fragment key={index}>
  //             {e?.w?.text?.split("\n").map((paragraph: string) => (
  //               <React.Fragment>
  //                 {paragraph}
  //                 <br />
  //               </React.Fragment>
  //             ))}
  //             <br />
  //           </React.Fragment>
  //         </p>
  //       </React.Fragment>
  //     ) : (
  //       <React.Fragment key={index}>
  //         <p className={"descriptionAdmin"}>
  //           <React.Fragment key={index}>
  //             {e?.text?.split("\n").map((paragraph: string) => (
  //               <React.Fragment>
  //                 {paragraph}
  //                 <br />
  //               </React.Fragment>
  //             ))}
  //             <br />
  //           </React.Fragment>
  //         </p>
  //       </React.Fragment>
  //     );
  //   });
  // };
  let table;
  if (selectMatrix === "isYear") {
    table = matrixDescription(data.isYear);
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
