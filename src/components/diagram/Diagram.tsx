import React, { useState } from "react";
import "./diagram.scss";
import { DatePicker } from "../../feature/DatePicker";
import { SimpleAccordion } from "../../feature/SimpleAccordion";

export const Diagram = () => {
  const [birthday, setBirthday] = useState<string>("0000-00-00");

  const birthdayArray = birthday.split("-");
  let A = calculation(parseInt(birthdayArray[2]));
  let B = calculation(parseInt(birthdayArray[1]));
  let C = calculation(parseInt(birthdayArray[0]));

  let D = calculation(A + B + C);
  let X = calculation(A + B + C + D);
  let B2 = calculation(B + X);
  let B1 = calculation(B + B2);
  let B3 = calculation(B2 + X);
  let F = calculation(B + C);
  let H = calculation(D + A);
  let G = calculation(C + D);
  let E = calculation(A + B);
  let Y = calculation(E + F + G + H);
  let F2 = calculation(F + Y);
  let F1 = calculation(F + F2);
  let E2 = calculation(E + Y);
  let E1 = calculation(E + E2);
  let A2 = calculation(A + X);
  let A1 = calculation(A + A2);
  let A3 = calculation(A2 + X);
  let C2 = calculation(C + X);
  let C1 = calculation(C + C2);
  let D2 = calculation(D + X);
  let G4 = calculation(C2 + D2);
  let M = calculation(G4 + C2);
  let L = calculation(D2 + G4);
  let G2 = calculation(G + Y);
  let XY = calculation(X + Y);
  let G1 = calculation(G2 + G);
  let D1 = calculation(D + D2);
  let H2 = calculation(H + Y);
  let H1 = calculation(H + H2);
  let K1 = calculation(D + C);
  let K2 = calculation(D2 + C2);
  let K3 = calculation(X + X);
  let K4 = calculation(B3 + A3);
  let K5 = calculation(B2 + A2);
  let K6 = calculation(B1 + A1);
  let I5 = calculation(D2 + C2);
  let T1 = calculation(D + D2 + B3 + X + B1 + B2 + B);
  let T2 = calculation(A + A1 + A2 + A3 + X + C2 + C);
  let T3 = calculation(E + K6 + K5 + K4 + K3 + K2 + K1);
  let LN = calculation(B + D);
  let LZ = calculation(A + C);
  let LP1 = calculation(LN + LZ);
  let LO = calculation(E + G);
  let LM = calculation(F + H);
  let YM = calculation(LO + LM);
  let DG = calculation(YM + LP1);
  let FH = calculation(F + H);
  let EG = calculation(E + G);
  let BF = calculation(B + F);
  let BFB = calculation(B + BF);
  let BFBBF = calculation(BF + BFB);
  let BFBF = calculation(B + BFB);
  let BFF = calculation(BF + F);
  let BFFBF = calculation(BF + BFF);
  let BFFF = calculation(F + BFF);
  let FC = calculation(F + C);
  let FCF = calculation(FC + F);
  let FCFFC = calculation(FCF + FC);
  let FCFF = calculation(FCF + F);
  let FCC = calculation(FC + C);
  let FCCFC = calculation(FCC + FC);
  let FCCC = calculation(FCC + C);
  let CG = calculation(C + G);
  let CGC = calculation(CG + C);
  let CGCC = calculation(CGC + C);
  let CGCCG = calculation(CGC + CG);
  let CGG = calculation(CG + G);
  let CGGCG = calculation(CGG + CG);
  let CGGG = calculation(CGG + G);
  let GD = calculation(G + D);
  let GDG = calculation(GD + G);
  let GDGG = calculation(GDG + G);
  let GDGGD = calculation(GDG + GD);
  let GDD = calculation(GD + D);
  let GDDGD = calculation(GDD + GD);
  let GDDD = calculation(GDD + D);
  let DH = calculation(D + H);
  let DHD = calculation(DH + D);
  let DHDD = calculation(DHD + D);
  let DHDDH = calculation(DHD + DH);
  let DHH = calculation(DH + H);
  let DHHDH = calculation(DHH + DH);
  let DHHH = calculation(DHH + H);
  let HA = calculation(H + A);
  let HAH = calculation(HA + H);
  let HAHH = calculation(HAH + H);
  let HAHHA = calculation(HAH + HA);
  let HAA = calculation(HA + A);
  let HAAHA = calculation(HAA + HA);
  let HAAA = calculation(HAA + A);
  let AE = calculation(A + E);
  let AEA = calculation(AE + A);
  let AEAA = calculation(AEA + A);
  let AEAAE = calculation(AEA + AE);
  let AEE = calculation(AE + E);
  let AEEAE = calculation(AEE + AE);
  let AEEE = calculation(AEE + E);
  let EB = calculation(E + B);
  let EBE = calculation(EB + E);
  let EBEE = calculation(EBE + E);
  let EBEEB = calculation(EBE + EB);
  let EBB = calculation(EB + B);
  let EBBEB = calculation(EBB + EB);
  let EBBB = calculation(EBB + B);

  function calculation(number: number): number {
    let sumNumber = number
      .toString()
      .split("")
      .reduce((previousValue, currentValue) =>
        String(parseInt(previousValue) + parseInt(currentValue))
      );
    while (number > 22 || parseInt(sumNumber) > 22) {
      number = parseInt(
        number
          .toString()
          .split("")
          .reduce((previousValue, currentValue) =>
            String(parseInt(previousValue) + parseInt(currentValue))
          )
      );
      if (number > 22) {
        number = parseInt(
          number
            .toString()
            .split("")
            .reduce((previousValue, currentValue) =>
              String(parseInt(previousValue) + parseInt(currentValue))
            )
        );
      }
      return number;
    }
    return number;
  }

  //Talents
  let E_duplicate = E;
  let E1_duplicate = E1;
  let E2_duplicate = E2;

  let F_duplicate = F;
  let F1_duplicate = F1;
  let F2_duplicate = F2;

  if (E === B || E === B1 || E === B2) {
    E_duplicate = 0;
  }

  if (E1 === B || E1 === B1 || E2 === B2) {
    E1_duplicate = 0;
  }

  if (E2 === B || E2 === B1 || E2 === B2) {
    E2_duplicate = 0;
  }

  if (F === B || F === B1 || F === B2 || F === E || F === E1 || F === E2) {
    F_duplicate = 0;
  }

  if (
    F1 === B ||
    F1 === B1 ||
    F1 === B2 ||
    F1 === E ||
    F1 === E1 ||
    F1 === E2
  ) {
    F1_duplicate = 0;
  }

  if (
    F2 === B ||
    F2 === B1 ||
    F2 === B2 ||
    F2 === E ||
    F2 === E1 ||
    F2 === E2
  ) {
    F2_duplicate = 0;
  }

  //Health
  let B1_duplicate = B1;
  let A1_duplicate = A1;
  let K6_duplicate = K6;

  let B2_duplicate = B2;
  let A2_duplicate = A2;
  let K5_duplicate = K5;

  let B3_duplicate = B3;
  let A3_duplicate = A3;
  let K4_duplicate = K4;

  let X_duplicate = X;
  let Y_duplicate = Y;
  let K3_duplicate = K3;

  let D1_duplicate = D1;
  let C1_duplicate = C1;
  let K2_duplicate = K2;

  let D_duplicate = D;
  let C_duplicate = C;
  let K1_duplicate = K1;

  if (B1 === B || B1 === A || B1 === E) {
    B1_duplicate = 0;
  }

  if (A1 === B || A1 === A || A1 === E) {
    A1_duplicate = 0;
  }

  if (K6 === B || K6 === A || K6 === E) {
    K6_duplicate = 0;
  }

  if (B2 === B || B2 === A || B2 === E || B2 === B1 || B2 === A1 || B2 === K6) {
    B2_duplicate = 0;
  }

  if (A2 === B || A2 === A || A2 === E || A2 === B1 || A2 === A1 || A2 === K6) {
    A2_duplicate = 0;
  }

  if (K5 === B || K5 === A || K5 === E || K5 === B1 || K5 === A1 || K5 === K6) {
    K5_duplicate = 0;
  }

  if (
    B3 === B ||
    B3 === A ||
    B3 === E ||
    B3 === B1 ||
    B3 === A1 ||
    B3 === K6 ||
    B3 === B2 ||
    B3 === A2 ||
    B3 === K5
  ) {
    B3_duplicate = 0;
  }

  if (
    A3 === B ||
    A3 === A ||
    A3 === E ||
    A3 === B1 ||
    A3 === A1 ||
    A3 === K6 ||
    A3 === B2 ||
    A3 === A2 ||
    A3 === K5
  ) {
    A3_duplicate = 0;
  }

  if (
    K4 === B ||
    K4 === A ||
    K4 === E ||
    K4 === B1 ||
    K4 === A1 ||
    K4 === K6 ||
    K4 === B2 ||
    K4 === A2 ||
    K4 === K5
  ) {
    K4_duplicate = 0;
  }

  if (
    X === B ||
    X === A ||
    X === E ||
    X === B1 ||
    X === A1 ||
    X === K6 ||
    X === B2 ||
    X === A2 ||
    X === K5 ||
    X === B3 ||
    X === A3 ||
    X === K4
  ) {
    X_duplicate = 0;
  }

  if (
    Y === B ||
    Y === A ||
    Y === E ||
    Y === B1 ||
    Y === A1 ||
    Y === K6 ||
    Y === B2 ||
    Y === A2 ||
    Y === K5 ||
    Y === B3 ||
    Y === A3 ||
    Y === K4
  ) {
    Y_duplicate = 0;
  }

  if (
    K3 === B ||
    K3 === A ||
    K3 === E ||
    K3 === B1 ||
    K3 === A1 ||
    K3 === K6 ||
    K3 === B2 ||
    K3 === A2 ||
    K3 === K5 ||
    K3 === B3 ||
    K3 === A3 ||
    K3 === K4 ||
    Y === K3
  ) {
    K3_duplicate = 0;
  }

  if (
    D1 === B ||
    D1 === A ||
    D1 === E ||
    D1 === B1 ||
    D1 === A1 ||
    D1 === K6 ||
    D1 === B2 ||
    D1 === A2 ||
    D1 === K5 ||
    D1 === B3 ||
    D1 === A3 ||
    D1 === K4 ||
    D1 === X ||
    D1 === Y ||
    D1 === K3
  ) {
    D1_duplicate = 0;
  }

  if (
    C1 === B ||
    C1 === A ||
    C1 === E ||
    C1 === B1 ||
    C1 === A1 ||
    C1 === K6 ||
    C1 === B2 ||
    C1 === A2 ||
    C1 === K5 ||
    C1 === B3 ||
    C1 === A3 ||
    C1 === K4 ||
    C1 === X ||
    C1 === Y ||
    C1 === K3
  ) {
    C1_duplicate = 0;
  }

  if (
    K2 === B ||
    K2 === A ||
    K2 === E ||
    K2 === B1 ||
    K2 === A1 ||
    K2 === K6 ||
    K2 === B2 ||
    K2 === A2 ||
    K2 === K5 ||
    K2 === B3 ||
    K2 === A3 ||
    K2 === K4 ||
    K2 === X ||
    K2 === Y ||
    K2 === K3
  ) {
    K2_duplicate = 0;
  }

  if (
    D === B ||
    D === A ||
    D === E ||
    D === B1 ||
    D === A1 ||
    D === K6 ||
    D === B2 ||
    D === A2 ||
    D === K5 ||
    D === B3 ||
    D === A3 ||
    D === K4 ||
    D === X ||
    D === Y ||
    D === K3 ||
    D === D1 ||
    D === C1 ||
    D === K2
  ) {
    D_duplicate = 0;
  }

  if (
    C === B ||
    C === A ||
    C === E ||
    C === B1 ||
    C === A1 ||
    C === K6 ||
    C === B2 ||
    C === A2 ||
    C === K5 ||
    C === B3 ||
    C === A3 ||
    C === K4 ||
    C === X ||
    C === Y ||
    C === K3 ||
    C === D1 ||
    C === C1 ||
    C === K2
  ) {
    C_duplicate = 0;
  }

  if (
    K1 === B ||
    K1 === A ||
    K1 === E ||
    K1 === B1 ||
    K1 === A1 ||
    K1 === K6 ||
    K1 === B2 ||
    K1 === A2 ||
    K1 === K5 ||
    K1 === B3 ||
    K1 === A3 ||
    K1 === K4 ||
    K1 === X ||
    K1 === Y ||
    K1 === K3 ||
    K1 === D1 ||
    K1 === C1 ||
    K1 === K2
  ) {
    K1_duplicate = 0;
  }

  //Purpose
  let LP2 = calculation(E + G + H + F);
  let LP3 = calculation(LP1 + Y);
  if (G1 === G2) {
    G2 = 0;
  }
  return (
    <>
      <DatePicker
        isPersonalQualities={[A, B, X]}
        talentsOfDad={[E_duplicate, E1_duplicate, E2_duplicate]}
        talentsOfMother={[F_duplicate, F1_duplicate, F2_duplicate]}
        talentsOfGod={[B, B1, B2]}
        isPastLife={`${D2}-${D1}-${D}`}
        IsHealthSaxasrara={[B, A, E]}
        IsHealthAdjna={[B1_duplicate, A1_duplicate, K6_duplicate]}
        IsHealthVishydha={[B2_duplicate, A2_duplicate, K5_duplicate]}
        IsHealthAnaxata={[B3_duplicate, A3_duplicate, K4_duplicate]}
        IsHealthManipura={[X_duplicate, Y_duplicate, K3_duplicate]}
        IsHealthMuladxara={[D_duplicate, C_duplicate, K1_duplicate]}
        isHealthSvadxistana={[D1_duplicate, C1_duplicate, K2_duplicate]}
        IsPurpose={[LP1, LP2, LP3]}
        IsTests={X}
        isLove={[D2, L, G4]}
        isMoney={[M, G4, C2, C, C1]}
        parentMenLine={[E, E1, E2, X, G, G1, G2]}
        parentWomenLine={[F, F1, F2, X, H, H1, H2]}
        parentResentment={[A, A1, A2]}
        isChildren={[A, A1, A2]}
        isManagement={[A, B, X]}
        setBirthday={setBirthday}
      />
      <section className="section-with-diagram section pb-0 js-section-with-diagram">
        <div className="h2 section-with-diagram__title">
          Персональный расчет
        </div>
        <div className="section-with-diagram__top-content">
          <div className="section-with-diagram__col-with-table">
            <div className="h5 section-with-diagram__table-title">
              Карта здоровья
            </div>
            <table className="section-with-diagram__table table health-table js-health-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Название Чакры</th>
                  <th scope="col">Физика</th>
                  <th scope="col">Энергия</th>
                  <th scope="col">Эмоции</th>
                </tr>
              </thead>
              <tbody>
                <tr className="-purple-row" data-row-number="1">
                  <th scope="row">1</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Сахасрара
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние волос, мозга и верхней части черепа."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">Миссия</div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="a"
                  >
                    {A}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="b"
                  >
                    {B}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l"
                  >
                    {E}
                  </td>
                </tr>
                <tr className="-blue-row" data-row-number="2">
                  <th scope="row">2</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Аджна
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние глаз, ушей, лица, щитовидки, плечей и рук."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">Судьба, эгрегоры</div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="a2"
                  >
                    {A1}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="b2"
                  >
                    {B1}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l1"
                  >
                    {K6}
                  </td>
                </tr>
                <tr className="-cyan-row" data-row-number="3">
                  <th scope="row">3</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Вишудха
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние горла, нижней челюсти, щитовидки, плечей и рук."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">Судьба, эгрегоры</div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="a1"
                  >
                    {A2}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="b1"
                  >
                    {B2}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l2"
                  >
                    {K5}
                  </td>
                </tr>
                <tr className="-green-row" data-row-number="4">
                  <th scope="row">4</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Анахата
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние сердца, легких, бронхов, ребер и груди."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">
                      Отношения, картина мира
                    </div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="a3"
                  >
                    {A3}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="b3"
                  >
                    {B3}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l3"
                  >
                    {K4}
                  </td>
                </tr>
                <tr className="-yellow-row" data-row-number="5">
                  <th scope="row">5</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Манипура
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние середины позвоночника, ЖКЕ и печени."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">Статус, владение</div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="e"
                  >
                    {X}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="e"
                  >
                    {X}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l4"
                  >
                    {K3}
                  </td>
                </tr>
                <tr className="-orange-row" data-row-number="6">
                  <th scope="row">6</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Свадхистана
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние почек, толстого кишечника, надпочечников и половых органов."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">
                      Детская любовь и радость
                    </div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="c1"
                  >
                    {C2}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="d1"
                  >
                    {D2}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l5"
                  >
                    {I5}
                  </td>
                </tr>
                <tr className="-red-row" data-row-number="7">
                  <th scope="row">7</th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Муладхара
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние ног, ануса, крестеца и мочеполовой системы."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">Тело, материя</div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="c"
                  >
                    {C}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="d"
                  >
                    {D}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="l6"
                  >
                    {K1}
                  </td>
                </tr>
                <tr className="-gray-row" data-row-number="8">
                  <th scope="row"></th>
                  <td>
                    <div className="h5 table-title-with-prompt">
                      <span className="table-title-with-prompt__text">
                        Итог
                      </span>
                      <i
                        className="table-title-with-prompt__icon icomoon-prompt js-popover"
                        data-content="Отвечает за состояние костной, лимфатической, кровеносной систем и за лишний вес."
                        data-original-title=""
                        title=""
                      ></i>
                    </div>
                    <div className="h6 table-sub-title">Общее энергополе</div>
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="d3"
                  >
                    {T2}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="c3"
                  >
                    {T1}
                  </td>
                  <td
                    className="js-personal-calculation-item"
                    data-personal-calculation-position="e3"
                  >
                    {T3}
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="diagram-values-list">
              <li className="diagram-values-list__item">
                <div className="diagram-values-item-horizontal">
                  <div className="h6 diagram-values-item-horizontal__title">
                    Родовые программы по мужской линии:
                  </div>
                  <ul className="diagram-values-item-horizontal__values round-values-list">
                    <li
                      style={{ listStyleType: "none" }}
                      className="round-values-list__item"
                    >
                      <div
                        className="diagram-value js-personal-calculation-item"
                        data-personal-calculation-position="f"
                      >
                        {E}
                      </div>
                    </li>
                    <li
                      style={{ listStyleType: "none" }}
                      className="round-values-list__item"
                    >
                      <div
                        className="diagram-value js-personal-calculation-item"
                        data-personal-calculation-position="y"
                      >
                        {G}
                      </div>
                    </li>
                    <li
                      style={{ listStyleType: "none" }}
                      className="round-values-list__item"
                    >
                      <div
                        className="diagram-value js-personal-calculation-item"
                        data-personal-calculation-position="o"
                      >
                        {EG}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="diagram-values-list__item">
                <div className="diagram-values-item-horizontal">
                  <div className="h6 diagram-values-item-horizontal__title">
                    Родовые программы по женской линии:
                  </div>
                  <ul className="diagram-values-item-horizontal__values round-values-list">
                    <li
                      style={{ listStyleType: "none" }}
                      className="round-values-list__item"
                    >
                      <div
                        className="diagram-value js-personal-calculation-item"
                        data-personal-calculation-position="g"
                      >
                        {F}
                      </div>
                    </li>
                    <li
                      style={{ listStyleType: "none" }}
                      className="round-values-list__item"
                    >
                      <div
                        className="diagram-value js-personal-calculation-item"
                        data-personal-calculation-position="k"
                      >
                        {H}
                      </div>
                    </li>
                    <li
                      style={{ listStyleType: "none" }}
                      className="round-values-list__item"
                    >
                      <div
                        className="diagram-value js-personal-calculation-item"
                        data-personal-calculation-position="u"
                      >
                        {FH}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="section-with-diagram__col-with-diagram">
            <div className="section-with-diagram__matrix-diagram">
              <div className="matrix-diagram">
                <div className="matrix-diagram__svg">
                  <svg
                    viewBox="0 0 1617 1617"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1616.74 0H0v1616.74h1616.74V0z"
                      fill="#fff"
                    ></path>
                    <path
                      opacity=".5"
                      d="M1607 0H0v1617h1607V0z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1553.42 810.179l-1490.193-.497v-1.854l1490.193.497v1.854z"
                      fill="#222831"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M808.324 1553.29V63.348h1.854V1553.29h-1.854z"
                      fill="#222831"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1336.21 282.635L282.422 1335.99l-1.311-1.31L1334.9 281.324l1.31 1.311z"
                      fill="#222831"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1334.22 1336.07L280.638 282.334l1.311-1.311L1335.53 1334.76l-1.31 1.31zM1261.38 812.451l3.27-3.252 1.31 1.315-3.27 3.252-1.31-1.315zm-13.06 13.006l6.53-6.504 1.31 1.315-6.53 6.504-1.31-1.315zm-13.06 13.007l6.53-6.504 1.31 1.314-6.54 6.504-1.3-1.314zm-13.07 13.006l6.53-6.504 1.31 1.314-6.53 6.504-1.31-1.314zm-13.06 13.006l6.53-6.502 1.31 1.313-6.53 6.504-1.31-1.315zm-13.06 13.006l6.53-6.502 1.31 1.313-6.54 6.504-1.3-1.315zM1183 890.489l6.53-6.503 1.31 1.313-6.53 6.504-1.31-1.314zm-13.06 13.006l6.53-6.502 1.31 1.312-6.53 6.504-1.31-1.314zm-13.07 13.006l6.54-6.502 1.3 1.313-6.53 6.504-1.31-1.315zm-13.06 13.006l6.53-6.502 1.31 1.313-6.53 6.504-1.31-1.315zm-13.06 13.007l6.53-6.503 1.31 1.313-6.53 6.504-1.31-1.314zm-13.07 13.006l6.54-6.502 1.3 1.314-6.53 6.502-1.31-1.314zm-13.06 13.006l6.53-6.502 1.31 1.314-6.53 6.503-1.31-1.315zm-13.06 13.006l6.53-6.502 1.31 1.315-6.54 6.502-1.3-1.315zm-13.07 13.008l6.54-6.504 1.3 1.315-6.53 6.502-1.31-1.313zm-13.06 13.01l6.53-6.51 1.31 1.32-6.53 6.5-1.31-1.31zm-13.06 13l6.53-6.5 1.31 1.31-6.53 6.51-1.31-1.32zm-13.07 13.01l6.53-6.5 1.31 1.31-6.53 6.5-1.31-1.31zm-13.06 13.01l6.53-6.51 1.31 1.32-6.53 6.5-1.31-1.31zm-13.06 13l6.53-6.5 1.31 1.31-6.54 6.5-1.3-1.31zm-13.07 13.01l6.53-6.51 1.31 1.32-6.53 6.5-1.31-1.31zm-13.061 13l6.532-6.5 1.307 1.31-6.531 6.51-1.308-1.32zm-13.063 13.01l6.532-6.5 1.309 1.31-6.532 6.5-1.309-1.31zm-13.064 13.01l6.532-6.51 1.309 1.32-6.532 6.5-1.309-1.31zm-13.064 13l6.532-6.5 1.309 1.31-6.532 6.51-1.309-1.32zm-13.063 13.01l6.531-6.51 1.309 1.32-6.531 6.5-1.309-1.31zm-13.062 13.01l6.53-6.51 1.309 1.32-6.532 6.5-1.307-1.31zm-13.064 13l6.532-6.5 1.307 1.31-6.532 6.51-1.307-1.32zm-13.064 13.01l6.532-6.5 1.307 1.31-6.532 6.5-1.307-1.31zm-13.063 13l6.532-6.5 1.307 1.31-6.532 6.51-1.307-1.32zm-13.064 13.01l6.532-6.5 1.307 1.31-6.532 6.5-1.307-1.31zm-13.064 13.01l6.532-6.51 1.309 1.32-6.532 6.5-1.309-1.31zm-13.063 13l6.531-6.5 1.309 1.31-6.531 6.51-1.309-1.32zm-13.064 13.01l6.532-6.5 1.309 1.31-6.532 6.5-1.309-1.31zm-13.064 13.01l6.532-6.51 1.309 1.32-6.532 6.5-1.309-1.31zm-9.797 9.75l3.265-3.25 1.309 1.31-3.265 3.25-1.309-1.31z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M512 513l24.264 6.156a26.742 26.742 0 00-9.125 4.776L762 758.792 757.792 763l-234.86-234.861a26.707 26.707 0 00-4.776 9.125L512 513zM1105 1105l-24.31-6.17c3.26-.97 6.37-2.56 9.14-4.79L855 859.215l4.215-4.215 234.835 234.83c2.22-2.77 3.82-5.88 4.78-9.14L1105 1105z"
                      fill="#8A46A3"
                    ></path>
                    <path
                      d="M1103 513l-6.11 24.066a26.36 26.36 0 00-4.73-9.05L857.172 763 853 758.828l234.99-234.984a26.556 26.556 0 00-9.05-4.737L1103 513zM512 1106l6.192-24.41a26.9 26.9 0 004.804 9.18L757.767 856l4.233 4.231L527.229 1095a26.748 26.748 0 009.177 4.81L512 1106z"
                      fill="#EF4141"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1303.7 264.784L842.379 73.697a88.99 88.99 0 00-68.112 0L312.945 264.784a88.992 88.992 0 00-48.165 48.163L73.695 774.268a88.998 88.998 0 000 68.115L264.78 1303.7a89.02 89.02 0 0048.165 48.17l461.322 191.08a88.922 88.922 0 0068.112 0l461.321-191.08a89.042 89.042 0 0048.17-48.17l191.08-461.317a89.02 89.02 0 000-68.115l-191.08-461.321a89.013 89.013 0 00-48.17-48.163zM843.799 70.271a92.706 92.706 0 00-70.953 0L311.525 261.358a92.687 92.687 0 00-50.169 50.17L70.269 772.85a92.7 92.7 0 000 70.951l191.087 461.319a92.684 92.684 0 0050.169 50.17l461.321 191.09a92.695 92.695 0 0070.953 0l461.321-191.09a92.676 92.676 0 0050.17-50.17l191.09-461.319a92.69 92.69 0 000-70.951l-191.09-461.322a92.679 92.679 0 00-50.17-50.17L843.799 70.271z"
                      fill="#222831"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M808.324 159.402l648.926 648.922-648.926 648.916-648.922-648.916 648.922-648.922zM167.268 808.324l641.056 641.056 641.056-641.056-641.056-641.055-641.056 641.055z"
                      fill="#222831"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1267.18 349.465v917.715H349.466V349.465h917.714zm-912.152 5.562v906.593h906.592V355.027H355.028z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M575.2 537.894l-9.697 9.697-1.667-1.667 8.327-8.325-3.299-3.298-3.826 3.432c-1.775 1.559-3.247 2.471-4.419 2.733-1.164.269-2.252-.071-3.263-1.022l-.662-.662 1.461-1.461.51.44c.597.476 1.294.552 2.088.222.795-.328 1.984-1.218 3.567-2.67l4.329-3.969 6.551 6.55zM584.137 546.829l1.657 1.659-9.697 9.697-1.657-1.66 7.069-7.069-11.543 2.597-1.657-1.657 9.696-9.697 1.66 1.658-7.081 7.08 11.553-2.608zM586.68 568.769l-1.657-1.657 4.14-4.14-4.454-4.456-4.14 4.142-1.667-1.666 9.697-9.699 1.667 1.669-4.203 4.203 4.453 4.453 4.203-4.203 1.66 1.658-9.699 9.696zM605.323 568.016l1.657 1.658-9.696 9.698-1.66-1.659 7.072-7.07-11.544 2.598-1.657-1.658 9.696-9.696 1.66 1.657-7.081 7.081 11.553-2.609zM617.054 579.748l-9.697 9.697-1.667-1.667 3.773-3.773-2.501-2.501-6.057 1.487-1.793-1.791 6.461-1.587c-.395-.85-.523-1.677-.385-2.483.15-.807.541-1.526 1.173-2.16.885-.884 1.928-1.263 3.128-1.138 1.207.12 2.37.732 3.488 1.837l4.077 4.079zm-9.043-3.093c-.472.473-.693 1.016-.663 1.632.035.608.317 1.183.841 1.72l2.635 2.635 3.219-3.217-2.385-2.384c-.615-.616-1.257-.953-1.926-1.012-.664-.067-1.237.142-1.721.626zM622.35 600.045l10.798-4.203 2.071 2.071-9.696 9.697-1.658-1.659 7.053-7.053-10.19 3.917-1.148-1.147 4.007-10.405-7.207 7.205-1.657-1.658 9.696-9.697 2.151 2.151-4.22 10.781zM633.794 611.024l9.528-5.009 1.774 1.774-15.092 7.296c-2.218 1.01-3.983.856-5.297-.458l-.287-.339-.501-.737 1.344-1.344.412.484c.562.562 1.11.885 1.648.968.545.091 1.22-.065 2.026-.465l1.354-.618 6.129-13.049 1.81 1.81-4.848 9.687zM648.832 622.498l-1.164-1.166-4.213 4.213-1.657-1.658 4.212-4.212-1.166-1.165-6.927 1.497-2.097-2.097 8.486-1.552 1.543-7.815 2.006 2.008-1.513 6.515 1.137 1.138 4.016-4.014 1.657 1.658-4.014 4.014 1.129 1.129 6.534-1.496 2.006 2.008-7.832 1.541-1.542 8.478-2.097-2.097 1.496-6.927zM655.824 635.561c.591.591 1.286.929 2.087 1.012.801.084 1.495-.119 2.079-.608l1.568 1.569c-.586.524-1.305.862-2.16 1.012-.853.148-1.726.078-2.616-.215a5.739 5.739 0 01-2.312-1.417c-1.32-1.32-1.934-2.81-1.837-4.472.107-1.661.925-3.255 2.455-4.785l.278-.278c.943-.944 1.958-1.611 3.039-1.999 1.08-.387 2.147-.463 3.198-.224 1.058.245 2.028.81 2.913 1.694 1.088 1.087 1.665 2.314 1.729 3.683.073 1.375-.387 2.605-1.379 3.693l-1.569-1.569c.581-.675.855-1.427.826-2.258-.019-.831-.342-1.559-.968-2.188-.844-.841-1.802-1.19-2.878-1.047-1.064.143-2.169.788-3.315 1.935l-.315.314c-1.116 1.118-1.747 2.208-1.891 3.27-.143 1.065.213 2.023 1.068 2.878zM667.519 641.342l-1.211-1.211-4.13 4.133-1.667-1.667 9.696-9.699 1.667 1.669-4.105 4.103 1.085 1.085 7.366-.842 2.008 2.008-8.495.823-.879 9.196-2.106-2.106.771-7.492zM674.581 646.792c.95-.951 1.99-1.621 3.119-2.008 1.135-.382 2.24-.449 3.315-.197 1.083.256 2.051.812 2.903 1.667 1.322 1.32 1.93 2.844 1.83 4.57-.096 1.732-.903 3.358-2.421 4.876l-.115.115c-.946.946-1.975 1.612-3.093 1.999-1.105.389-2.204.454-3.298.198-1.086-.252-2.067-.813-2.939-1.685-1.314-1.314-1.924-2.838-1.828-4.57.1-1.728.905-3.343 2.411-4.848l.116-.117zm1.469 1.863c-1.076 1.075-1.691 2.188-1.845 3.334-.15 1.153.193 2.149 1.031 2.985.842.841 1.839 1.183 2.992 1.021 1.159-.167 2.333-.845 3.523-2.034 1.062-1.064 1.669-2.178 1.819-3.343.161-1.166-.176-2.165-1.012-3.003-.82-.818-1.804-1.151-2.958-1.003-1.153.15-2.336.83-3.55 2.043zM695.139 660.577l-4.472-4.472-8.325 8.327-1.667-1.667 9.697-9.699 6.139 6.141-1.372 1.37zM692.577 664.788c.949-.949 1.989-1.619 3.119-2.008 1.134-.382 2.239-.449 3.315-.197 1.082.256 2.05.812 2.905 1.667 1.32 1.32 1.928 2.844 1.828 4.57-.096 1.734-.903 3.358-2.42 4.877l-.116.116c-.944.944-1.975 1.61-3.093 1.997-1.105.39-2.204.454-3.298.199-1.087-.253-2.068-.812-2.939-1.686-1.315-1.314-1.925-2.838-1.828-4.57.102-1.726.905-3.343 2.41-4.848l.117-.117zm1.47 1.863c-1.075 1.076-1.691 2.188-1.846 3.334-.151 1.153.194 2.149 1.03 2.985.842.843 1.84 1.183 2.993 1.021 1.159-.166 2.334-.845 3.523-2.034 1.062-1.064 1.67-2.178 1.818-3.342.162-1.165-.176-2.166-1.012-3.002-.819-.82-1.804-1.153-2.957-1.005-1.153.15-2.336.831-3.549 2.043zM716.031 688.637c-1.476 1.474-3.004 2.327-4.58 2.553-1.578.228-2.942-.235-4.095-1.388-1.178-1.178-1.73-2.477-1.66-3.899l-4.668 4.67-1.658-1.659 13.425-13.426 1.515 1.515-.996 1.157c1.512-.161 2.869.358 4.07 1.559 1.164 1.165 1.645 2.524 1.443 4.077-.197 1.56-1.079 3.123-2.644 4.687l-.152.154zm-1.471-1.846c1.094-1.094 1.725-2.19 1.892-3.289.166-1.1-.156-2.057-.968-2.869-1.003-1.003-2.203-1.311-3.593-.923l-4.634 4.633c-.389 1.382-.072 2.581.95 3.603.793.795 1.739 1.112 2.831.951 1.107-.161 2.28-.864 3.522-2.106zM717.903 690.115c.949-.949 1.99-1.618 3.119-2.008 1.134-.382 2.241-.447 3.317-.196 1.081.257 2.048.812 2.903 1.666 1.32 1.321 1.93 2.845 1.828 4.571-.096 1.733-.903 3.357-2.419 4.876l-.117.117c-.944.943-1.975 1.609-3.093 1.998-1.105.388-2.204.453-3.298.197-1.087-.25-2.067-.812-2.939-1.685-1.314-1.315-1.924-2.839-1.828-4.571.102-1.726.905-3.343 2.41-4.848l.117-.117zm1.47 1.863c-1.075 1.078-1.69 2.188-1.846 3.336-.15 1.153.194 2.147 1.031 2.983.841.844 1.839 1.183 2.992 1.022 1.159-.167 2.334-.846 3.523-2.034 1.064-1.064 1.67-2.179 1.819-3.343.161-1.164-.176-2.166-1.013-3.002-.817-.819-1.804-1.153-2.957-1.005-1.153.15-2.336.831-3.549 2.043zM724.5 703.882l1.281-.135c1.481-.191 3.104-1.077 4.867-2.661l4.023-3.719 6.246 6.246-8.343 8.344 1.246 1.246-4.203 4.203-1.659-1.658 2.851-2.851-6.767-6.766-2.85 2.85-1.657-1.658 4.212-4.193.753.752zm1.961 1.962l4.456 4.455 6.81-6.812-2.984-2.985-2.412 2.214c-2.03 1.828-3.988 2.872-5.87 3.128zM740.291 722.378c.094-.287.358-.706.788-1.255-1.571.03-2.893-.489-3.961-1.559-.956-.957-1.473-2.012-1.551-3.165-.065-1.153.317-2.143 1.147-2.974 1.011-1.01 2.175-1.411 3.495-1.201 1.333.209 2.696 1.01 4.087 2.401l1.613 1.613.762-.761c.58-.58.867-1.214.86-1.9 0-.693-.338-1.378-1.012-2.052-.592-.592-1.237-.939-1.936-1.041-.699-.102-1.261.06-1.685.484l-1.667-1.666c.484-.484 1.12-.779 1.909-.887.801-.107 1.625 0 2.474.323.854.328 1.633.845 2.34 1.55 1.116 1.116 1.711 2.273 1.781 3.467.078 1.19-.361 2.286-1.316 3.289l-4.463 4.465c-.89.89-1.485 1.711-1.783 2.464l-.145.142-1.737-1.737zm-1.489-4.016a4.138 4.138 0 001.882 1.076c.736.196 1.422.185 2.062-.036l1.989-1.989-1.3-1.3c-2.03-2.032-3.641-2.453-4.83-1.264-.519.521-.752 1.099-.699 1.739.054.64.353 1.231.896 1.774zM887.053 695.438l9.697 9.696-1.667 1.667-8.327-8.325-3.298 3.297 3.433 3.827c1.56 1.776 2.47 3.248 2.733 4.418.269 1.166-.072 2.253-1.021 3.263l-.664.664-1.461-1.461.439-.512c.479-.597.553-1.292.225-2.088-.328-.795-1.218-1.983-2.672-3.567l-3.97-4.329 6.553-6.55zM895.987 686.501l1.658-1.657 9.697 9.696-1.658 1.658-7.071-7.071 2.599 11.543-1.657 1.658-9.697-9.697 1.657-1.658 7.079 7.079-2.607-11.551zM917.927 683.958l-1.658 1.658-4.142-4.14-4.453 4.453 4.14 4.142-1.667 1.667-9.697-9.697 1.667-1.668 4.203 4.205 4.454-4.456-4.204-4.203 1.66-1.657 9.697 9.696zM917.174 665.318l1.658-1.658 9.696 9.697-1.657 1.657-7.072-7.071 2.6 11.543-1.658 1.658-9.697-9.697 1.658-1.657 7.079 7.08-2.607-11.552zM928.905 653.582l9.696 9.699-1.666 1.666-3.773-3.773-2.5 2.5 1.487 6.059-1.793 1.793-1.585-6.464c-.849.395-1.676.523-2.482.386-.807-.148-1.528-.539-2.16-1.174-.885-.884-1.265-1.926-1.139-3.127.119-1.207.733-2.37 1.838-3.486l4.077-4.079zm-3.091 9.044c.471.471 1.014.694 1.63.662.61-.035 1.183-.315 1.72-.842l2.635-2.634-3.217-3.217-2.384 2.382c-.616.616-.953 1.259-1.012 1.929-.065.661.142 1.236.628 1.72zM949.338 644.119l-1.164 1.165 4.212 4.212-1.659 1.659-4.213-4.212-1.164 1.164 1.496 6.929-2.097 2.097-1.55-8.488-7.815-1.541 2.008-2.008 6.515 1.515 1.139-1.138-4.016-4.016 1.657-1.658 4.016 4.016 1.129-1.129-1.496-6.534 2.008-2.007 1.541 7.833 8.478 1.541-2.097 2.097-6.928-1.497zM963.892 638.351c-1.314 1.315-2.814 1.954-4.497 1.919-1.691-.043-3.26-.786-4.706-2.232l-.306-.304c-.96-.963-1.635-2.003-2.025-3.121-.387-1.129-.465-2.234-.233-3.315a5.498 5.498 0 011.505-2.796c1.261-1.26 2.657-1.826 4.187-1.694 1.529.131 3.068.971 4.614 2.519l.69.69-6.569 6.569c.981.933 2.032 1.428 3.156 1.487 1.123.048 2.097-.339 2.922-1.164.584-.586.96-1.202 1.129-1.847a5.257 5.257 0 00.115-2.015l1.802-.225c.436 2.06-.158 3.905-1.784 5.529zm-8.899-8.486a3.113 3.113 0 00-.949 2.42c.029.938.43 1.898 1.201 2.885l4.856-4.858-.124-.124c-.89-.796-1.769-1.22-2.635-1.274-.873-.059-1.656.258-2.349.951zM977.346 624.537l-1.66 1.659-4.14-4.142-4.453 4.455 4.14 4.14-1.667 1.667-9.697-9.696 1.667-1.667 4.203 4.203 4.454-4.455-4.204-4.204 1.658-1.657 9.699 9.697zM982.732 616.806c.591-.592.929-1.289 1.012-2.088.084-.801-.12-1.494-.61-2.08l1.569-1.569c.526.586.864 1.306 1.012 2.16.15.855.078 1.727-.215 2.618a5.695 5.695 0 01-1.417 2.312c-1.32 1.32-2.81 1.932-4.472 1.838-1.659-.108-3.255-.927-4.785-2.457l-.278-.278c-.944-.944-1.609-1.956-1.999-3.037-.387-1.083-.461-2.149-.222-3.2.245-1.057.808-2.028 1.693-2.913 1.088-1.086 2.315-1.663 3.684-1.73 1.373-.072 2.605.39 3.691 1.382l-1.568 1.566c-.675-.578-1.428-.853-2.259-.823-.83.017-1.559.339-2.186.968-.841.842-1.192 1.8-1.049 2.876.145 1.064.79 2.169 1.936 3.316l.315.314c1.116 1.118 2.206 1.748 3.27 1.891 1.065.143 2.023-.211 2.878-1.066zM988.511 605.109l-1.209 1.209 4.131 4.133-1.667 1.667-9.697-9.697 1.667-1.667 4.105 4.103 1.085-1.083-.844-7.368 2.008-2.008.825 8.498 9.194.878-2.106 2.105-7.492-.77zM993.96 598.049c-.949-.951-1.619-1.989-2.008-3.118-.382-1.137-.447-2.242-.197-3.317.258-1.081.813-2.049 1.667-2.904 1.32-1.32 2.844-1.93 4.57-1.828 1.734.096 3.358.903 4.878 2.42l.12.116c.94.944 1.6 1.975 1.99 3.093.39 1.105.46 2.204.2 3.296-.25 1.089-.81 2.068-1.68 2.941-1.32 1.315-2.84 1.923-4.575 1.828-1.726-.102-3.343-.905-4.848-2.41l-.117-.117zm1.865-1.47c1.075 1.075 2.186 1.691 3.334 1.846 1.151.149 2.151-.194 2.981-1.03.85-.842 1.19-1.842 1.02-2.995-.16-1.159-.84-2.332-2.03-3.521-1.06-1.064-2.177-1.67-3.343-1.818-1.165-.162-2.166.176-3.002 1.012-.82.818-1.153 1.804-1.003 2.957.148 1.153.83 2.336 2.043 3.549zM1007.74 577.487l-4.47 4.472 8.33 8.327-1.67 1.667-9.7-9.697 6.14-6.139 1.37 1.37zM1011.96 580.053c-.95-.951-1.62-1.99-2.01-3.12-.38-1.135-.45-2.24-.2-3.316.26-1.08.81-2.048 1.67-2.903 1.32-1.32 2.84-1.93 4.57-1.828 1.73.095 3.36.901 4.87 2.419l.12.117c.94.944 1.61 1.975 2 3.091.39 1.107.45 2.204.2 3.298-.25 1.089-.82 2.068-1.69 2.941-1.31 1.314-2.84 1.922-4.57 1.828-1.73-.102-3.34-.905-4.85-2.412l-.11-.115zm1.86-1.47c1.08 1.075 2.19 1.691 3.33 1.846 1.16.149 2.15-.194 2.99-1.031.84-.843 1.18-1.841 1.02-2.994-.17-1.159-.84-2.332-2.04-3.521-1.06-1.064-2.17-1.67-3.34-1.82-1.16-.162-2.16.176-3 1.014-.82.817-1.15 1.804-1 2.957.15 1.153.83 2.336 2.04 3.549zM1035.8 556.599c1.48 1.476 2.33 3.002 2.56 4.58.23 1.578-.24 2.942-1.39 4.096-1.18 1.177-2.48 1.729-3.9 1.657l4.67 4.669-1.66 1.659-13.42-13.425 1.51-1.515 1.16.994c-.16-1.511.36-2.867 1.56-4.068 1.16-1.166 2.52-1.647 4.08-1.443 1.55.197 3.12 1.078 4.68 2.644l.15.152zm-1.84 1.469c-1.09-1.092-2.19-1.723-3.29-1.89-1.1-.168-2.06.154-2.87.968-1 1.003-1.31 2.201-.92 3.593l4.63 4.634c1.38.387 2.58.072 3.6-.95.8-.795 1.12-1.739.95-2.833-.16-1.105-.86-2.278-2.1-3.522zM1037.28 554.723c-.95-.949-1.62-1.989-2-3.119-.39-1.134-.45-2.239-.2-3.315.25-1.081.81-2.048 1.67-2.903 1.32-1.32 2.84-1.93 4.57-1.828 1.73.094 3.35.901 4.87 2.419l.12.117c.94.944 1.61 1.975 2 3.091.38 1.105.45 2.204.19 3.298-.25 1.089-.81 2.068-1.68 2.941-1.32 1.312-2.84 1.922-4.57 1.828-1.73-.102-3.35-.907-4.85-2.412l-.12-.117zm1.87-1.468c1.07 1.075 2.18 1.69 3.33 1.846 1.15.149 2.15-.194 2.99-1.031.84-.843 1.18-1.841 1.02-2.994-.17-1.159-.85-2.332-2.04-3.521-1.06-1.064-2.18-1.67-3.34-1.82-1.17-.162-2.17.176-3 1.012-.82.819-1.16 1.806-1.01 2.959.15 1.153.83 2.336 2.05 3.549zM1051.05 548.13l-.14-1.281c-.19-1.483-1.07-3.103-2.66-4.867l-3.72-4.023 6.25-6.248 8.34 8.345 1.25-1.246 4.2 4.203-1.66 1.658-2.85-2.85-6.76 6.766 2.85 2.851-1.66 1.658-4.19-4.213.75-.753zm1.96-1.963l4.45-4.453-6.81-6.812-2.98 2.985 2.21 2.41c1.83 2.032 2.87 3.988 3.13 5.87zM1069.55 532.338c-.29-.096-.71-.36-1.26-.79.03 1.572-.49 2.893-1.56 3.962-.95.957-2.01 1.472-3.16 1.55-1.15.067-2.15-.317-2.98-1.147-1.01-1.009-1.41-2.175-1.2-3.495.21-1.331 1.01-2.694 2.4-4.087l1.62-1.613-.76-.762c-.58-.578-1.22-.865-1.91-.86-.69 0-1.37.338-2.05 1.012-.59.592-.94 1.237-1.04 1.936-.1.699.06 1.261.49 1.685l-1.67 1.667c-.48-.484-.78-1.12-.89-1.908-.1-.801 0-1.626.33-2.473.32-.855.84-1.635 1.55-2.34 1.11-1.118 2.27-1.711 3.46-1.783 1.19-.078 2.29.361 3.29 1.318l4.47 4.463c.89.89 1.71 1.485 2.46 1.783l.15.143-1.74 1.739zm-4.02 1.487c.52-.519.88-1.148 1.08-1.882.19-.734.18-1.422-.04-2.062l-1.99-1.989-1.3 1.3c-2.03 2.032-2.45 3.641-1.26 4.831.52.519 1.1.753 1.74.699.64-.053 1.23-.354 1.77-.897z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M1458.21 1075.18a9.27 9.27 0 01-9.27 9.27 9.27 9.27 0 01-9.27-9.27 9.27 9.27 0 019.27-9.27 9.27 9.27 0 019.27 9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1448.94 1080.74a5.56 5.56 0 005.56-5.56c0-3.08-2.49-5.57-5.56-5.57-3.07 0-5.56 2.49-5.56 5.57a5.56 5.56 0 005.56 5.56zm0 3.71a9.27 9.27 0 009.27-9.27 9.27 9.27 0 00-9.27-9.27 9.27 9.27 0 00-9.27 9.27 9.27 9.27 0 009.27 9.27z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M1459.06 544.356c0 5.119-4.16 9.271-9.27 9.271a9.265 9.265 0 01-9.27-9.271c0-5.121 4.14-9.27 9.27-9.27 5.11 0 9.27 4.149 9.27 9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1449.79 549.918c3.07 0 5.56-2.49 5.56-5.562a5.561 5.561 0 00-5.56-5.562c-3.08 0-5.57 2.49-5.57 5.562a5.563 5.563 0 005.57 5.562zm0 3.709c5.11 0 9.27-4.152 9.27-9.271 0-5.121-4.16-9.27-9.27-9.27a9.263 9.263 0 00-9.27 9.27 9.265 9.265 0 009.27 9.271z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M1085.98 168.673a9.27 9.27 0 01-18.54 0 9.27 9.27 0 1118.54 0z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1076.71 174.235c3.08 0 5.57-2.491 5.57-5.562a5.564 5.564 0 00-5.57-5.563 5.562 5.562 0 000 11.125zm0 3.708a9.27 9.27 0 009.27-9.27 9.27 9.27 0 10-9.27 9.27z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M555.145 165.985a9.27 9.27 0 01-9.271 9.27 9.27 9.27 0 010-18.54 9.27 9.27 0 019.271 9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M545.874 171.547a5.562 5.562 0 10.002-11.124 5.562 5.562 0 00-.002 11.124zm0 3.708a9.27 9.27 0 009.271-9.27 9.27 9.27 0 00-9.271-9.27 9.27 9.27 0 000 18.54z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M711.818 99.683a5.562 5.562 0 11-11.123 0 5.562 5.562 0 0111.123 0zM928.704 105.172a5.562 5.562 0 11-11.124 0 5.562 5.562 0 1111.124 0zM979.209 126.312a5.563 5.563 0 11-11.126-.002 5.563 5.563 0 0111.126.002zM1030.79 147.543a5.564 5.564 0 01-5.57 5.562 5.562 5.562 0 010-11.125c3.08 0 5.57 2.491 5.57 5.563zM1136.4 191.82a5.561 5.561 0 01-5.56 5.562 5.563 5.563 0 010-11.124c3.07 0 5.56 2.492 5.56 5.562zM1185.69 211.562a5.561 5.561 0 01-5.56 5.562c-3.07 0-5.56-2.49-5.56-5.562a5.561 5.561 0 015.56-5.562c3.07 0 5.56 2.49 5.56 5.562zM1242.37 235.191a5.561 5.561 0 01-5.56 5.562 5.563 5.563 0 010-11.124c3.07 0 5.56 2.492 5.56 5.562zM1391.89 391.07a5.561 5.561 0 01-5.56 5.562c-3.08 0-5.57-2.49-5.57-5.562a5.563 5.563 0 015.57-5.562c3.07 0 5.56 2.49 5.56 5.562zM1412.55 441.531a5.561 5.561 0 01-5.56 5.562 5.563 5.563 0 010-11.124c3.07 0 5.56 2.492 5.56 5.562zM1433.28 492.218a5.562 5.562 0 01-5.56 5.563 5.563 5.563 0 010-11.125c3.07 0 5.56 2.492 5.56 5.562zM1477.46 598.156c0 3.07-2.49 5.562-5.56 5.562a5.563 5.563 0 010-11.124c3.07 0 5.56 2.49 5.56 5.562zM1497.61 647.258a5.561 5.561 0 01-5.56 5.562c-3.07 0-5.56-2.49-5.56-5.562a5.562 5.562 0 015.56-5.563c3.07 0 5.56 2.49 5.56 5.563zM1521.51 704.039a5.561 5.561 0 01-5.56 5.562c-3.07 0-5.57-2.49-5.57-5.562s2.5-5.562 5.57-5.562c3.07 0 5.56 2.49 5.56 5.562zM1517.52 921.367c0 3.07-2.49 5.562-5.56 5.562a5.563 5.563 0 010-11.124c3.07 0 5.56 2.49 5.56 5.562zM1497.44 971.75a5.561 5.561 0 01-5.56 5.562c-3.07 0-5.56-2.49-5.56-5.562a5.561 5.561 0 015.56-5.562c3.07 0 5.56 2.49 5.56 5.562zM1475.63 1023.14c0 3.08-2.49 5.57-5.56 5.57-3.08 0-5.57-2.49-5.57-5.57 0-3.07 2.49-5.56 5.57-5.56a5.56 5.56 0 015.56 5.56zM1431.85 1129.14a5.56 5.56 0 01-5.56 5.56c-3.08 0-5.57-2.49-5.57-5.56 0-3.08 2.49-5.57 5.57-5.57 3.07 0 5.56 2.49 5.56 5.57zM1411.23 1178.88a5.56 5.56 0 01-11.12 0 5.56 5.56 0 0111.12 0zM1387.54 1235.64c0 3.08-2.49 5.57-5.57 5.57-3.07 0-5.56-2.49-5.56-5.57a5.56 5.56 0 015.56-5.56c3.08 0 5.57 2.49 5.57 5.56zM1262.71 1373.26c0 3.07-2.49 5.56-5.57 5.56a5.56 5.56 0 010-11.12c3.08 0 5.57 2.49 5.57 5.56zM1203.88 1397.24a5.56 5.56 0 01-11.12 0 5.56 5.56 0 0111.12 0zM1142.72 1423.15a5.56 5.56 0 01-11.12 0 5.56 5.56 0 0111.12 0zM1013.92 1475.68a5.56 5.56 0 01-11.12 0c0-3.08 2.49-5.57 5.56-5.57 3.07 0 5.56 2.49 5.56 5.57zM956.838 1499.42c0 3.07-2.49 5.56-5.562 5.56a5.562 5.562 0 01-5.563-5.56c0-3.07 2.49-5.56 5.563-5.56a5.561 5.561 0 015.562 5.56zM893.611 1525.8a5.564 5.564 0 11-11.125 0c0-3.07 2.49-5.56 5.562-5.56a5.562 5.562 0 015.563 5.56zM701.2 1512.52c0 3.07-2.49 5.56-5.562 5.56a5.561 5.561 0 01-5.562-5.56c0-3.07 2.49-5.56 5.562-5.56a5.561 5.561 0 015.562 5.56zM650.147 1491.56a5.563 5.563 0 01-11.125 0 5.563 5.563 0 0111.125 0zM598.744 1470.8c0 3.08-2.491 5.57-5.562 5.57a5.563 5.563 0 01-5.562-5.57 5.562 5.562 0 0111.124 0zM492.763 1426.17c0 3.07-2.49 5.56-5.562 5.56a5.561 5.561 0 01-5.562-5.56c0-3.07 2.49-5.56 5.562-5.56a5.561 5.561 0 015.562 5.56zM444.277 1405.3c0 3.08-2.492 5.57-5.562 5.57a5.563 5.563 0 01-5.562-5.57 5.563 5.563 0 0111.124 0zM386.674 1381.12c0 3.07-2.49 5.56-5.563 5.56a5.561 5.561 0 01-5.562-5.56 5.563 5.563 0 1111.125 0zM235.536 1224.36c0 3.08-2.49 5.57-5.562 5.57a5.563 5.563 0 01-5.562-5.57c0-3.07 2.49-5.56 5.562-5.56a5.561 5.561 0 015.562 5.56zM214.546 1174.43c0 3.07-2.49 5.56-5.562 5.56a5.561 5.561 0 01-5.562-5.56c0-3.08 2.49-5.57 5.562-5.57a5.563 5.563 0 015.562 5.57zM192.763 1122.46a5.563 5.563 0 01-11.125 0 5.564 5.564 0 1111.125 0zM149.311 1016.35c0 3.07-2.49 5.56-5.562 5.56a5.561 5.561 0 01-5.562-5.56c0-3.07 2.49-5.56 5.562-5.56a5.561 5.561 0 015.562 5.56zM128.591 967.379a5.563 5.563 0 11-11.125-.001 5.563 5.563 0 0111.125.001zM105.396 910.539a5.562 5.562 0 11-11.124 0 5.562 5.562 0 0111.124 0zM111.315 693.371a5.563 5.563 0 11-11.126-.002 5.563 5.563 0 0111.126.002zM131.78 642.496a5.563 5.563 0 11-11.125-.001 5.563 5.563 0 0111.125.001zM153.001 591.566a5.562 5.562 0 11-11.125 0 5.562 5.562 0 0111.125 0zM197.472 486.273a5.562 5.562 0 11-11.124 0 5.562 5.562 0 0111.124 0zM217.446 436.078a5.562 5.562 0 11-11.124 0 5.562 5.562 0 0111.124 0zM241.36 379.258a5.562 5.562 0 11-5.562-5.563 5.562 5.562 0 015.562 5.563zM499.651 187.887a5.563 5.563 0 11-11.126-.002 5.563 5.563 0 0111.126.002zM655.327 123.285a5.562 5.562 0 11-11.124 0 5.562 5.562 0 0111.124 0zM448.143 208.883a5.563 5.563 0 11-11.126-.002 5.563 5.563 0 0111.126.002zM605.582 143.902a5.562 5.562 0 11-11.124 0 5.562 5.562 0 0111.124 0zM397.809 230.008a5.562 5.562 0 11-11.124 0 5.562 5.562 0 1111.124 0z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M178.627 540.032a9.27 9.27 0 01-9.27 9.27 9.27 9.27 0 110-18.54c5.12 0 9.27 4.149 9.27 9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M169.357 545.594a5.562 5.562 0 100-11.124 5.562 5.562 0 000 11.124zm0 3.708a9.27 9.27 0 009.27-9.27c0-5.121-4.15-9.27-9.27-9.27a9.27 9.27 0 100 18.54z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M175.312 1070.07a9.27 9.27 0 01-9.27 9.27 9.27 9.27 0 119.27-9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M166.042 1075.63a5.561 5.561 0 005.562-5.56c0-3.07-2.49-5.56-5.562-5.56a5.561 5.561 0 00-5.562 5.56c0 3.07 2.49 5.56 5.562 5.56zm0 3.71a9.27 9.27 0 009.27-9.27 9.27 9.27 0 00-9.27-9.27 9.27 9.27 0 100 18.54z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M551.182 1448.7c0 5.12-4.149 9.27-9.27 9.27a9.27 9.27 0 119.27-9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M541.912 1454.26a5.561 5.561 0 005.562-5.56c0-3.07-2.49-5.57-5.562-5.57s-5.562 2.5-5.562 5.57c0 3.07 2.49 5.56 5.562 5.56zm0 3.71c5.121 0 9.27-4.15 9.27-9.27 0-5.12-4.149-9.27-9.27-9.27a9.27 9.27 0 000 18.54z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M1081.41 1449.16a9.27 9.27 0 01-9.27 9.27 9.27 9.27 0 01-9.27-9.27 9.27 9.27 0 019.27-9.27 9.27 9.27 0 019.27 9.27z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1072.14 1454.72c3.08 0 5.57-2.49 5.57-5.56 0-3.07-2.49-5.56-5.57-5.56a5.56 5.56 0 000 11.12zm0 3.71a9.27 9.27 0 009.27-9.27 9.27 9.27 0 00-9.27-9.27 9.27 9.27 0 00-9.27 9.27 9.27 9.27 0 009.27 9.27z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M31.433 802.574c0 2.551-.528 4.504-1.584 5.855-1.057 1.352-2.603 2.028-4.64 2.028-2.01 0-3.548-.663-4.613-1.991-1.064-1.325-1.61-3.228-1.635-5.703v-3.396c0-2.578.533-4.534 1.597-5.869 1.073-1.334 2.616-2.002 4.626-2.002 2.011 0 3.55.664 4.614 1.989 1.065 1.319 1.61 3.215 1.635 5.692v3.397zm-3.663-3.727c0-1.529-.211-2.64-.634-3.333-.414-.701-1.064-1.051-1.952-1.051-.861 0-1.5.333-1.913 1.001-.406.658-.621 1.693-.647 3.103v4.487c0 1.506.203 2.624.609 3.36.414.727 1.073 1.09 1.977 1.09.895 0 1.542-.35 1.939-1.053.397-.701.604-1.774.621-3.219v-4.385zM19.5 818.949v9.795h-2.617v-7.677h-2.308l-.163 3.024c-.103 1.611-.42 2.784-.95 3.521-.532.737-1.322 1.114-2.373 1.132h-.887l-.027-2.128.326-.026c.47-.037.815-.315 1.032-.834.217-.518.353-1.402.407-2.652l.181-4.155H19.5zM26.305 828.922c-1.436 0-2.607-.439-3.513-1.32-.899-.883-1.348-2.056-1.348-3.523v-.254c0-.982.19-1.861.57-2.632.38-.779.917-1.378 1.611-1.793.7-.423 1.497-.634 2.39-.634 1.34 0 2.393.422 3.16 1.268.772.843 1.159 2.041 1.159 3.593v1.068h-6.238c.085.64.338 1.153.76 1.539.429.387.97.58 1.621.58 1.008 0 1.796-.365 2.363-1.096l1.285 1.439c-.392.556-.923.99-1.593 1.303-.67.308-1.412.462-2.227.462zm-.299-8.037c-.519 0-.941.174-1.267.524-.32.351-.525.852-.616 1.502h3.64v-.207c-.012-.581-.17-1.026-.471-1.341-.302-.319-.73-.478-1.286-.478zM40.127 821.048h-3.142v7.696H34.36v-7.696h-3.087v-2.099h8.854v2.099zM242.027 258.936h-3.663v-14.12l-4.372 1.357v-2.979l7.642-2.737h.393v18.479zM260.455 251.307c0 2.553-.529 4.503-1.584 5.857-1.056 1.351-2.603 2.026-4.638 2.026-2.012 0-3.549-.662-4.615-1.989-1.064-1.326-1.61-3.228-1.634-5.703v-3.397c0-2.577.533-4.533 1.597-5.868 1.073-1.335 2.614-2.003 4.626-2.003 2.011 0 3.548.662 4.613 1.99 1.066 1.318 1.609 3.215 1.635 5.69v3.397zm-3.662-3.725c0-1.53-.211-2.642-.634-3.334-.415-.702-1.064-1.053-1.952-1.053-.863 0-1.5.334-1.914 1.001-.406.66-.621 1.695-.647 3.106v4.487c0 1.503.204 2.623.608 3.359.416.727 1.074 1.089 1.979 1.089.895 0 1.54-.351 1.939-1.052.397-.701.603-1.774.621-3.218v-4.385zM241.069 267.684v9.796h-2.616v-7.677h-2.309l-.163 3.024c-.102 1.611-.419 2.785-.949 3.521-.532.736-1.322 1.114-2.373 1.132h-.887l-.027-2.128.326-.028c.471-.035.814-.313 1.033-.832.217-.519.352-1.404.406-2.652l.181-4.156h7.378zM247.875 277.657c-1.437 0-2.607-.44-3.513-1.322-.9-.881-1.348-2.055-1.348-3.521v-.254c0-.983.189-1.862.571-2.635.38-.779.916-1.376 1.611-1.793.699-.421 1.496-.632 2.39-.632 1.338 0 2.392.423 3.159 1.266.771.846 1.159 2.043 1.159 3.595v1.068h-6.237c.083.64.337 1.154.76 1.539.428.386.968.58 1.62.58 1.007 0 1.795-.365 2.363-1.095l1.286 1.438c-.393.557-.925.991-1.594 1.304-.67.308-1.413.462-2.227.462zm-.298-8.04c-.52 0-.942.176-1.269.525-.319.35-.524.851-.615 1.504h3.639v-.208c-.011-.58-.168-1.027-.471-1.34-.302-.319-.73-.481-1.284-.481zM261.697 269.784h-3.143v7.696h-2.625v-7.696h-3.087v-2.1h8.855v2.1zM809.177 22.203h-12.651v-2.51l5.97-6.362c.82-.895 1.424-1.677 1.814-2.344.396-.668.595-1.302.595-1.902 0-.82-.208-1.461-.621-1.926-.414-.473-1.005-.71-1.775-.71-.828 0-1.483.287-1.965.862-.473.566-.708 1.314-.708 2.243h-3.677c0-1.123.267-2.15.799-3.08a5.674 5.674 0 012.281-2.18c.981-.532 2.091-.798 3.333-.798 1.903 0 3.377.456 4.424 1.369 1.057.912 1.584 2.201 1.584 3.866 0 .912-.236 1.841-.709 2.788-.474.946-1.285 2.049-2.434 3.308l-4.196 4.423h7.936v2.953zM823.854 14.573c0 2.552-.529 4.504-1.586 5.856-1.055 1.352-2.601 2.028-4.639 2.028-2.009 0-3.548-.663-4.612-1.99-1.065-1.327-1.61-3.228-1.636-5.703v-3.397c0-2.577.532-4.533 1.597-5.868 1.073-1.335 2.616-2.003 4.627-2.003 2.01 0 3.549.663 4.613 1.99 1.065 1.318 1.61 3.215 1.636 5.69v3.397zm-3.664-3.726c0-1.53-.211-2.64-.634-3.333-.414-.701-1.064-1.052-1.951-1.052-.862 0-1.5.334-1.915 1.001-.404.66-.621 1.694-.645 3.105v4.487c0 1.504.202 2.624.608 3.359.414.726 1.074 1.09 1.976 1.09.896 0 1.543-.351 1.94-1.052.397-.702.604-1.775.621-3.22v-4.385zM804.468 30.945v9.796h-2.616v-7.677h-2.309l-.163 3.024c-.102 1.61-.419 2.785-.951 3.521-.53.736-1.322 1.114-2.371 1.132h-.888l-.026-2.128.326-.027c.469-.036.814-.314 1.031-.833.217-.519.354-1.403.408-2.652l.181-4.156h7.378zM811.274 40.923c-1.437 0-2.609-.44-3.514-1.322-.899-.88-1.349-2.055-1.349-3.521v-.254c0-.983.191-1.862.571-2.634.38-.779.917-1.376 1.611-1.793.701-.422 1.498-.633 2.39-.633 1.34 0 2.393.422 3.159 1.267.773.845 1.159 2.043 1.159 3.594v1.068h-6.237c.085.64.337 1.153.76 1.54.428.386.97.579 1.62.579 1.009 0 1.797-.365 2.364-1.096l1.285 1.44c-.393.555-.923.99-1.592 1.303-.672.308-1.413.462-2.227.462zm-.301-8.039c-.519 0-.94.175-1.266.525-.321.35-.525.851-.615 1.503h3.639v-.208c-.013-.58-.169-1.026-.471-1.34-.302-.32-.73-.48-1.287-.48zM825.094 33.046h-3.141v7.695h-2.625v-7.695h-3.087v-2.1h8.853v2.1zM1014.34 208.164h-12.65v-2.508l5.97-6.363c.82-.896 1.43-1.676 1.82-2.346.39-.667.59-1.299.59-1.9 0-.819-.2-1.461-.62-1.926-.41-.473-1-.71-1.77-.71-.83 0-1.49.287-1.97.862-.47.565-.71 1.314-.71 2.243h-3.67c0-1.123.26-2.151.8-3.079a5.678 5.678 0 012.28-2.181c.98-.532 2.09-.799 3.33-.799 1.9 0 3.38.458 4.42 1.37 1.06.912 1.59 2.201 1.59 3.866 0 .912-.24 1.841-.71 2.788-.47.946-1.29 2.049-2.43 3.308l-4.2 4.424h7.93v2.951zM1017.14 199.091l1.07-9.38h10.34v3.055h-7.34l-.45 3.966a5.804 5.804 0 012.77-.697c1.76 0 3.14.545 4.13 1.635 1 1.091 1.5 2.617 1.5 4.576 0 1.191-.25 2.26-.76 3.206a5.38 5.38 0 01-2.15 2.193c-.94.516-2.05.773-3.32.773-1.12 0-2.15-.224-3.11-.671-.95-.456-1.71-1.094-2.27-1.915-.55-.819-.84-1.752-.87-2.8h3.62c.08.768.34 1.369.8 1.799.47.423 1.07.634 1.81.634.83 0 1.47-.295 1.92-.886.45-.601.67-1.447.67-2.535 0-1.049-.26-1.852-.78-2.408-.51-.558-1.24-.836-2.19-.836-.87 0-1.57.228-2.11.684l-.36.328-2.92-.721zM1050.05 194.449v13.713h-3.67v-10.748h-3.23l-.22 4.235c-.15 2.254-.59 3.899-1.34 4.929-.74 1.031-1.85 1.56-3.32 1.584h-1.24l-.04-2.978.46-.039c.66-.05 1.14-.439 1.44-1.166.31-.725.5-1.963.58-3.712l.25-5.818h10.33zM1059.19 208.416c-2.01 0-3.65-.617-4.92-1.85-1.26-1.233-1.89-2.878-1.89-4.93v-.356c0-1.376.27-2.607.8-3.688.53-1.09 1.28-1.926 2.25-2.509.99-.591 2.1-.888 3.35-.888 1.88 0 3.35.592 4.42 1.775 1.09 1.183 1.63 2.86 1.63 5.032v1.496h-8.74c.12.895.48 1.613 1.07 2.154.6.54 1.35.81 2.27.81 1.41 0 2.51-.509 3.3-1.533l1.8 2.016c-.54.776-1.29 1.384-2.23 1.824-.93.432-1.97.647-3.11.647zm-.42-11.254c-.73 0-1.32.245-1.78.734-.44.491-.73 1.192-.86 2.104h5.1v-.291c-.02-.812-.24-1.437-.66-1.876-.42-.449-1.02-.671-1.8-.671zM1078.15 197.39h-4.4v10.772h-3.68V197.39h-4.32v-2.941h12.4v2.941zM559.802 204.456h-3.664v-14.119l-4.371 1.357v-2.979l7.642-2.738h.393v18.479zM566.354 195.38l1.065-9.38h10.341v3.055h-7.338l-.456 3.966a5.833 5.833 0 012.776-.697c1.757 0 3.135.545 4.132 1.635.998 1.091 1.496 2.617 1.496 4.576 0 1.191-.254 2.26-.762 3.206a5.328 5.328 0 01-2.154 2.193c-.938.516-2.045.773-3.321.773a7.236 7.236 0 01-3.105-.671c-.955-.456-1.71-1.094-2.268-1.915-.548-.819-.841-1.752-.875-2.8h3.625c.076.768.343 1.369.799 1.799.465.423 1.068.634 1.811.634.829 0 1.467-.295 1.916-.886.446-.601.671-1.446.671-2.535 0-1.049-.258-1.852-.773-2.408-.516-.558-1.246-.836-2.194-.836-.869 0-1.576.228-2.115.684l-.356.328-2.915-.721zM599.256 190.742v13.713h-3.662v-10.748h-3.233l-.228 4.235c-.143 2.254-.586 3.899-1.33 4.929-.743 1.031-1.85 1.56-3.32 1.584h-1.242l-.039-2.978.456-.039c.66-.05 1.14-.439 1.446-1.166.304-.725.493-1.963.569-3.712l.254-5.818h10.329zM608.395 204.709c-2.012 0-3.651-.617-4.917-1.85-1.261-1.233-1.889-2.878-1.889-4.93v-.356c0-1.376.267-2.607.799-3.688.532-1.09 1.283-1.926 2.255-2.509.98-.591 2.096-.888 3.346-.888 1.876 0 3.35.592 4.424 1.775 1.081 1.183 1.622 2.86 1.622 5.032v1.496h-8.732c.118.895.472 1.613 1.064 2.154.6.54 1.357.81 2.269.81 1.411 0 2.514-.509 3.308-1.533l1.8 2.015c-.551.777-1.294 1.385-2.232 1.825-.937.432-1.977.647-3.117.647zm-.419-11.254c-.727 0-1.318.245-1.774.734-.447.491-.734 1.192-.862 2.104h5.095v-.291c-.017-.812-.236-1.437-.659-1.876-.422-.449-1.021-.671-1.8-.671zM627.355 193.683h-4.398v10.772h-3.675v-10.772h-4.322v-2.941h12.395v2.941zM190.028 543.071l1.064-9.38h10.342v3.056h-7.338l-.456 3.966a5.818 5.818 0 012.775-.697c1.758 0 3.136.545 4.133 1.635.998 1.09 1.494 2.616 1.494 4.576 0 1.192-.252 2.26-.76 3.207a5.325 5.325 0 01-2.154 2.192c-.938.515-2.045.773-3.321.773a7.236 7.236 0 01-3.105-.671c-.955-.456-1.712-1.094-2.268-1.914-.55-.819-.842-1.754-.875-2.801h3.625c.076.769.343 1.368.799 1.8.463.421 1.068.632 1.811.632.829 0 1.467-.294 1.914-.886.448-.601.673-1.444.673-2.534 0-1.048-.258-1.851-.773-2.409-.516-.558-1.246-.836-2.194-.836-.869 0-1.576.228-2.115.684l-.356.33-2.915-.723zM222.93 538.434v13.712h-3.663V541.4h-3.232l-.228 4.233c-.143 2.256-.588 3.899-1.331 4.93-.744 1.031-1.85 1.559-3.321 1.583h-1.24l-.039-2.977.456-.039c.66-.05 1.14-.438 1.444-1.165.304-.726.495-1.965.571-3.713l.254-5.818h10.329zM232.069 552.4c-2.012 0-3.651-.617-4.919-1.85-1.259-1.233-1.887-2.878-1.887-4.93v-.354c0-1.378.265-2.607.797-3.69.534-1.09 1.285-1.926 2.256-2.508.981-.592 2.095-.888 3.347-.888 1.876 0 3.35.591 4.424 1.774 1.081 1.183 1.622 2.861 1.622 5.032v1.496h-8.733c.119.896.473 1.613 1.065 2.155.6.541 1.355.81 2.269.81 1.411 0 2.512-.51 3.308-1.533l1.798 2.015c-.549.777-1.292 1.387-2.23 1.826-.937.43-1.977.645-3.117.645zm-.419-11.254c-.727 0-1.318.245-1.774.734-.447.492-.735 1.193-.863 2.105h5.095v-.291c-.016-.812-.235-1.437-.658-1.877-.422-.446-1.023-.671-1.8-.671zM251.029 541.374h-4.398v10.772h-3.675v-10.772h-4.322v-2.94h12.395v2.94z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M132.209 698.933h-2.093v-8.069l-2.499.775v-1.702l4.367-1.565h.225v10.561zm7.59-3.673h-4.078v-1.687h4.078v1.687zm8.821 3.673h-7.228v-1.435l3.411-3.636c.469-.512.814-.959 1.036-1.339.227-.382.34-.743.34-1.086 0-.469-.118-.836-.354-1.102-.237-.27-.575-.406-1.014-.406-.474 0-.848.165-1.123.494-.27.322-.405.75-.405 1.281h-2.101c0-.642.152-1.228.457-1.76a3.26 3.26 0 011.303-1.246c.56-.304 1.195-.456 1.905-.456 1.086 0 1.929.262 2.527.783.604.521.906 1.257.906 2.208 0 .523-.135 1.053-.406 1.594-.27.54-.734 1.17-1.39 1.89l-2.398 2.529h4.534v1.687zm1.919 2.644l-1.093-.573.261-.471c.323-.59.49-1.176.499-1.76v-1.622h1.767l-.007 1.448a3.769 3.769 0 01-.405 1.622 4.177 4.177 0 01-1.022 1.356zm3.303-7.83l.608-5.36h5.91v1.746h-4.193l-.261 2.266a3.324 3.324 0 011.586-.399c1.004 0 1.791.312 2.361.935.57.623.855 1.494.855 2.616 0 .68-.145 1.29-.435 1.832a3.05 3.05 0 01-1.231 1.253c-.536.293-1.168.441-1.897.441a4.14 4.14 0 01-1.775-.383 3.204 3.204 0 01-1.296-1.094 2.986 2.986 0 01-.5-1.6h2.071c.044.439.196.782.457 1.027.265.243.61.363 1.035.363.474 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.148-1.057-.442-1.376-.295-.319-.712-.478-1.253-.478-.497 0-.9.13-1.21.391l-.202.189-1.666-.413zM147.751 650.73h-7.228v-1.435l3.412-3.636c.468-.512.813-.959 1.035-1.339.227-.382.341-.743.341-1.086 0-.469-.119-.837-.355-1.102-.237-.27-.575-.406-1.014-.406-.473 0-.847.165-1.123.493-.27.323-.405.751-.405 1.282h-2.101c0-.642.153-1.228.457-1.76.309-.53.743-.946 1.303-1.246.56-.304 1.195-.456 1.905-.456 1.087 0 1.929.261 2.528.782.603.521.905 1.257.905 2.209 0 .522-.135 1.053-.406 1.594-.27.54-.734 1.17-1.39 1.889l-2.397 2.529h4.533v1.688zm1.92 2.644l-1.094-.573.261-.471c.323-.59.49-1.176.499-1.76v-1.622h1.768l-.008 1.448c-.004.536-.14 1.077-.405 1.622a4.189 4.189 0 01-1.021 1.356zm3.302-7.83l.608-5.36h5.91v1.746h-4.193l-.261 2.266a3.327 3.327 0 011.586-.399c1.005 0 1.792.312 2.361.935.57.623.855 1.494.855 2.616 0 .68-.145 1.29-.435 1.832a3.05 3.05 0 01-1.231 1.253c-.536.293-1.168.441-1.897.441a4.126 4.126 0 01-1.775-.384 3.2 3.2 0 01-1.296-1.093 2.998 2.998 0 01-.5-1.601h2.071c.044.44.196.783.457 1.028.265.243.611.363 1.035.363.474 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.147-1.057-.442-1.376-.294-.319-.712-.478-1.253-.478-.497 0-.9.13-1.209.391l-.203.189-1.666-.413zm12.363 1.513h-4.078v-1.687h4.078v1.687zm3.723-2.527h1.115c.531 0 .924-.134 1.18-.399.256-.265.384-.617.384-1.057 0-.424-.128-.756-.384-.992-.251-.237-.598-.356-1.043-.356-.4 0-.736.112-1.006.334a1.042 1.042 0 00-.406.855h-2.093c0-.551.147-1.044.442-1.478.299-.439.714-.782 1.246-1.029a4.2 4.2 0 011.767-.369c1.115 0 1.989.269 2.622.805.632.53.948 1.264.948 2.2 0 .484-.147.928-.441 1.334a2.868 2.868 0 01-1.159.934c.594.211 1.035.53 1.325.955.295.426.442.927.442 1.507 0 .937-.343 1.687-1.029 2.253-.68.565-1.583.847-2.708.847-1.053 0-1.915-.278-2.586-.832-.666-.556-.999-1.291-.999-2.203h2.093c0 .397.147.72.442.972.299.25.666.376 1.1.376.498 0 .886-.132 1.166-.391.285-.265.428-.616.428-1.051 0-1.052-.58-1.578-1.738-1.578h-1.108v-1.637zm7.017 8.844l-1.093-.573.261-.471c.323-.59.49-1.176.499-1.76v-1.622h1.768l-.008 1.448a3.769 3.769 0 01-.405 1.622 4.177 4.177 0 01-1.022 1.356zm3.303-7.83l.608-5.36h5.91v1.746h-4.193l-.261 2.266a3.324 3.324 0 011.586-.399c1.004 0 1.792.312 2.361.935.57.623.854 1.494.854 2.616 0 .68-.145 1.29-.434 1.832a3.056 3.056 0 01-1.231 1.253c-.536.293-1.168.441-1.897.441a4.126 4.126 0 01-1.775-.384 3.194 3.194 0 01-1.296-1.093 2.99 2.99 0 01-.5-1.601h2.071c.044.44.196.783.457 1.028.265.243.61.363 1.035.363.473 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.147-1.057-.442-1.376-.294-.319-.712-.478-1.253-.478-.497 0-.901.13-1.209.391l-.203.189-1.666-.413zM166.335 594.471h1.116c.531 0 .924-.134 1.18-.399.256-.265.384-.617.384-1.056 0-.425-.128-.757-.384-.992-.251-.238-.599-.356-1.043-.356-.401 0-.736.111-1.006.333a1.043 1.043 0 00-.406.855h-2.093c0-.551.147-1.044.442-1.478.299-.439.714-.782 1.245-1.029a4.216 4.216 0 011.767-.369c1.116 0 1.99.269 2.622.805.633.53.949 1.265.949 2.201 0 .484-.147.927-.442 1.333-.294.406-.68.717-1.159.934.594.212 1.036.531 1.326.955.294.427.442.927.442 1.508 0 .936-.343 1.687-1.029 2.252-.681.566-1.583.848-2.709.848-1.052 0-1.914-.279-2.585-.833-.666-.556-.999-1.29-.999-2.203h2.093c0 .397.147.72.441.972.3.25.667.376 1.101.376.498 0 .886-.131 1.166-.391.285-.265.428-.615.428-1.051 0-1.051-.58-1.578-1.739-1.578h-1.108v-1.637zm7.018 8.844l-1.093-.573.26-.471c.324-.59.49-1.176.5-1.76v-1.622h1.767l-.007 1.448a3.756 3.756 0 01-.406 1.622 4.164 4.164 0 01-1.021 1.356zm3.303-7.83l.608-5.36h5.91v1.747h-4.193l-.261 2.265a3.323 3.323 0 011.586-.398c1.004 0 1.791.311 2.361.934.57.623.854 1.494.854 2.616 0 .681-.144 1.291-.434 1.832a3.05 3.05 0 01-1.231 1.253c-.536.293-1.169.442-1.898.442a4.122 4.122 0 01-1.774-.384 3.207 3.207 0 01-1.297-1.094 2.99 2.99 0 01-.499-1.6h2.071c.044.439.196.782.456 1.027.266.243.611.363 1.036.363.473 0 .838-.168 1.094-.508.256-.343.383-.825.383-1.448 0-.599-.147-1.056-.441-1.375-.295-.319-.713-.479-1.253-.479-.498 0-.901.13-1.21.391l-.202.19-1.666-.414zm12.362 1.513h-4.077v-1.687h4.077v1.687zm7.787-.297h1.194v1.688h-1.194v2.282h-2.094v-2.282h-4.323l-.095-1.319 4.396-6.945h2.116v6.576zm-4.426 0h2.332v-3.723l-.137.24-2.195 3.483zM212.527 488.043v1.722h-.202c-.947.015-1.709.262-2.29.74-.573.479-.919 1.142-1.034 1.991.56-.569 1.266-.854 2.121-.854.918 0 1.646.328 2.188.984.541.657.812 1.522.812 2.594a3.86 3.86 0 01-.451 1.862 3.168 3.168 0 01-1.259 1.296c-.541.309-1.155.463-1.841.463-1.109 0-2.008-.386-2.694-1.159-.68-.773-1.02-1.804-1.02-3.092v-.753c0-1.146.214-2.155.644-3.028.435-.879 1.055-1.557 1.861-2.036.812-.482 1.75-.726 2.818-.73h.347zm-2.041 5.278c-.339 0-.645.089-.92.269a1.585 1.585 0 00-.61.696v.637c0 .699.139 1.248.414 1.643.274.391.662.588 1.158.588a1.31 1.31 0 001.087-.529c.28-.357.421-.819.421-1.385 0-.572-.141-1.036-.421-1.39-.28-.352-.656-.529-1.129-.529zm9.038 1.702h-4.079v-1.687h4.079v1.687zm8.763-5.699l-4.077 9.372h-2.209l4.085-8.851h-5.243v-1.695h7.444v1.174zm1.978 12.016l-1.094-.573.26-.471c.324-.589.491-1.175.5-1.759v-1.622h1.767l-.007 1.448a3.728 3.728 0 01-.406 1.622 4.168 4.168 0 01-1.02 1.355zm3.302-7.829l.608-5.361h5.909v1.747h-4.192l-.261 2.266a3.32 3.32 0 011.587-.399c1.003 0 1.791.312 2.36.934.569.623.855 1.495.855 2.617 0 .68-.145 1.29-.434 1.831a3.071 3.071 0 01-1.231 1.254c-.538.293-1.17.441-1.899.441a4.119 4.119 0 01-1.774-.384 3.203 3.203 0 01-1.296-1.094 3.001 3.001 0 01-.501-1.6h2.071c.045.44.197.783.458 1.027.265.243.61.364 1.035.364.472 0 .838-.169 1.094-.508.255-.343.383-.825.383-1.448 0-.599-.146-1.057-.441-1.376-.295-.319-.712-.478-1.253-.478-.497 0-.901.13-1.209.391l-.204.189-1.665-.413zM231.125 441.119l-4.077 9.372h-2.208l4.084-8.851h-5.243v-1.695h7.444v1.174zm1.978 12.016l-1.093-.573.261-.471c.323-.589.489-1.175.499-1.759v-1.622h1.767l-.008 1.448c-.003.535-.139 1.077-.404 1.622a4.187 4.187 0 01-1.022 1.355zm3.303-7.83l.608-5.36h5.91v1.747h-4.193l-.262 2.266a3.323 3.323 0 011.587-.399c1.003 0 1.791.311 2.36.934.571.623.855 1.495.855 2.617 0 .68-.144 1.29-.434 1.831a3.059 3.059 0 01-1.231 1.254c-.536.293-1.168.441-1.898.441a4.136 4.136 0 01-1.775-.384 3.203 3.203 0 01-1.296-1.094 2.982 2.982 0 01-.498-1.6h2.071c.042.44.194.783.456 1.027.265.243.61.364 1.034.364.475 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.147-1.057-.441-1.376-.295-.319-.712-.478-1.254-.478-.497 0-.899.129-1.209.391l-.202.189-1.666-.414zm12.362 1.513h-4.077v-1.687h4.077v1.687zm8.466-4.069c0 .511-.128.966-.384 1.361a2.77 2.77 0 01-1.056.949c.511.246.917.586 1.216 1.021.3.431.45.937.45 1.521 0 .936-.319 1.678-.956 2.223-.638.541-1.504.812-2.6.812-1.097 0-1.965-.273-2.608-.82-.642-.545-.963-1.283-.963-2.215 0-.584.15-1.094.449-1.528a3 3 0 011.209-1.014 2.766 2.766 0 01-1.057-.949 2.494 2.494 0 01-.376-1.361c0-.898.298-1.613.897-2.144.599-.535 1.413-.804 2.442-.804 1.023 0 1.833.265 2.432.797.605.527.905 1.242.905 2.151zm-1.874 4.7c0-.458-.134-.825-.399-1.102-.265-.274-.623-.411-1.072-.411-.445 0-.799.137-1.064.411-.267.271-.398.638-.398 1.102 0 .448.129.812.391 1.086.259.275.623.414 1.086.414.453 0 .809-.134 1.064-.399.26-.265.392-.632.392-1.101zm-.217-4.598c0-.412-.11-.74-.327-.987-.217-.25-.524-.376-.919-.376-.391 0-.695.121-.914.363-.217.241-.325.573-.325 1 0 .419.108.756.325 1.014.219.256.524.384.921.384.395 0 .699-.128.912-.384.217-.258.327-.595.327-1.014zm4.366 10.284l-1.094-.573.262-.471c.322-.589.489-1.175.498-1.759v-1.622h1.767l-.005 1.448a3.788 3.788 0 01-.406 1.622 4.187 4.187 0 01-1.022 1.355zm3.302-7.83l.608-5.36h5.911v1.747h-4.194l-.259 2.266a3.306 3.306 0 011.585-.399c1.005 0 1.791.311 2.36.934.571.623.855 1.495.855 2.617 0 .68-.145 1.29-.434 1.831a3.065 3.065 0 01-1.231 1.254c-.536.293-1.168.441-1.897.441a4.134 4.134 0 01-1.776-.384 3.203 3.203 0 01-1.296-1.094 2.99 2.99 0 01-.499-1.6h2.071c.043.44.195.783.456 1.027.265.243.61.364 1.037.364.472 0 .836-.169 1.092-.508.256-.343.383-.825.383-1.448 0-.599-.146-1.057-.441-1.376-.295-.319-.712-.478-1.253-.478-.497 0-.899.129-1.209.391l-.202.189-1.667-.414zM248.95 394.542c0 .511-.128.966-.384 1.361a2.762 2.762 0 01-1.058.949c.511.246.917.586 1.218 1.021.298.431.448.937.448 1.521 0 .936-.319 1.678-.956 2.223-.638.541-1.504.812-2.6.812-1.095 0-1.965-.273-2.607-.82-.643-.545-.964-1.283-.964-2.215 0-.584.151-1.094.449-1.528.3-.434.703-.773 1.211-1.014a2.757 2.757 0 01-1.059-.949 2.494 2.494 0 01-.376-1.361c0-.898.3-1.613.899-2.144.597-.535 1.411-.804 2.44-.804 1.023 0 1.835.265 2.432.797.605.527.907 1.242.907 2.151zm-1.876 4.7c0-.458-.134-.825-.399-1.102-.265-.274-.623-.411-1.072-.411-.445 0-.799.137-1.064.411-.265.271-.398.638-.398 1.102 0 .448.129.812.391 1.086.261.275.623.414 1.086.414.455 0 .809-.134 1.065-.399.261-.265.391-.632.391-1.101zm-.217-4.598c0-.412-.11-.74-.327-.987-.216-.25-.524-.376-.919-.376-.391 0-.695.12-.912.363-.217.241-.327.573-.327 1 0 .419.11.756.327 1.014.217.256.523.384.919.384.395 0 .699-.128.912-.384.217-.258.327-.595.327-1.014zm4.366 10.284l-1.094-.573.262-.471c.324-.589.489-1.175.5-1.759v-1.622h1.767l-.007 1.448a3.788 3.788 0 01-.406 1.622 4.173 4.173 0 01-1.022 1.355zm3.304-7.83l.608-5.36h5.909v1.747h-4.194l-.259 2.266a3.306 3.306 0 011.585-.399c1.005 0 1.791.311 2.362.934.569.623.855 1.495.855 2.616 0 .681-.145 1.291-.436 1.832a3.053 3.053 0 01-1.231 1.254c-.536.293-1.168.441-1.897.441a4.119 4.119 0 01-1.774-.384 3.177 3.177 0 01-1.296-1.094 2.976 2.976 0 01-.501-1.6h2.071c.045.44.197.783.456 1.027.265.243.612.364 1.037.364.472 0 .838-.169 1.094-.508.255-.343.383-.825.383-1.448 0-.599-.148-1.057-.443-1.376-.293-.319-.712-.478-1.251-.478-.499 0-.901.129-1.211.391l-.202.189-1.665-.414zm12.361 1.513h-4.077v-1.687h4.077v1.687zm6.489-.543c-.545.536-1.183.805-1.911.805-.931 0-1.678-.319-2.238-.957-.56-.641-.84-1.505-.84-2.592 0-.691.15-1.324.449-1.898a3.302 3.302 0 011.268-1.346 3.472 3.472 0 011.824-.486c.696 0 1.315.174 1.854.521.542.348.961.847 1.261 1.5.299.652.451 1.398.456 2.238v.775c0 1.757-.437 3.138-1.311 4.142-.873 1.004-2.111 1.54-3.715 1.609l-.514.005v-1.744l.464-.008c1.82-.081 2.805-.936 2.953-2.564zm-1.396-.795c.338 0 .627-.087.868-.262.246-.174.432-.383.558-.63v-.862c0-.71-.135-1.259-.406-1.65-.269-.392-.632-.588-1.087-.588-.419 0-.763.193-1.034.58-.271.38-.406.862-.406 1.441 0 .575.13 1.047.391 1.42.265.367.638.551 1.116.551zM385.114 259.523h-2.093v-8.069l-2.498.775v-1.702l4.367-1.565h.224v10.561zm8.518 0h-2.094v-8.069l-2.499.775v-1.702l4.368-1.565h.225v10.561zm7.59-3.673h-4.079v-1.688h4.079v1.688zm6.677 3.673h-2.094v-8.069l-2.497.775v-1.702l4.366-1.565h.225v10.561zm10.66 0h-7.227v-1.435l3.412-3.636c.467-.512.812-.959 1.034-1.339.228-.382.342-.743.342-1.086 0-.469-.119-.837-.356-1.102-.236-.27-.575-.406-1.015-.406-.472 0-.847.165-1.121.493-.271.323-.406.751-.406 1.282h-2.101c0-.642.152-1.228.458-1.76.308-.53.743-.946 1.303-1.246.56-.304 1.194-.456 1.904-.456 1.087 0 1.929.261 2.528.782.604.521.906 1.258.906 2.209 0 .522-.135 1.053-.406 1.594-.271.54-.734 1.17-1.39 1.889l-2.398 2.529h4.533v1.688zm1.919 2.643l-1.093-.572.261-.471c.324-.59.489-1.176.501-1.76v-1.622h1.766l-.007 1.448c-.005.536-.141 1.077-.406 1.622a4.149 4.149 0 01-1.022 1.355zm3.304-7.829l.608-5.36h5.909v1.746h-4.193l-.26 2.266a3.32 3.32 0 011.585-.399c1.005 0 1.791.312 2.362.935.569.623.855 1.494.855 2.616 0 .68-.145 1.29-.436 1.832a3.044 3.044 0 01-1.231 1.253c-.536.293-1.168.441-1.897.441a4.122 4.122 0 01-1.774-.384 3.182 3.182 0 01-1.296-1.094 2.966 2.966 0 01-.5-1.6h2.071c.044.44.196.783.456 1.028.267.242.611.363 1.036.363.473 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.149-1.057-.442-1.376-.294-.319-.713-.478-1.253-.478-.497 0-.901.13-1.211.391l-.202.189-1.665-.413zM430.96 237.273h-2.094v-8.069l-2.499.775v-1.702l4.368-1.565h.225v10.561zm10.661 0h-7.229v-1.436l3.411-3.635c.469-.512.814-.959 1.036-1.339.227-.382.34-.743.34-1.086 0-.47-.119-.837-.354-1.102-.238-.27-.575-.406-1.015-.406-.472 0-.847.165-1.121.493-.271.323-.406.751-.406 1.282h-2.101c0-.642.152-1.228.456-1.76.31-.53.744-.946 1.304-1.246.559-.304 1.195-.456 1.906-.456 1.084 0 1.928.261 2.527.782.602.521.904 1.257.904 2.209 0 .522-.135 1.053-.406 1.594-.27.54-.734 1.17-1.39 1.889l-2.398 2.529h4.536v1.688zm1.918 2.643l-1.093-.572.261-.471c.323-.59.489-1.176.499-1.76v-1.622h1.767l-.008 1.448c-.003.536-.139 1.077-.404 1.622a4.176 4.176 0 01-1.022 1.355zm3.303-7.829l.608-5.36h5.91v1.746h-4.193l-.262 2.266a3.334 3.334 0 011.587-.399c1.003 0 1.791.312 2.36.935.571.623.855 1.494.855 2.616 0 .68-.144 1.29-.434 1.832a3.056 3.056 0 01-1.231 1.253c-.536.293-1.168.441-1.898.441a4.136 4.136 0 01-1.775-.384 3.195 3.195 0 01-1.296-1.094 2.982 2.982 0 01-.498-1.6h2.071c.042.44.194.783.456 1.028.265.242.61.363 1.034.363.475 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.147-1.057-.441-1.376-.295-.319-.712-.478-1.254-.478-.497 0-.899.13-1.209.391l-.202.189-1.666-.413zm12.362 1.513h-4.077v-1.688h4.077v1.688zm6.679 3.673h-2.093v-8.069l-2.5.775v-1.702l4.368-1.565h.225v10.561zm5.562-6.2h1.114c.532 0 .925-.134 1.181-.399s.384-.617.384-1.057c0-.424-.128-.756-.384-.992-.252-.237-.599-.356-1.044-.356-.4 0-.736.111-1.006.334a1.046 1.046 0 00-.404.855h-2.094c0-.551.147-1.044.442-1.478.3-.439.713-.782 1.245-1.029a4.204 4.204 0 011.767-.369c1.117 0 1.99.269 2.622.805.632.53.949 1.264.949 2.2 0 .484-.148.927-.441 1.334a2.874 2.874 0 01-1.159.934c.594.211 1.035.53 1.324.955.295.426.443.927.443 1.507 0 .936-.343 1.687-1.029 2.253-.68.565-1.583.847-2.709.847-1.053 0-1.915-.278-2.584-.832-.668-.557-1.001-1.291-1.001-2.203h2.093c0 .397.148.719.443.972.298.25.666.376 1.099.376.499 0 .887-.132 1.167-.391.285-.265.428-.616.428-1.052 0-1.051-.58-1.577-1.739-1.577h-1.107v-1.637zm7.018 8.843l-1.094-.572.261-.471c.323-.59.49-1.176.499-1.76v-1.622h1.767l-.008 1.448c-.003.536-.139 1.077-.404 1.622a4.188 4.188 0 01-1.021 1.355zm3.302-7.829l.608-5.36h5.911v1.746h-4.194l-.262 2.266a3.334 3.334 0 011.587-.399c1.003 0 1.791.312 2.361.935.569.623.854 1.494.854 2.616 0 .68-.144 1.29-.434 1.832a3.056 3.056 0 01-1.231 1.253c-.535.293-1.17.441-1.898.441a4.136 4.136 0 01-1.775-.384 3.195 3.195 0 01-1.296-1.094 3 3 0 01-.5-1.6h2.073c.042.44.194.783.456 1.028.265.242.61.363 1.034.363.475 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.146-1.057-.441-1.376-.295-.319-.712-.478-1.254-.478-.496 0-.901.13-1.208.391l-.204.189-1.665-.413zM485.234 215.026h-2.094v-8.068l-2.497.775v-1.702l4.366-1.565h.225v10.56zm5.562-6.2h1.116c.53 0 .923-.133 1.179-.398s.384-.618.384-1.057c0-.425-.128-.756-.384-.992-.25-.237-.599-.356-1.042-.356-.4 0-.736.111-1.007.334-.27.217-.406.502-.406.855h-2.093c0-.551.149-1.044.443-1.478.299-.44.714-.783 1.244-1.029a4.207 4.207 0 011.769-.369c1.114 0 1.988.269 2.622.805.632.53.947 1.264.947 2.2 0 .484-.146.927-.441 1.333-.295.406-.68.718-1.159.935.593.211 1.037.53 1.326.955.295.426.441.927.441 1.507 0 .936-.343 1.687-1.029 2.253-.68.565-1.583.847-2.707.847-1.053 0-1.915-.278-2.586-.832-.666-.557-1-1.291-1-2.203h2.094c0 .397.146.719.441.971.3.251.667.377 1.101.377.497 0 .887-.132 1.166-.391.284-.265.427-.616.427-1.052 0-1.051-.579-1.577-1.737-1.577h-1.109v-1.638zm7.017 8.844l-1.093-.573.261-.471c.324-.589.49-1.175.501-1.759v-1.622h1.767l-.008 1.448c-.005.536-.141 1.077-.406 1.622a4.16 4.16 0 01-1.022 1.355zm3.304-7.829l.609-5.36h5.908v1.746h-4.193l-.26 2.266a3.32 3.32 0 011.585-.399c1.005 0 1.791.312 2.362.935.57.623.855 1.494.855 2.616 0 .68-.145 1.29-.436 1.831a3.047 3.047 0 01-1.231 1.254c-.536.293-1.168.441-1.896.441-.638 0-1.23-.128-1.775-.384a3.177 3.177 0 01-1.296-1.094 2.966 2.966 0 01-.5-1.6h2.071c.044.44.196.783.456 1.027.265.243.612.364 1.036.364.473 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.149-1.057-.443-1.376-.293-.319-.712-.478-1.252-.478-.499 0-.901.13-1.211.391l-.202.189-1.665-.413zm12.361 1.513h-4.077v-1.688h4.077v1.688zm6.679 3.672h-2.093v-8.068l-2.5.775v-1.702l4.368-1.565h.225v10.56zm9.624-3.969h1.196v1.687h-1.196v2.282h-2.091v-2.282h-4.324l-.094-1.318 4.396-6.945h2.113v6.576zm-4.424 0h2.333v-3.723l-.139.239-2.194 3.484zM592.769 172.38h-2.093v-8.068l-2.498.775v-1.702l4.367-1.564h.224v10.559zm9.111-10.653v1.723h-.202c-.948.015-1.71.261-2.29.739-.573.478-.92 1.142-1.035 1.992.56-.57 1.267-.855 2.121-.855.918 0 1.647.328 2.188.985.541.657.812 1.521.812 2.593 0 .685-.15 1.306-.45 1.861a3.159 3.159 0 01-1.259 1.297c-.542.309-1.155.463-1.841.463-1.109 0-2.008-.386-2.694-1.159-.681-.772-1.02-1.803-1.02-3.092v-.753c0-1.145.213-2.154.643-3.028.436-.878 1.055-1.557 1.862-2.035.812-.483 1.75-.727 2.818-.731h.347zm-2.042 5.279c-.339 0-.645.09-.919.268a1.574 1.574 0 00-.61.696v.637c0 .7.139 1.248.413 1.644.275.391.662.587 1.159.587.449 0 .812-.177 1.086-.529.28-.357.421-.819.421-1.383 0-.575-.141-1.038-.421-1.391-.279-.352-.656-.529-1.129-.529zm9.039 1.702h-4.079v-1.687h4.079v1.687zm6.676 3.672h-2.093v-8.068l-2.497.775v-1.702l4.366-1.564h.224v10.559zm10.604-9.372l-4.077 9.372h-2.21l4.084-8.85h-5.243v-1.695h7.446v1.173zm1.976 12.016l-1.094-.572.262-.471c.324-.589.489-1.176.5-1.76v-1.622h1.767l-.007 1.448a3.785 3.785 0 01-.406 1.622 4.149 4.149 0 01-1.022 1.355zm3.304-7.829l.608-5.36h5.909v1.746h-4.194l-.259 2.267a3.31 3.31 0 011.585-.399c1.005 0 1.791.312 2.362.935.569.622.855 1.494.855 2.614 0 .681-.145 1.292-.436 1.832a3.038 3.038 0 01-1.231 1.253c-.536.295-1.168.442-1.897.442a4.119 4.119 0 01-1.774-.384 3.187 3.187 0 01-1.296-1.093 2.979 2.979 0 01-.501-1.601h2.071c.045.439.197.782.456 1.029.267.241.612.362 1.037.362.473 0 .838-.169 1.094-.507.256-.343.384-.826.384-1.449 0-.599-.149-1.057-.442-1.376-.295-.318-.714-.478-1.253-.478-.497 0-.901.13-1.211.391l-.202.188-1.665-.412zM634.906 151.987h-2.093v-8.068l-2.5.775v-1.702l4.369-1.565h.224v10.56zm10.602-9.372l-4.078 9.372h-2.208l4.085-8.851h-5.244v-1.694h7.445v1.173zm1.978 12.015l-1.094-.572.261-.471c.323-.589.49-1.175.499-1.76v-1.622h1.767l-.007 1.448c-.004.536-.139 1.077-.405 1.623a4.184 4.184 0 01-1.021 1.354zm3.302-7.829l.608-5.359h5.911v1.745h-4.194l-.262 2.267a3.337 3.337 0 011.588-.398c1.003 0 1.791.311 2.36.934.571.623.854 1.494.854 2.614 0 .681-.144 1.292-.433 1.833a3.063 3.063 0 01-1.231 1.253c-.536.294-1.169.442-1.899.442a4.132 4.132 0 01-1.774-.384 3.21 3.21 0 01-1.296-1.094 2.974 2.974 0 01-.499-1.6h2.071c.043.439.195.782.456 1.028.265.241.61.362 1.035.362.474 0 .838-.169 1.093-.507.256-.343.384-.825.384-1.448 0-.599-.146-1.058-.441-1.376-.295-.319-.712-.478-1.253-.478-.497 0-.9.13-1.209.391l-.202.188-1.667-.413zm12.363 1.514h-4.077v-1.688h4.077v1.688zm6.678 3.672h-2.093v-8.068l-2.499.775v-1.702l4.368-1.565h.224v10.56zm10.305-7.742c0 .511-.128.965-.384 1.361a2.766 2.766 0 01-1.057.949c.512.246.918.587 1.217 1.021.3.43.448.937.448 1.521 0 .937-.319 1.678-.955 2.223-.637.541-1.505.812-2.601.812s-1.965-.273-2.607-.819c-.641-.545-.962-1.284-.962-2.216 0-.584.149-1.094.449-1.528a2.992 2.992 0 011.209-1.014 2.766 2.766 0 01-1.057-.949 2.48 2.48 0 01-.376-1.361c0-.898.298-1.613.897-2.144.599-.536 1.413-.804 2.44-.804 1.025 0 1.835.265 2.434.797.603.526.905 1.243.905 2.151zm-1.876 4.7c0-.459-.132-.826-.397-1.101-.267-.275-.623-.413-1.072-.413-.445 0-.799.138-1.066.413-.265.27-.398.637-.398 1.101 0 .449.131.811.391 1.086.261.275.623.413 1.086.413.454 0 .81-.133 1.066-.398.26-.266.39-.633.39-1.101zm-.217-4.599c0-.41-.108-.739-.325-.985-.218-.251-.524-.377-.921-.377-.391 0-.695.121-.912.363-.217.241-.327.574-.327.999 0 .42.11.758.327 1.014.217.256.524.384.919.384.397 0 .701-.128.914-.384.217-.256.325-.594.325-1.014zm4.368 10.284l-1.094-.572.261-.471c.323-.589.49-1.175.499-1.76v-1.622h1.767l-.007 1.448c-.004.536-.139 1.077-.404 1.623a4.186 4.186 0 01-1.022 1.354zm3.302-7.829l.608-5.359h5.911v1.745h-4.194l-.261 2.267a3.33 3.33 0 011.587-.398c1.003 0 1.791.311 2.36.934s.855 1.494.855 2.614c0 .681-.145 1.292-.434 1.833a3.063 3.063 0 01-1.231 1.253c-.536.294-1.17.442-1.899.442a4.132 4.132 0 01-1.774-.384 3.21 3.21 0 01-1.296-1.094 3.001 3.001 0 01-.501-1.6h2.073c.043.439.195.782.456 1.028.265.241.61.362 1.035.362.474 0 .838-.169 1.094-.507.255-.343.383-.825.383-1.448 0-.599-.146-1.058-.441-1.376-.295-.319-.712-.478-1.253-.478-.497 0-.901.13-1.209.391l-.204.188-1.665-.413zM689.18 127.885h-2.093v-8.068l-2.498.775v-1.702l4.367-1.564h.224v10.559zm10.307-7.742c0 .512-.128.966-.384 1.362a2.747 2.747 0 01-1.059.948c.512.247.918.587 1.218 1.021.299.43.449.937.449 1.521 0 .937-.319 1.678-.957 2.224-.637.541-1.503.811-2.599.811-1.096 0-1.965-.273-2.607-.818-.643-.546-.964-1.285-.964-2.217 0-.584.15-1.093.449-1.528a3.01 3.01 0 011.21-1.014 2.751 2.751 0 01-1.058-.948 2.49 2.49 0 01-.377-1.362c0-.898.301-1.613.9-2.144.597-.536 1.411-.804 2.44-.804 1.023 0 1.835.266 2.432.797.604.526.907 1.243.907 2.151zm-1.877 4.7c0-.458-.133-.825-.398-1.1-.265-.276-.623-.413-1.072-.413-.445 0-.799.137-1.064.413-.265.27-.399.637-.399 1.1 0 .449.13.811.392 1.087.261.275.622.412 1.086.412.454 0 .808-.132 1.064-.398.262-.265.391-.632.391-1.101zm-.216-4.599c0-.41-.11-.738-.327-.985-.217-.251-.525-.376-.919-.376-.392 0-.696.121-.913.362-.217.241-.326.575-.326.999 0 .42.109.758.326 1.014.217.256.523.384.92.384.395 0 .699-.128.912-.384.217-.256.327-.594.327-1.014zm4.366 10.285l-1.094-.573.261-.47c.325-.589.49-1.176.501-1.76v-1.622h1.767l-.008 1.448c-.005.536-.141 1.077-.406 1.622a4.16 4.16 0 01-1.021 1.355zm3.304-7.829l.608-5.36h5.909v1.746h-4.194l-.26 2.266a3.322 3.322 0 011.585-.398c1.005 0 1.792.312 2.363.934.569.623.854 1.495.854 2.615 0 .681-.144 1.291-.435 1.832a3.04 3.04 0 01-1.232 1.253c-.535.295-1.168.442-1.896.442a4.126 4.126 0 01-1.775-.384 3.195 3.195 0 01-1.296-1.093 2.97 2.97 0 01-.5-1.601h2.071c.044.439.196.782.456 1.028.265.242.612.362 1.036.362.473 0 .838-.168 1.094-.506.256-.343.384-.826.384-1.449 0-.599-.148-1.057-.443-1.376-.293-.319-.712-.478-1.252-.478-.498 0-.901.13-1.21.391l-.202.188-1.665-.412zm12.361 1.513h-4.077v-1.687h4.077v1.687zm6.678 3.672h-2.093v-8.068l-2.499.775v-1.702l4.368-1.564h.224v10.559zm8.328-4.215c-.545.536-1.182.804-1.911.804-.933 0-1.678-.319-2.238-.956-.56-.642-.84-1.506-.84-2.593 0-.69.15-1.323.449-1.897a3.305 3.305 0 011.268-1.347 3.476 3.476 0 011.824-.486c.696 0 1.313.174 1.855.522.541.347.96.847 1.26 1.499.299.652.451 1.398.456 2.238v.775c0 1.757-.437 3.138-1.31 4.142-.876 1.005-2.114 1.541-3.716 1.608l-.515.008v-1.746l.463-.007c1.821-.082 2.807-.937 2.955-2.564zm-1.397-.797c.339 0 .628-.087.869-.26.247-.174.432-.384.558-.631v-.861c0-.71-.135-1.26-.406-1.651-.271-.392-.632-.587-1.086-.587-.419 0-.766.193-1.035.579-.271.382-.406.862-.406 1.441 0 .575.13 1.048.391 1.42.265.367.638.55 1.115.55zM897.124 131.592h-7.227v-1.434l3.411-3.635c.468-.512.814-.959 1.035-1.34.228-.382.341-.744.341-1.087 0-.468-.118-.835-.354-1.101-.237-.27-.575-.405-1.014-.405-.475 0-.847.164-1.124.492-.27.324-.406.751-.406 1.282h-2.098c0-.642.152-1.229.456-1.76a3.225 3.225 0 011.303-1.245c.56-.305 1.194-.457 1.904-.457 1.087 0 1.93.261 2.527.783.605.521.907 1.257.907 2.209 0 .521-.136 1.052-.406 1.593-.271.541-.734 1.171-1.391 1.89l-2.397 2.528h4.533v1.687zm6.374 0h-2.093v-8.068l-2.499.775v-1.702l4.368-1.564h.224v10.559zm7.591-3.672h-4.079v-1.687h4.079v1.687zm8.82 3.672h-7.227v-1.434l3.411-3.635c.467-.512.814-.959 1.035-1.34.228-.382.341-.744.341-1.087 0-.468-.119-.835-.354-1.101-.238-.27-.575-.405-1.015-.405-.472 0-.847.164-1.123.492-.271.324-.404.751-.404 1.282h-2.101c0-.642.152-1.229.456-1.76a3.234 3.234 0 011.304-1.245c.559-.305 1.194-.457 1.904-.457 1.086 0 1.93.261 2.529.783.602.521.904 1.257.904 2.209 0 .521-.135 1.052-.406 1.593-.27.541-.734 1.171-1.39 1.89l-2.397 2.528h4.533v1.687zm8.517 0h-7.227v-1.434l3.412-3.635c.467-.512.812-.959 1.034-1.34.228-.382.341-.744.341-1.087 0-.468-.118-.835-.356-1.101-.235-.27-.574-.405-1.014-.405-.473 0-.847.164-1.122.492-.27.324-.406.751-.406 1.282h-2.1c0-.642.152-1.229.458-1.76a3.231 3.231 0 011.303-1.245c.56-.305 1.194-.457 1.904-.457 1.087 0 1.928.261 2.527.783.605.521.907 1.257.907 2.209 0 .521-.135 1.052-.406 1.593-.271.541-.734 1.171-1.391 1.89l-2.397 2.528h4.533v1.687zm1.919 2.644l-1.094-.573.262-.47c.324-.589.489-1.176.5-1.76v-1.622h1.767l-.007 1.448a3.785 3.785 0 01-.406 1.622 4.149 4.149 0 01-1.022 1.355zm3.304-7.829l.608-5.36h5.909v1.746h-4.194l-.259 2.267a3.31 3.31 0 011.585-.399c1.005 0 1.791.312 2.362.935.569.622.855 1.494.855 2.614 0 .681-.145 1.291-.436 1.832a3.038 3.038 0 01-1.231 1.253c-.536.295-1.168.442-1.897.442a4.119 4.119 0 01-1.774-.384 3.195 3.195 0 01-1.296-1.093 2.979 2.979 0 01-.501-1.601h2.071c.045.439.197.782.456 1.028.267.242.612.363 1.037.363.473 0 .838-.169 1.094-.507.256-.343.384-.826.384-1.449 0-.599-.149-1.057-.442-1.376-.295-.319-.714-.478-1.253-.478-.497 0-.901.13-1.211.391l-.202.188-1.665-.412zM937.407 153.838h-7.229v-1.434l3.412-3.635c.469-.512.814-.959 1.036-1.34.226-.382.341-.744.341-1.087 0-.468-.118-.835-.356-1.101-.235-.27-.574-.405-1.014-.405-.473 0-.847.164-1.122.492-.27.324-.406.751-.406 1.282h-2.1c0-.642.152-1.229.456-1.76a3.237 3.237 0 011.303-1.245c.562-.305 1.196-.457 1.906-.457 1.087 0 1.928.261 2.527.783.605.521.905 1.257.905 2.209 0 .521-.135 1.052-.404 1.593-.271.541-.734 1.171-1.391 1.89l-2.397 2.528h4.533v1.687zm8.518 0h-7.229v-1.434l3.411-3.635c.469-.512.814-.959 1.037-1.34.226-.382.339-.744.339-1.087 0-.468-.119-.835-.354-1.101-.237-.27-.575-.405-1.014-.405-.473 0-.848.164-1.122.492-.271.324-.406.751-.406 1.282h-2.101c0-.642.152-1.229.456-1.76.31-.531.744-.946 1.304-1.245.56-.305 1.196-.457 1.906-.457 1.084 0 1.928.261 2.527.783.602.521.905 1.257.905 2.209 0 .521-.136 1.052-.406 1.593-.271.541-.735 1.171-1.391 1.89l-2.397 2.528h4.535v1.687zm1.919 2.644l-1.094-.572.261-.471c.323-.589.49-1.176.499-1.76v-1.622h1.767l-.007 1.448c-.004.536-.14 1.077-.405 1.622a4.188 4.188 0 01-1.021 1.355zm3.302-7.829l.608-5.36h5.911v1.746h-4.194l-.262 2.267a3.326 3.326 0 011.588-.399c1.003 0 1.791.312 2.36.935.571.622.854 1.494.854 2.614 0 .681-.144 1.292-.433 1.832a3.057 3.057 0 01-1.231 1.253c-.536.295-1.169.442-1.899.442a4.132 4.132 0 01-1.774-.384 3.194 3.194 0 01-1.296-1.093 2.977 2.977 0 01-.499-1.601h2.071c.042.439.195.782.456 1.029.265.241.61.362 1.035.362.474 0 .838-.169 1.093-.507.256-.343.384-.826.384-1.449 0-.599-.146-1.057-.441-1.376-.295-.318-.712-.478-1.253-.478-.497 0-.9.13-1.209.391l-.202.188-1.667-.412zm12.363 1.513h-4.077v-1.687h4.077v1.687zm8.821 3.672h-7.229v-1.434l3.412-3.635c.469-.512.814-.959 1.036-1.34.226-.382.34-.744.34-1.087 0-.468-.117-.835-.355-1.101-.237-.27-.574-.405-1.014-.405-.473 0-.847.164-1.121.492-.271.324-.406.751-.406 1.282h-2.101c0-.642.152-1.229.456-1.76.31-.531.743-.946 1.303-1.245.56-.305 1.196-.457 1.906-.457 1.087 0 1.929.261 2.527.783.605.521.905 1.257.905 2.209 0 .521-.135 1.052-.404 1.593-.271.541-.734 1.171-1.391 1.89l-2.397 2.528h4.533v1.687zm3.419-6.199h1.115c.532 0 .925-.133 1.181-.399.255-.265.383-.618.383-1.057 0-.425-.128-.756-.383-.992-.253-.237-.599-.355-1.044-.355-.401 0-.736.111-1.007.333a1.046 1.046 0 00-.404.855h-2.093c0-.551.146-1.043.441-1.478.3-.439.714-.782 1.246-1.028a4.186 4.186 0 011.767-.37c1.116 0 1.989.268 2.621.804.633.532.95 1.265.95 2.202 0 .483-.149.927-.442 1.333a2.883 2.883 0 01-1.159.934c.594.212 1.035.531 1.324.956.295.425.443.927.443 1.506 0 .937-.343 1.688-1.029 2.253-.68.565-1.583.847-2.708.847-1.053 0-1.916-.278-2.585-.833-.667-.555-1.001-1.289-1.001-2.202h2.093c0 .396.148.72.443.971.299.251.666.377 1.1.377.499 0 .886-.131 1.166-.391.285-.266.428-.616.428-1.051 0-1.052-.58-1.578-1.739-1.578h-1.107v-1.637zm7.018 8.843l-1.094-.572.261-.471c.323-.589.49-1.176.499-1.76v-1.622h1.767l-.007 1.448a3.74 3.74 0 01-.405 1.622 4.188 4.188 0 01-1.021 1.355zm3.302-7.829l.608-5.36h5.911v1.746h-4.194l-.262 2.267a3.326 3.326 0 011.588-.399c1.003 0 1.791.312 2.36.935.569.622.855 1.494.855 2.614 0 .681-.145 1.292-.434 1.832a3.057 3.057 0 01-1.231 1.253c-.536.295-1.17.442-1.899.442a4.132 4.132 0 01-1.774-.384 3.2 3.2 0 01-1.296-1.093 2.996 2.996 0 01-.501-1.601h2.073c.043.439.195.782.456 1.029.265.241.61.362 1.035.362.474 0 .838-.169 1.094-.507.255-.343.383-.826.383-1.449 0-.599-.146-1.057-.441-1.376-.295-.318-.712-.478-1.253-.478-.497 0-.901.13-1.209.391l-.204.188-1.665-.412zM989.827 176.088H982.6v-1.434l3.412-3.635c.467-.512.814-.959 1.034-1.34.228-.382.341-.744.341-1.087 0-.468-.118-.835-.354-1.101-.237-.27-.575-.405-1.014-.405-.475 0-.847.164-1.124.492-.27.324-.406.751-.406 1.282h-2.098c0-.642.152-1.229.456-1.76a3.225 3.225 0 011.303-1.245c.56-.305 1.194-.457 1.904-.457 1.087 0 1.93.261 2.527.783.605.521.907 1.257.907 2.209 0 .521-.135 1.052-.406 1.593-.271.541-.734 1.171-1.391 1.89l-2.397 2.528h4.533v1.687zm3.419-6.199h1.116c.531 0 .924-.133 1.18-.399.255-.265.383-.618.383-1.057 0-.425-.128-.756-.383-.992-.251-.237-.599-.355-1.042-.355-.401 0-.737.111-1.007.333a1.042 1.042 0 00-.406.855h-2.093c0-.551.148-1.043.443-1.478.298-.439.713-.782 1.244-1.028a4.184 4.184 0 011.768-.37c1.115 0 1.988.268 2.622.804.632.532.948 1.265.948 2.202 0 .483-.147.927-.442 1.333a2.87 2.87 0 01-1.159.934c.594.212 1.037.531 1.326.956.295.425.441.927.441 1.506 0 .937-.343 1.688-1.029 2.253-.68.565-1.583.847-2.707.847-1.053 0-1.915-.278-2.586-.833-.666-.555-.999-1.289-.999-2.202h2.093c0 .397.146.72.441.971.301.251.668.377 1.102.377.496 0 .886-.131 1.166-.391.283-.266.426-.616.426-1.051 0-1.052-.578-1.578-1.737-1.578h-1.109v-1.637zm7.014 8.843l-1.09-.572.261-.471c.325-.589.49-1.176.501-1.76v-1.622h1.768l-.01 1.448c0 .536-.14 1.077-.4 1.622-.27.546-.61.997-1.03 1.355zm3.31-7.829l.61-5.36h5.9v1.746h-4.19l-.26 2.267c.5-.266 1.03-.399 1.59-.399 1 0 1.79.312 2.36.935.57.622.85 1.494.85 2.614 0 .681-.14 1.292-.43 1.832-.29.536-.7.954-1.23 1.253-.54.295-1.17.442-1.9.442-.64 0-1.23-.128-1.77-.384-.55-.26-.98-.625-1.3-1.093-.32-.469-.48-1.002-.5-1.601h2.07c.04.44.2.782.46 1.029.26.241.61.362 1.03.362.48 0 .84-.169 1.1-.507.25-.343.38-.826.38-1.449 0-.599-.15-1.057-.44-1.376-.3-.318-.72-.478-1.25-.478-.5 0-.91.13-1.22.391l-.2.188-1.66-.412zm12.36 1.513h-4.08v-1.687h4.08v1.687zm8.82 3.672h-7.23v-1.434l3.41-3.635c.47-.512.82-.959 1.04-1.34.23-.382.34-.744.34-1.087 0-.468-.12-.835-.36-1.101-.23-.27-.57-.405-1.01-.405-.47 0-.85.164-1.12.492-.27.324-.41.751-.41 1.282h-2.1c0-.642.16-1.229.46-1.76.31-.531.74-.946 1.3-1.245.56-.305 1.2-.457 1.91-.457 1.08 0 1.93.261 2.52.783.61.521.91 1.257.91 2.209 0 .521-.13 1.052-.4 1.593-.28.541-.74 1.171-1.4 1.89l-2.39 2.528h4.53v1.687zm7.48-3.969h1.2v1.688h-1.2v2.281h-2.09v-2.281h-4.32l-.1-1.318 4.4-6.946h2.11v6.576zm-4.42 0h2.33v-3.722l-.14.239-2.19 3.483zM1097.36 220.585h-7.22v-1.435l3.41-3.636c.46-.512.81-.958 1.03-1.338.23-.382.34-.744.34-1.087 0-.469-.12-.836-.35-1.101-.24-.271-.58-.406-1.02-.406-.47 0-.84.165-1.12.493-.27.323-.41.751-.41 1.281h-2.09c0-.641.15-1.227.45-1.759.31-.531.75-.946 1.31-1.246.56-.304 1.19-.456 1.9-.456 1.09 0 1.93.261 2.53.782.6.521.9 1.257.9 2.208 0 .523-.13 1.053-.4 1.595-.27.539-.74 1.17-1.39 1.889l-2.4 2.529h4.53v1.687zm6.97-10.653v1.722h-.2c-.95.015-1.71.261-2.29.74-.57.478-.92 1.142-1.04 1.991.56-.569 1.27-.855 2.12-.855.92 0 1.65.329 2.19.985.54.656.81 1.522.81 2.594 0 .686-.15 1.305-.45 1.861a3.11 3.11 0 01-1.26 1.296c-.54.31-1.15.464-1.84.464-1.1 0-2-.386-2.69-1.159-.68-.773-1.02-1.804-1.02-3.093v-.752c0-1.146.21-2.155.64-3.028.44-.879 1.06-1.558 1.87-2.036.81-.482 1.75-.727 2.81-.73h.35zm-2.04 5.278c-.34 0-.65.089-.92.269-.28.174-.48.406-.61.695v.638c0 .699.14 1.248.41 1.643.28.391.66.587 1.16.587.45 0 .81-.176 1.09-.528.28-.358.42-.819.42-1.385 0-.573-.14-1.036-.42-1.39-.28-.353-.66-.529-1.13-.529zm9.04 1.702h-4.08v-1.687h4.08v1.687zm8.82 3.673h-7.23v-1.435l3.41-3.636c.47-.512.82-.958 1.04-1.338.22-.382.34-.744.34-1.087 0-.469-.12-.836-.36-1.101-.23-.271-.57-.406-1.01-.406-.47 0-.85.165-1.12.493-.28.323-.41.751-.41 1.281h-2.1c0-.641.15-1.227.46-1.759.3-.531.74-.946 1.3-1.246.56-.304 1.19-.456 1.9-.456 1.09 0 1.93.261 2.53.782.61.521.91 1.257.91 2.208 0 .523-.14 1.053-.41 1.595-.27.539-.73 1.17-1.39 1.889l-2.4 2.529h4.54v1.687zm8.46-9.372l-4.08 9.372h-2.21l4.08-8.851h-5.24v-1.695h7.45v1.174zm1.97 12.016l-1.09-.573.26-.471c.33-.589.49-1.175.5-1.759v-1.623h1.77l-.01 1.448c0 .536-.14 1.078-.4 1.623-.27.545-.61.997-1.03 1.355zm3.31-7.83l.61-5.36h5.9v1.747h-4.19l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.85 1.495.85 2.616 0 .681-.14 1.291-.43 1.832-.29.536-.7.953-1.23 1.253-.54.293-1.17.442-1.9.442-.64 0-1.23-.128-1.77-.384a3.196 3.196 0 01-1.3-1.094c-.32-.469-.48-1.001-.5-1.6h2.07c.04.439.2.782.46 1.027.26.243.61.363 1.03.363.47 0 .84-.168 1.1-.508.25-.343.38-.825.38-1.448 0-.598-.15-1.056-.44-1.375-.3-.319-.72-.479-1.25-.479-.5 0-.91.13-1.22.392l-.2.189-1.66-.414zM1143.21 242.835h-7.23V241.4l3.41-3.636c.47-.512.81-.958 1.04-1.338.22-.382.34-.744.34-1.087 0-.469-.12-.836-.36-1.101-.23-.271-.57-.406-1.01-.406-.47 0-.85.165-1.12.493-.27.323-.41.751-.41 1.281h-2.1c0-.641.15-1.227.46-1.759.31-.531.74-.946 1.3-1.246.56-.304 1.19-.456 1.9-.456 1.09 0 1.93.261 2.53.782.61.521.91 1.257.91 2.208 0 .523-.14 1.053-.41 1.595-.27.539-.73 1.17-1.39 1.889l-2.4 2.529h4.54v1.687zm8.46-9.372l-4.08 9.372h-2.21l4.09-8.851h-5.25v-1.695h7.45v1.174zm1.97 12.016l-1.09-.573.26-.471c.32-.59.49-1.175.5-1.759v-1.623h1.77l-.01 1.448c0 .536-.14 1.077-.4 1.623-.27.545-.61.997-1.03 1.355zm3.31-7.83l.6-5.36h5.92v1.747h-4.2l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.85 1.495.85 2.616 0 .681-.14 1.291-.43 1.832-.29.536-.7.953-1.23 1.253-.54.293-1.17.442-1.9.442-.64 0-1.23-.128-1.78-.384a3.233 3.233 0 01-1.29-1.094c-.32-.469-.48-1.001-.5-1.6h2.07c.04.439.2.782.46 1.027.26.243.61.363 1.03.363.48 0 .84-.168 1.1-.508.25-.343.38-.825.38-1.448 0-.598-.15-1.056-.44-1.375-.3-.319-.71-.479-1.26-.479-.49 0-.89.13-1.2.392l-.21.189-1.66-.414zm12.36 1.513h-4.08v-1.687h4.08v1.687zm8.82 3.673h-7.23V241.4l3.41-3.636c.47-.512.82-.958 1.04-1.338.23-.382.34-.744.34-1.087 0-.469-.12-.836-.35-1.101-.24-.271-.58-.406-1.02-.406-.47 0-.85.165-1.12.493-.27.323-.41.751-.41 1.281h-2.1c0-.641.15-1.227.46-1.759.31-.531.74-.946 1.3-1.246.56-.304 1.2-.456 1.91-.456 1.08 0 1.93.261 2.53.782.6.521.9 1.257.9 2.208 0 .523-.14 1.053-.4 1.595-.28.539-.74 1.17-1.39 1.889l-2.4 2.529h4.53v1.687zm8.16-7.743c0 .512-.13.966-.38 1.361a2.8 2.8 0 01-1.06.95c.51.246.92.586 1.22 1.021.3.43.45.937.45 1.521 0 .936-.32 1.677-.96 2.223-.64.541-1.5.812-2.6.812-1.09 0-1.96-.273-2.61-.82-.64-.545-.96-1.283-.96-2.215 0-.584.15-1.094.45-1.528.3-.434.7-.773 1.21-1.014a2.8 2.8 0 01-1.06-.95c-.25-.395-.37-.849-.37-1.361 0-.897.29-1.613.89-2.143.6-.536 1.42-.804 2.44-.804 1.03 0 1.84.265 2.44.797.6.526.9 1.242.9 2.15zm-1.87 4.701c0-.458-.14-.826-.4-1.102-.27-.274-.62-.411-1.07-.411-.45 0-.8.137-1.07.411-.26.271-.4.638-.4 1.102 0 .448.13.812.39 1.086.27.274.63.413 1.09.413.46 0 .81-.133 1.07-.398s.39-.632.39-1.101zm-.22-4.599c0-.411-.11-.739-.33-.986-.21-.25-.52-.376-.92-.376-.39 0-.69.12-.91.363-.22.241-.33.573-.33.999 0 .419.11.757.33 1.015.22.255.53.383.92.383.4 0 .7-.128.91-.383.22-.258.33-.596.33-1.015zm4.37 10.285l-1.1-.573.26-.471c.33-.59.49-1.175.5-1.759v-1.623h1.77l-.01 1.448c0 .536-.14 1.077-.4 1.623-.27.545-.61.997-1.02 1.355zm3.3-7.83l.61-5.36h5.91v1.747h-4.2l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.86 1.495.86 2.616 0 .681-.15 1.291-.44 1.832-.28.536-.69.953-1.23 1.253-.54.293-1.17.442-1.9.442a4.11 4.11 0 01-1.77-.384 3.196 3.196 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.07c.05.439.2.782.46 1.027.26.243.61.363 1.03.363.48 0 .84-.168 1.1-.508.25-.343.38-.825.38-1.448 0-.598-.14-1.056-.44-1.375-.29-.319-.71-.479-1.25-.479-.5 0-.9.13-1.21.392l-.21.189-1.66-.414zM1199.34 265.085h-7.23v-1.435l3.41-3.636c.47-.512.81-.958 1.03-1.338.23-.382.35-.744.35-1.087 0-.469-.12-.836-.36-1.101-.24-.271-.57-.406-1.01-.406-.48 0-.85.165-1.13.493-.27.323-.4.751-.4 1.281h-2.1c0-.641.15-1.227.46-1.759.3-.531.74-.946 1.3-1.246.56-.304 1.19-.456 1.9-.456 1.09 0 1.93.261 2.53.782.6.521.91 1.257.91 2.208 0 .523-.14 1.053-.41 1.595-.27.539-.73 1.17-1.39 1.889l-2.4 2.529h4.54v1.687zm8.16-7.743c0 .512-.13.966-.38 1.361a2.8 2.8 0 01-1.06.95c.51.246.91.586 1.22 1.021.29.43.44.937.44 1.521 0 .936-.32 1.678-.95 2.223-.64.541-1.51.812-2.6.812-1.1 0-1.97-.273-2.61-.82-.64-.545-.96-1.283-.96-2.215 0-.584.15-1.094.45-1.528.3-.434.7-.773 1.21-1.014-.45-.238-.81-.553-1.06-.95a2.494 2.494 0 01-.38-1.361c0-.897.3-1.613.9-2.143.6-.536 1.41-.804 2.44-.804 1.02 0 1.84.265 2.43.797.61.526.91 1.242.91 2.15zm-1.88 4.701c0-.458-.13-.826-.4-1.102-.26-.274-.62-.411-1.07-.411-.44 0-.8.137-1.06.411-.27.271-.4.638-.4 1.102 0 .448.13.812.39 1.086s.62.413 1.09.413c.45 0 .81-.133 1.06-.398.26-.265.39-.632.39-1.101zm-.21-4.599c0-.411-.11-.739-.33-.986-.22-.25-.52-.376-.92-.376-.39 0-.7.12-.91.363-.22.241-.33.573-.33.999 0 .419.11.757.33 1.015.21.255.52.383.92.383.39 0 .7-.128.91-.383.22-.258.33-.596.33-1.015zm4.36 10.285l-1.09-.573.26-.471c.32-.589.49-1.175.5-1.759v-1.623h1.77l-.01 1.448a3.781 3.781 0 01-.41 1.623c-.26.545-.6.997-1.02 1.355zm3.31-7.83l.6-5.36h5.91v1.747h-4.19l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.85 1.495.85 2.616 0 .681-.14 1.291-.43 1.832-.29.536-.7.953-1.23 1.253-.54.293-1.17.442-1.9.442-.64 0-1.23-.128-1.78-.384a3.233 3.233 0 01-1.29-1.094c-.32-.469-.48-1.001-.5-1.6h2.07c.04.439.2.782.45 1.027.27.243.62.363 1.04.363.47 0 .84-.168 1.1-.508.25-.343.38-.825.38-1.448 0-.598-.15-1.056-.44-1.375-.3-.319-.72-.479-1.26-.479-.49 0-.9.13-1.21.392l-.2.189-1.66-.414zm12.36 1.513h-4.08v-1.687h4.08v1.687zm8.82 3.673h-7.23v-1.435l3.41-3.636c.47-.512.82-.958 1.04-1.338.23-.382.34-.744.34-1.087 0-.469-.12-.836-.36-1.101-.23-.271-.57-.406-1.01-.406-.47 0-.85.165-1.12.493-.27.323-.41.751-.41 1.281h-2.1c0-.641.15-1.227.46-1.759.31-.531.74-.946 1.3-1.246.56-.304 1.2-.456 1.91-.456 1.08 0 1.93.261 2.52.782.61.521.91 1.257.91 2.208 0 .523-.14 1.053-.41 1.595-.27.539-.73 1.17-1.39 1.889l-2.39 2.529h4.53v1.687zm6.18-4.216c-.54.536-1.18.805-1.91.805-.93 0-1.68-.319-2.24-.957-.56-.642-.83-1.506-.83-2.592 0-.692.15-1.324.44-1.899.31-.578.73-1.027 1.27-1.346.54-.324 1.15-.485 1.83-.485.69 0 1.31.174 1.85.521.54.348.96.847 1.26 1.499.3.653.45 1.398.46 2.238v.775c0 1.758-.44 3.139-1.31 4.142-.88 1.005-2.12 1.541-3.72 1.61l-.51.005v-1.745l.46-.007c1.82-.082 2.81-.936 2.95-2.564zm-1.39-.795c.34 0 .62-.088.87-.262.24-.174.43-.384.55-.63v-.862c0-.711-.13-1.259-.4-1.651-.27-.391-.63-.587-1.09-.587-.42 0-.76.193-1.03.58-.27.38-.41.862-.41 1.441 0 .574.13 1.047.39 1.42.27.367.64.551 1.12.551zM1331.44 405.354h1.11c.53 0 .93-.134 1.18-.399.26-.265.39-.617.39-1.057 0-.424-.13-.756-.39-.992-.25-.237-.59-.356-1.04-.356-.4 0-.74.112-1.01.334-.27.217-.4.503-.4.855h-2.09c0-.551.14-1.044.44-1.478.3-.439.71-.782 1.24-1.029a4.25 4.25 0 011.77-.369c1.12 0 1.99.269 2.62.805.63.53.95 1.264.95 2.201 0 .484-.15.927-.44 1.333-.3.406-.68.717-1.16.934.6.212 1.04.53 1.33.955.29.427.44.927.44 1.507 0 .937-.34 1.688-1.03 2.253-.68.566-1.58.847-2.71.847-1.05 0-1.91-.278-2.59-.832-.66-.556-.99-1.29-.99-2.203h2.09c0 .397.15.72.44.972.3.25.67.376 1.1.376.5 0 .89-.131 1.17-.391.28-.265.43-.616.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm11.47 6.2h-2.09v-8.069l-2.5.775v-1.702l4.37-1.565h.22v10.561zm7.59-3.673h-4.08v-1.687h4.08v1.687zm3.72-2.527h1.12c.53 0 .92-.134 1.18-.399.26-.265.38-.617.38-1.057 0-.424-.12-.756-.38-.992-.25-.237-.6-.356-1.04-.356-.4 0-.74.112-1.01.334a1.05 1.05 0 00-.41.855h-2.09c0-.551.15-1.044.44-1.478.3-.439.72-.782 1.25-1.029a4.184 4.184 0 011.77-.369c1.11 0 1.98.269 2.62.805.63.53.95 1.264.95 2.201 0 .484-.15.927-.45 1.333-.29.406-.68.717-1.16.934.6.212 1.04.53 1.33.955.29.427.44.927.44 1.507 0 .937-.34 1.688-1.03 2.253-.68.566-1.58.847-2.7.847-1.06 0-1.92-.278-2.59-.832-.67-.556-1-1.29-1-2.203h2.09c0 .397.15.72.44.972.3.25.67.376 1.11.376.49 0 .88-.131 1.16-.391.29-.265.43-.616.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm13.62 6.2h-7.23v-1.435l3.41-3.636c.47-.512.81-.959 1.04-1.339.23-.382.34-.743.34-1.086 0-.469-.12-.836-.36-1.101-.23-.271-.57-.407-1.01-.407-.47 0-.85.165-1.12.494-.27.322-.41.751-.41 1.281h-2.1c0-.642.15-1.228.46-1.76.31-.53.74-.945 1.3-1.246.56-.304 1.2-.456 1.91-.456 1.08 0 1.92.262 2.52.783.61.521.91 1.257.91 2.208 0 .523-.14 1.053-.41 1.594-.27.54-.73 1.17-1.39 1.89l-2.39 2.529h4.53v1.687zm1.92 2.644l-1.1-.573.26-.471c.33-.59.49-1.176.51-1.76v-1.622h1.76l-.01 1.448c0 .536-.14 1.077-.4 1.622-.27.545-.61.998-1.02 1.356zm3.3-7.83l.61-5.36h5.91v1.746h-4.2l-.26 2.266c.5-.265 1.03-.399 1.59-.399 1.01 0 1.79.312 2.36.935.57.623.86 1.494.86 2.616 0 .68-.15 1.29-.44 1.832-.28.536-.69.953-1.23 1.253-.54.293-1.17.441-1.9.441-.63 0-1.23-.128-1.77-.383a3.196 3.196 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.07c.05.439.2.782.46 1.027.27.243.61.363 1.04.363.47 0 .83-.168 1.09-.508.26-.343.38-.825.38-1.448 0-.599-.14-1.057-.44-1.376-.29-.318-.71-.478-1.25-.478-.5 0-.9.13-1.21.391l-.2.189-1.67-.413zM1340.2 451.705h1.12c.53 0 .92-.133 1.18-.398.25-.265.38-.618.38-1.057 0-.425-.13-.757-.38-.992-.25-.237-.6-.356-1.04-.356-.41 0-.74.111-1.01.334-.27.217-.41.502-.41.854h-2.09c0-.55.15-1.043.44-1.477.3-.44.72-.783 1.25-1.029a4.155 4.155 0 011.76-.369c1.12 0 1.99.269 2.62.805.64.53.95 1.264.95 2.2 0 .484-.14.927-.44 1.333-.29.406-.68.718-1.16.935.6.211 1.04.53 1.33.955.29.426.44.927.44 1.507 0 .936-.34 1.687-1.03 2.253-.68.565-1.58.847-2.71.847-1.05 0-1.91-.278-2.58-.832-.67-.557-1-1.291-1-2.203h2.09c0 .397.15.719.44.971.3.251.67.377 1.11.377.49 0 .88-.132 1.16-.391.28-.266.43-.616.43-1.052 0-1.051-.58-1.577-1.74-1.577h-1.11v-1.638zm13.62 6.2h-7.23v-1.435l3.41-3.635c.47-.512.81-.959 1.04-1.339.22-.382.34-.744.34-1.087 0-.469-.12-.836-.36-1.101-.24-.271-.57-.406-1.01-.406-.47 0-.85.165-1.12.493-.27.323-.41.751-.41 1.281h-2.1c0-.641.15-1.227.46-1.759.31-.53.74-.946 1.3-1.246.56-.304 1.19-.456 1.91-.456 1.08 0 1.92.261 2.52.782.6.521.91 1.257.91 2.208 0 .523-.14 1.054-.41 1.595-.27.539-.73 1.17-1.39 1.889l-2.4 2.529h4.54v1.687zm1.92 2.644l-1.1-.573.26-.471c.33-.589.49-1.175.5-1.759v-1.622h1.77l-.01 1.448c0 .535-.14 1.077-.4 1.622-.27.545-.61.997-1.02 1.355zm3.3-7.829l.61-5.361h5.91v1.747h-4.2l-.26 2.266c.5-.265 1.03-.399 1.59-.399 1 0 1.79.312 2.36.934.57.623.85 1.495.85 2.617 0 .68-.14 1.29-.43 1.831-.28.536-.69.953-1.23 1.254-.54.293-1.17.441-1.9.441a4.11 4.11 0 01-1.77-.384 3.189 3.189 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.07c.05.44.2.783.46 1.027.26.243.61.364 1.03.364.48 0 .84-.169 1.1-.508.25-.343.38-.825.38-1.448 0-.599-.15-1.057-.44-1.376-.29-.319-.71-.478-1.25-.478-.5 0-.9.129-1.21.391l-.2.189-1.67-.413zm12.36 1.512h-4.08v-1.687h4.08v1.687zm3.72-2.527h1.12c.53 0 .92-.133 1.18-.398.26-.265.38-.618.38-1.057 0-.425-.12-.757-.38-.992-.25-.237-.6-.356-1.04-.356-.4 0-.74.111-1.01.334-.27.217-.4.502-.4.854h-2.1c0-.55.15-1.043.44-1.477.3-.44.72-.783 1.25-1.029a4.201 4.201 0 011.77-.369c1.11 0 1.99.269 2.62.805.63.53.95 1.264.95 2.2 0 .484-.15.927-.44 1.333-.3.406-.68.718-1.16.935.59.211 1.03.53 1.32.955.3.426.44.927.44 1.507 0 .936-.34 1.687-1.02 2.253-.69.565-1.59.847-2.71.847-1.05 0-1.92-.278-2.59-.832-.67-.557-1-1.291-1-2.203h2.1c0 .397.14.719.44.971.3.251.66.377 1.1.377.5 0 .88-.132 1.16-.391.29-.266.43-.616.43-1.052 0-1.051-.58-1.577-1.74-1.577h-1.11v-1.638zm8.52 0h1.12c.53 0 .92-.133 1.18-.398.25-.265.38-.618.38-1.057 0-.425-.13-.757-.38-.992-.25-.237-.6-.356-1.05-.356-.4 0-.73.111-1 .334-.27.217-.41.502-.41.854h-2.09c0-.55.15-1.043.44-1.477.3-.44.71-.783 1.25-1.029a4.155 4.155 0 011.76-.369c1.12 0 1.99.269 2.63.805.63.53.94 1.264.94 2.2 0 .484-.14.927-.44 1.333-.29.406-.68.718-1.16.935.6.211 1.04.53 1.33.955.29.426.44.927.44 1.507 0 .936-.34 1.687-1.03 2.253-.68.565-1.58.847-2.71.847-1.05 0-1.91-.278-2.58-.832-.67-.557-1-1.291-1-2.203h2.09c0 .397.15.719.44.971.3.251.67.377 1.1.377.5 0 .89-.132 1.17-.391.29-.266.43-.616.43-1.052 0-1.051-.58-1.577-1.74-1.577h-1.11v-1.638zm7.02 8.844l-1.09-.573.26-.471c.32-.589.49-1.175.5-1.759v-1.622h1.76v1.448a3.78 3.78 0 01-.41 1.622c-.27.545-.6.997-1.02 1.355zm3.3-7.829l.61-5.361h5.91v1.747h-4.19l-.26 2.266a3.281 3.281 0 011.58-.399c1.01 0 1.79.312 2.36.934.57.623.86 1.495.86 2.617 0 .68-.15 1.29-.44 1.831-.28.536-.69.953-1.23 1.254-.53.293-1.17.441-1.9.441-.63 0-1.22-.128-1.77-.384a3.189 3.189 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.08c.04.44.19.783.45 1.027.27.243.61.364 1.04.364.47 0 .83-.169 1.09-.508.26-.343.38-.825.38-1.448 0-.599-.14-1.057-.44-1.376-.29-.319-.71-.478-1.25-.478-.5 0-.9.129-1.21.391l-.2.189-1.67-.413zM1364.81 498.057h1.12c.53 0 .92-.134 1.18-.399.25-.265.38-.617.38-1.057 0-.424-.13-.756-.38-.991-.25-.238-.6-.356-1.05-.356-.4 0-.73.111-1 .333a1.05 1.05 0 00-.41.855h-2.09c0-.551.15-1.044.44-1.478.3-.439.71-.782 1.25-1.029a4.17 4.17 0 011.76-.369c1.12 0 1.99.269 2.63.805.63.53.94 1.264.94 2.201 0 .484-.14.927-.44 1.333-.29.406-.68.717-1.16.934.6.212 1.04.531 1.33.955.29.427.44.927.44 1.508 0 .936-.34 1.687-1.03 2.252-.68.566-1.58.848-2.71.848-1.05 0-1.91-.279-2.58-.833-.67-.556-1-1.29-1-2.203h2.09c0 .397.15.72.44.972.3.25.67.376 1.1.376.5 0 .89-.131 1.17-.391.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm8.52 0h1.11c.53 0 .93-.134 1.18-.399.26-.265.39-.617.39-1.057 0-.424-.13-.756-.39-.991-.25-.238-.6-.356-1.04-.356-.4 0-.73.111-1.01.333-.27.217-.4.503-.4.855h-2.09c0-.551.14-1.044.44-1.478.3-.439.71-.782 1.24-1.029a4.25 4.25 0 011.77-.369c1.12 0 1.99.269 2.62.805.64.53.95 1.264.95 2.201 0 .484-.15.927-.44 1.333-.3.406-.68.717-1.16.934.59.212 1.04.531 1.33.955.29.427.44.927.44 1.508 0 .936-.35 1.687-1.03 2.252-.68.566-1.59.848-2.71.848-1.05 0-1.91-.279-2.58-.833-.67-.556-1-1.29-1-2.203h2.09c0 .397.15.72.44.972.3.25.67.376 1.1.376.5 0 .89-.131 1.17-.391.28-.265.42-.615.42-1.051 0-1.051-.57-1.578-1.73-1.578h-1.11v-1.637zm7.02 8.844l-1.1-.573.26-.471c.33-.59.49-1.176.5-1.76v-1.622h1.77l-.01 1.448c0 .536-.14 1.077-.4 1.622-.27.546-.61.998-1.02 1.356zm3.3-7.83l.61-5.36h5.91v1.747h-4.2l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.86 1.494.86 2.616 0 .681-.15 1.291-.44 1.832-.28.536-.7.953-1.23 1.253-.54.293-1.17.442-1.9.442-.64 0-1.23-.128-1.77-.384a3.196 3.196 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.07c.05.439.2.782.46 1.027.26.243.61.363 1.03.363.48 0 .84-.168 1.1-.508.25-.343.38-.825.38-1.448 0-.599-.15-1.057-.44-1.375-.29-.319-.71-.479-1.25-.479-.5 0-.9.13-1.21.391l-.21.19-1.66-.414zm12.36 1.513h-4.08v-1.687h4.08v1.687zm3.72-2.527h1.12c.53 0 .93-.134 1.18-.399.26-.265.38-.617.38-1.057 0-.424-.12-.756-.38-.991-.25-.238-.6-.356-1.04-.356-.4 0-.74.111-1.01.333a1.05 1.05 0 00-.41.855h-2.09c0-.551.15-1.044.44-1.478.3-.439.72-.782 1.25-1.029a4.217 4.217 0 011.77-.369c1.11 0 1.99.269 2.62.805.63.53.95 1.264.95 2.201 0 .484-.15.927-.45 1.333a2.86 2.86 0 01-1.15.934c.59.212 1.03.531 1.32.955.3.427.44.927.44 1.508 0 .936-.34 1.687-1.02 2.252-.69.566-1.59.848-2.71.848-1.06 0-1.92-.279-2.59-.833-.67-.556-1-1.29-1-2.203h2.09c0 .397.15.72.45.972.3.25.66.376 1.1.376.49 0 .88-.131 1.16-.391.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm12.58 2.23h1.2v1.688h-1.2v2.282h-2.09v-2.282h-4.32l-.1-1.319 4.4-6.945h2.11v6.576zm-4.42 0h2.33v-3.723l-.14.24-2.19 3.483zM1405.6 594.471h1.12c.53 0 .92-.134 1.18-.399.25-.265.38-.617.38-1.056 0-.425-.13-.757-.38-.992-.25-.238-.6-.356-1.05-.356-.4 0-.73.111-1 .333a1.05 1.05 0 00-.41.855h-2.09c0-.551.15-1.044.44-1.478.3-.439.71-.782 1.25-1.029a4.17 4.17 0 011.76-.369c1.12 0 1.99.269 2.63.805.63.53.94 1.265.94 2.201 0 .484-.14.927-.44 1.333-.29.406-.68.717-1.16.934.6.212 1.04.531 1.33.955.29.427.44.927.44 1.508 0 .936-.34 1.687-1.03 2.252-.68.566-1.58.848-2.71.848-1.05 0-1.91-.279-2.58-.833-.67-.556-1-1.29-1-2.203h2.09c0 .397.15.72.44.972.3.25.67.376 1.1.376.5 0 .89-.131 1.17-.391.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm12.07-4.453v1.722h-.21c-.94.015-1.71.261-2.29.74-.57.478-.92 1.142-1.03 1.991.56-.569 1.27-.855 2.12-.855.92 0 1.65.328 2.19.985.54.656.81 1.522.81 2.594 0 .686-.15 1.305-.45 1.861-.29.554-.71.986-1.26 1.296-.54.31-1.15.464-1.84.464-1.11 0-2.01-.386-2.69-1.159-.68-.773-1.02-1.804-1.02-3.093v-.753c0-1.145.21-2.154.64-3.027.44-.879 1.06-1.558 1.86-2.036.81-.482 1.75-.727 2.82-.73h.35zm-2.04 5.278c-.34 0-.65.089-.92.269-.28.174-.48.406-.61.695v.638c0 .699.13 1.248.41 1.643.27.391.66.587 1.16.587.45 0 .81-.176 1.08-.528.28-.358.43-.82.43-1.385 0-.573-.15-1.036-.43-1.391-.28-.352-.65-.528-1.12-.528zm9.03 1.702h-4.08v-1.687h4.08v1.687zm3.72-2.527h1.12c.53 0 .93-.134 1.18-.399.26-.265.39-.617.39-1.056 0-.425-.13-.757-.39-.992-.25-.238-.6-.356-1.04-.356-.4 0-.74.111-1.01.333-.27.217-.4.503-.4.855h-2.1c0-.551.15-1.044.45-1.478.29-.439.71-.782 1.24-1.029a4.25 4.25 0 011.77-.369c1.11 0 1.99.269 2.62.805.63.53.95 1.265.95 2.201 0 .484-.15.927-.44 1.333-.3.406-.68.717-1.16.934.59.212 1.03.531 1.32.955.3.427.44.927.44 1.508 0 .936-.34 1.687-1.02 2.252-.68.566-1.59.848-2.71.848-1.06 0-1.92-.279-2.59-.833-.66-.556-1-1.29-1-2.203h2.1c0 .397.14.72.44.972.3.25.66.376 1.1.376.5 0 .88-.131 1.16-.391.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm13.56-3.172l-4.07 9.372h-2.21l4.08-8.851h-5.24v-1.695h7.44v1.174zm1.98 12.016l-1.09-.573.26-.471c.32-.59.49-1.176.5-1.76v-1.622h1.76v1.448a3.777 3.777 0 01-.41 1.622c-.26.546-.6.998-1.02 1.356zm3.3-7.83l.61-5.36h5.91v1.747h-4.19l-.26 2.265a3.28 3.28 0 011.58-.398c1.01 0 1.79.311 2.36.934.57.623.86 1.494.86 2.616 0 .681-.15 1.291-.44 1.832-.28.536-.69.953-1.23 1.253-.53.293-1.17.442-1.89.442-.64 0-1.23-.128-1.78-.384-.54-.262-.98-.625-1.29-1.094a2.861 2.861 0 01-.5-1.6h2.07c.04.439.19.782.45 1.027.27.243.61.363 1.04.363.47 0 .84-.168 1.09-.508.26-.343.39-.825.39-1.448 0-.599-.15-1.056-.45-1.375-.29-.319-.71-.479-1.25-.479-.5 0-.9.13-1.21.391l-.2.19-1.67-.414zM1418.07 646.381h1.12c.53 0 .92-.133 1.18-.399.25-.265.38-.617.38-1.056 0-.425-.13-.757-.38-.992-.25-.238-.6-.356-1.04-.356-.4 0-.74.111-1.01.334-.27.216-.41.502-.41.854h-2.09c0-.55.15-1.044.44-1.477.3-.44.72-.783 1.25-1.029a4.155 4.155 0 011.76-.369c1.12 0 1.99.268 2.63.804.63.531.94 1.265.94 2.201 0 .484-.14.927-.44 1.333-.29.406-.68.718-1.16.935.6.211 1.04.53 1.33.954.3.427.44.927.44 1.508 0 .936-.34 1.687-1.03 2.252-.68.566-1.58.848-2.71.848-1.05 0-1.91-.278-2.58-.833-.67-.556-1-1.29-1-2.202h2.09c0 .396.15.719.44.971.3.25.67.377 1.11.377.49 0 .88-.132 1.16-.392.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm13.56-3.172l-4.08 9.372h-2.21l4.09-8.851h-5.24v-1.695h7.44v1.174zm1.98 12.016l-1.1-.573.27-.471c.32-.589.48-1.175.49-1.759v-1.623h1.77l-.01 1.448c0 .536-.14 1.078-.4 1.623-.27.545-.61.997-1.02 1.355zm3.3-7.83l.61-5.36h5.91v1.747h-4.2l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.86 1.495.86 2.616 0 .681-.15 1.291-.44 1.832-.28.536-.69.953-1.23 1.253-.54.293-1.17.442-1.9.442a4.11 4.11 0 01-1.77-.384 3.189 3.189 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.07c.05.439.2.782.46 1.027.26.243.61.364 1.03.364.48 0 .84-.169 1.1-.508.25-.343.38-.825.38-1.448 0-.599-.14-1.057-.44-1.376-.29-.319-.71-.479-1.25-.479-.5 0-.9.13-1.21.392l-.2.189-1.67-.414zm12.36 1.513h-4.07v-1.687h4.07v1.687zm3.73-2.527h1.11c.53 0 .92-.133 1.18-.399.26-.265.38-.617.38-1.056 0-.425-.12-.757-.38-.992-.25-.238-.6-.356-1.04-.356-.4 0-.74.111-1.01.334-.27.216-.4.502-.4.854h-2.1c0-.55.15-1.044.44-1.477.3-.44.72-.783 1.25-1.029a4.234 4.234 0 011.77-.369c1.11 0 1.99.268 2.62.804.63.531.95 1.265.95 2.201 0 .484-.15.927-.44 1.333-.3.406-.68.718-1.16.935.59.211 1.03.53 1.32.954.3.427.44.927.44 1.508 0 .936-.34 1.687-1.02 2.252-.68.566-1.59.848-2.71.848-1.05 0-1.92-.278-2.59-.833-.67-.556-1-1.29-1-2.202h2.1c0 .396.14.719.44.971.3.25.66.377 1.1.377.5 0 .89-.132 1.16-.392.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.1v-1.637zm13.26-1.542c0 .511-.13.966-.39 1.36-.25.397-.61.712-1.05.95.51.246.91.586 1.21 1.021.3.43.45.937.45 1.521 0 .936-.32 1.678-.95 2.223-.64.541-1.51.812-2.61.812-1.09 0-1.96-.273-2.6-.82-.64-.545-.97-1.283-.97-2.215 0-.584.15-1.094.45-1.528.3-.434.71-.773 1.21-1.014-.45-.238-.8-.553-1.05-.95-.26-.394-.38-.849-.38-1.36 0-.898.3-1.613.9-2.144.6-.536 1.41-.804 2.44-.804 1.02 0 1.83.265 2.43.797.6.526.91 1.242.91 2.151zm-1.88 4.7c0-.458-.13-.825-.4-1.102-.26-.274-.62-.411-1.07-.411-.44 0-.8.137-1.07.411-.26.271-.39.638-.39 1.102 0 .448.13.812.39 1.086.26.275.62.414 1.08.414.46 0 .81-.134 1.07-.399s.39-.632.39-1.101zm-.22-4.598c0-.412-.11-.74-.32-.987-.22-.25-.53-.376-.92-.376s-.7.12-.92.363c-.21.241-.32.573-.32 1 0 .419.11.756.32 1.014.22.256.53.384.92.384.4 0 .7-.128.92-.384.21-.258.32-.595.32-1.014zm4.37 10.284l-1.09-.573.26-.471c.32-.589.49-1.175.5-1.759v-1.623h1.76v1.448a3.781 3.781 0 01-.41 1.623c-.26.545-.6.997-1.02 1.355zm3.3-7.83l.61-5.36h5.91v1.747h-4.19l-.26 2.265c.5-.265 1.02-.398 1.58-.398 1.01 0 1.79.311 2.36.934.57.623.86 1.495.86 2.616 0 .681-.15 1.291-.44 1.832-.28.536-.69.953-1.23 1.253-.53.293-1.17.442-1.9.442-.63 0-1.22-.128-1.77-.384a3.255 3.255 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.08c.04.439.19.782.45 1.027.27.243.61.364 1.04.364.47 0 .84-.169 1.09-.508.26-.343.39-.825.39-1.448 0-.599-.15-1.057-.45-1.376-.29-.319-.71-.479-1.25-.479-.5 0-.9.13-1.21.392l-.2.189-1.67-.414zM1450.1 698.295h1.11c.53 0 .93-.133 1.18-.398.26-.266.39-.618.39-1.057 0-.425-.13-.757-.39-.992-.25-.237-.59-.356-1.04-.356-.4 0-.74.111-1.01.334-.27.217-.4.502-.4.854h-2.09c0-.55.14-1.044.44-1.477.3-.44.71-.783 1.24-1.029a4.234 4.234 0 011.77-.369c1.11 0 1.99.269 2.62.804.63.531.95 1.265.95 2.201 0 .484-.15.927-.44 1.333-.3.406-.68.718-1.16.935.59.211 1.04.53 1.33.954.29.427.44.928.44 1.508 0 .936-.34 1.687-1.03 2.253-.68.565-1.58.847-2.71.847-1.05 0-1.91-.278-2.59-.833-.66-.556-1-1.29-1-2.202h2.1c0 .396.15.719.44.971.3.251.67.377 1.1.377.5 0 .89-.132 1.17-.392.28-.265.43-.615.43-1.051 0-1.051-.59-1.578-1.74-1.578h-1.11v-1.637zm13.26-1.542c0 .511-.13.966-.38 1.36a2.8 2.8 0 01-1.06.95c.51.246.91.586 1.21 1.021.3.431.45.937.45 1.521 0 .936-.32 1.678-.95 2.223-.64.541-1.51.812-2.6.812-1.1 0-1.97-.273-2.61-.82-.64-.545-.96-1.283-.96-2.215 0-.584.15-1.094.45-1.528.3-.434.7-.773 1.21-1.014-.45-.238-.81-.553-1.06-.95a2.491 2.491 0 01-.38-1.36c0-.898.3-1.613.9-2.144.6-.535 1.41-.804 2.44-.804 1.02 0 1.84.265 2.43.797.61.526.91 1.242.91 2.151zm-1.88 4.7c0-.458-.13-.825-.4-1.102-.26-.274-.62-.411-1.07-.411-.44 0-.8.137-1.06.411-.27.271-.4.638-.4 1.102 0 .448.13.812.39 1.086.26.275.62.414 1.09.414.45 0 .81-.134 1.06-.399.26-.265.39-.632.39-1.101zm-.21-4.598c0-.412-.11-.74-.33-.987-.22-.25-.52-.376-.92-.376-.39 0-.7.12-.91.363-.22.241-.33.573-.33 1 0 .419.11.756.33 1.014.21.256.52.384.92.384.39 0 .7-.128.91-.384.22-.258.33-.595.33-1.014zm4.36 10.284l-1.09-.573.26-.471c.32-.589.49-1.175.5-1.759v-1.623h1.77l-.01 1.448a3.781 3.781 0 01-.41 1.623c-.26.545-.6.997-1.02 1.355zm3.31-7.83l.6-5.36h5.91v1.747h-4.19l-.26 2.265c.5-.265 1.03-.398 1.59-.398 1 0 1.79.311 2.36.934.57.623.85 1.495.85 2.616 0 .681-.14 1.291-.43 1.832-.29.536-.7.953-1.23 1.254-.54.292-1.17.441-1.9.441-.64 0-1.23-.128-1.78-.384a3.225 3.225 0 01-1.29-1.094c-.32-.469-.48-1.001-.5-1.6h2.07c.04.439.2.782.45 1.027.27.243.62.364 1.04.364.47 0 .84-.169 1.09-.508.26-.343.39-.825.39-1.448 0-.599-.15-1.057-.44-1.376-.3-.319-.72-.478-1.26-.478-.49 0-.9.129-1.21.391l-.2.189-1.66-.414zm12.36 1.513h-4.08v-1.687h4.08v1.687zm3.72-2.527h1.12c.53 0 .92-.133 1.18-.398.25-.266.38-.618.38-1.057 0-.425-.13-.757-.38-.992-.25-.237-.6-.356-1.05-.356-.4 0-.73.111-1 .334-.27.217-.41.502-.41.854h-2.09c0-.55.15-1.044.44-1.477.3-.44.71-.783 1.25-1.029a4.155 4.155 0 011.76-.369c1.12 0 1.99.269 2.63.804.63.531.94 1.265.94 2.201 0 .484-.14.927-.44 1.333-.29.406-.68.718-1.16.935.6.211 1.04.53 1.33.954.29.427.44.928.44 1.508 0 .936-.34 1.687-1.03 2.253-.68.565-1.58.847-2.71.847-1.05 0-1.91-.278-2.58-.833-.67-.556-1-1.29-1-2.202h2.09c0 .396.15.719.44.971.3.251.67.377 1.1.377.5 0 .89-.132 1.17-.392.29-.265.43-.615.43-1.051 0-1.051-.58-1.578-1.74-1.578h-1.11v-1.637zm11.28 1.984c-.54.536-1.18.805-1.91.805-.93 0-1.68-.319-2.24-.957-.56-.642-.84-1.505-.84-2.592 0-.692.16-1.324.45-1.899.31-.578.73-1.027 1.27-1.346.54-.324 1.15-.485 1.83-.485.69 0 1.31.174 1.85.521.54.348.96.847 1.26 1.5.3.652.45 1.398.46 2.237v.775c0 1.758-.44 3.139-1.31 4.142-.88 1.005-2.12 1.541-3.72 1.61l-.51.005v-1.744l.46-.008c1.82-.081 2.81-.936 2.95-2.564zm-1.39-.795c.34 0 .62-.087.87-.262.24-.174.43-.384.55-.63v-.862c0-.71-.13-1.259-.4-1.65-.27-.392-.63-.588-1.09-.588-.42 0-.76.193-1.03.58-.27.38-.41.862-.41 1.441 0 .575.13 1.047.39 1.42.27.367.64.551 1.12.551zM1452.31 923.014h1.19v1.687h-1.19v2.282h-2.1v-2.282h-4.32l-.09-1.318 4.39-6.945h2.12v6.576zm-4.43 0h2.33v-3.723l-.13.239-2.2 3.484zm11.84 3.969h-2.1v-8.068l-2.5.775v-1.702l4.37-1.565h.23v10.56zm7.59-3.672h-4.08v-1.688h4.08v1.688zm7.78-.297h1.2v1.687h-1.2v2.282H1473v-2.282h-4.32l-.1-1.318 4.4-6.945h2.11v6.576zm-4.42 0h2.33v-3.723l-.14.239-2.19 3.484zm13.97 3.969h-7.22v-1.435l3.41-3.635c.47-.512.81-.959 1.03-1.339.23-.382.34-.744.34-1.087 0-.469-.11-.836-.35-1.101-.24-.27-.58-.406-1.02-.406-.47 0-.84.165-1.12.493-.27.323-.4.751-.4 1.281h-2.1c0-.641.15-1.227.45-1.759.31-.53.75-.946 1.31-1.246.56-.304 1.19-.456 1.9-.456 1.09 0 1.93.261 2.53.782.6.521.9 1.257.9 2.209 0 .522-.13 1.053-.4 1.594-.27.54-.74 1.17-1.39 1.889l-2.4 2.529h4.53v1.687zm1.92 2.644l-1.09-.573.26-.47c.33-.59.49-1.176.5-1.76v-1.622h1.77l-.01 1.448c0 .536-.14 1.077-.41 1.622-.26.545-.6.997-1.02 1.355zm3.31-7.829l.61-5.36h5.9v1.746h-4.19l-.26 2.266c.5-.265 1.03-.399 1.59-.399 1 0 1.79.312 2.36.935.57.623.85 1.494.85 2.616 0 .68-.14 1.29-.43 1.831-.29.536-.7.953-1.23 1.254-.54.293-1.17.441-1.9.441-.64 0-1.23-.128-1.78-.384a3.225 3.225 0 01-1.29-1.094c-.32-.469-.48-1.001-.5-1.6h2.07c.04.44.2.783.46 1.027.26.243.61.364 1.03.364.47 0 .84-.169 1.1-.508.25-.343.38-.825.38-1.448 0-.599-.15-1.057-.44-1.376-.3-.319-.72-.478-1.26-.478-.49 0-.9.13-1.21.391l-.2.189-1.66-.413zM1420.28 971.221h1.2v1.687h-1.2v2.282h-2.09v-2.282h-4.33l-.09-1.318 4.4-6.945h2.11v6.576zm-4.42 0h2.33v-3.723l-.14.239-2.19 3.484zm13.97 3.969h-7.22v-1.435l3.41-3.635c.47-.512.81-.959 1.03-1.339.23-.382.34-.743.34-1.086 0-.469-.12-.837-.35-1.102-.24-.27-.58-.406-1.02-.406-.47 0-.84.165-1.12.493-.27.323-.4.751-.4 1.282h-2.1c0-.642.15-1.228.45-1.76.31-.53.75-.945 1.31-1.246.56-.304 1.19-.456 1.9-.456 1.09 0 1.93.261 2.53.782.6.521.9 1.258.9 2.209 0 .523-.13 1.053-.4 1.594-.27.54-.74 1.17-1.39 1.889l-2.4 2.529h4.53v1.687zm1.92 2.644l-1.09-.573.26-.47c.32-.59.49-1.176.5-1.76v-1.622h1.77l-.01 1.448c0 .536-.14 1.077-.41 1.622-.26.545-.6.998-1.02 1.355zm3.31-7.829l.6-5.36h5.91v1.746h-4.19l-.26 2.266c.5-.265 1.03-.399 1.59-.399 1 0 1.79.312 2.36.935.57.623.85 1.494.85 2.616 0 .68-.14 1.29-.43 1.831-.29.536-.7.954-1.23 1.254-.54.293-1.17.441-1.9.441-.64 0-1.23-.128-1.78-.384a3.225 3.225 0 01-1.29-1.094c-.32-.469-.48-1.001-.5-1.6h2.07c.04.44.19.783.46 1.028.26.242.61.363 1.03.363.47 0 .84-.169 1.09-.508.26-.343.39-.825.39-1.448 0-.599-.15-1.057-.44-1.376-.3-.319-.72-.478-1.26-.478-.49 0-.9.13-1.21.391l-.2.189-1.66-.413zm12.36 1.513h-4.08v-1.688h4.08v1.688zm7.78-.297h1.2v1.687h-1.2v2.282h-2.09v-2.282h-4.32l-.1-1.318 4.4-6.945h2.11v6.576zm-4.42 0h2.33v-3.723l-.14.239-2.19 3.484zm8.88-2.23h1.11c.53 0 .93-.134 1.18-.399.26-.265.39-.617.39-1.057 0-.424-.13-.756-.39-.992-.25-.237-.59-.356-1.04-.356-.4 0-.74.111-1.01.334-.27.217-.4.502-.4.855h-2.09c0-.551.14-1.044.44-1.478.3-.439.71-.782 1.24-1.029a4.234 4.234 0 011.77-.369c1.12 0 1.99.269 2.62.805.63.53.95 1.264.95 2.2 0 .484-.15.928-.44 1.334-.3.406-.68.717-1.16.934.59.211 1.04.53 1.32.955.3.426.45.927.45 1.507 0 .936-.35 1.687-1.03 2.253-.68.565-1.58.847-2.71.847-1.05 0-1.92-.278-2.58-.832-.67-.557-1.01-1.291-1.01-2.203h2.1c0 .397.15.719.44.972.3.25.67.376 1.1.376.5 0 .89-.132 1.17-.391.28-.265.42-.616.42-1.052 0-1.051-.58-1.577-1.73-1.577h-1.11v-1.637zm7.02 8.843l-1.1-.573.26-.47c.33-.59.49-1.176.5-1.76v-1.622h1.77l-.01 1.448c0 .536-.14 1.077-.4 1.622-.27.545-.61.998-1.02 1.355zm3.3-7.829l.61-5.36h5.91v1.746h-4.2l-.26 2.266c.5-.265 1.03-.399 1.59-.399 1 0 1.79.312 2.36.935.57.623.85 1.494.85 2.616 0 .68-.14 1.29-.43 1.831-.29.536-.7.954-1.23 1.254-.54.293-1.17.441-1.9.441-.64 0-1.23-.128-1.77-.384a3.189 3.189 0 01-1.3-1.094 3.026 3.026 0 01-.5-1.6h2.07c.04.44.2.783.46 1.028.26.242.61.363 1.03.363.48 0 .84-.169 1.1-.508.25-.343.38-.825.38-1.448 0-.599-.15-1.057-.44-1.376-.3-.319-.71-.478-1.25-.478-.5 0-.91.13-1.21.391l-.21.189-1.66-.413zM1409.66 1021.28h1.2v1.69h-1.2v2.28h-2.09v-2.28h-4.32l-.1-1.32 4.4-6.95h2.11v6.58zm-4.42 0h2.33v-3.72l-.14.24-2.19 3.48zm8.88-2.23h1.11c.53 0 .93-.13 1.18-.4.26-.26.39-.62.39-1.06 0-.42-.13-.75-.39-.99-.25-.24-.6-.35-1.04-.35-.4 0-.74.11-1.01.33-.27.22-.4.5-.4.85h-2.1c0-.55.15-1.04.45-1.47.3-.44.71-.79 1.24-1.03.54-.25 1.13-.37 1.77-.37 1.11 0 1.99.27 2.62.8.63.53.95 1.27.95 2.2 0 .49-.15.93-.44 1.34-.3.4-.68.71-1.16.93.59.21 1.04.53 1.33.96.29.42.44.92.44 1.5 0 .94-.35 1.69-1.03 2.26-.68.56-1.59.84-2.71.84-1.05 0-1.91-.27-2.59-.83-.66-.55-1-1.29-1-2.2h2.1c0 .4.14.72.44.97s.67.38 1.1.38c.5 0 .89-.14 1.17-.39.28-.27.42-.62.42-1.06 0-1.05-.58-1.57-1.73-1.57h-1.11v-1.64zm7.01 8.84l-1.09-.57.26-.47c.33-.59.49-1.18.5-1.76v-1.62h1.77l-.01 1.45c0 .53-.14 1.07-.4 1.62-.27.54-.61 1-1.03 1.35zm3.31-7.83l.61-5.36h5.91v1.75h-4.2l-.26 2.27c.5-.27 1.03-.4 1.59-.4 1 0 1.79.31 2.36.93.57.62.85 1.5.85 2.62 0 .68-.14 1.29-.43 1.83-.28.53-.7.95-1.23 1.25-.54.3-1.17.44-1.9.44-.64 0-1.23-.12-1.77-.38-.55-.26-.98-.62-1.3-1.09-.31-.47-.48-1.01-.5-1.6h2.07c.05.44.2.78.46 1.02.26.25.61.37 1.03.37.48 0 .84-.17 1.1-.51.25-.34.38-.83.38-1.45 0-.6-.15-1.06-.44-1.38-.29-.31-.71-.47-1.25-.47-.5 0-.9.13-1.21.39l-.21.19-1.66-.42zm12.36 1.52h-4.08v-1.69h4.08v1.69zm7.79-.3h1.19v1.69h-1.19v2.28h-2.1v-2.28h-4.32l-.09-1.32 4.39-6.95h2.12v6.58zm-4.43 0h2.33v-3.72l-.13.24-2.2 3.48zm12.94 0h1.2v1.69h-1.2v2.28h-2.09v-2.28h-4.32l-.1-1.32 4.4-6.95h2.11v6.58zm-4.42 0h2.33v-3.72l-.14.24-2.19 3.48zM1370.73 1119.54h1.19v1.69h-1.19v2.28h-2.09v-2.28h-4.33l-.09-1.32 4.39-6.94h2.12v6.57zm-4.43 0h2.34v-3.72l-.14.24-2.2 3.48zm12.43-6.68v1.72h-.2c-.95.02-1.71.26-2.29.74-.57.48-.92 1.14-1.04 1.99.56-.57 1.27-.85 2.13-.85.91 0 1.64.33 2.18.98.54.66.82 1.52.82 2.6 0 .68-.15 1.3-.46 1.86-.29.55-.71.98-1.25 1.29-.55.31-1.16.47-1.85.47-1.1 0-2-.39-2.69-1.16-.68-.77-1.02-1.81-1.02-3.09v-.76c0-1.14.21-2.15.64-3.02.44-.88 1.06-1.56 1.87-2.04s1.75-.73 2.81-.73h.35zm-2.04 5.28c-.34 0-.65.09-.92.27-.28.17-.48.4-.61.69v.64c0 .7.14 1.25.41 1.64.28.39.67.59 1.16.59.45 0 .81-.18 1.09-.53.28-.36.42-.82.42-1.38 0-.58-.14-1.04-.42-1.39-.28-.36-.66-.53-1.13-.53zm9.04 1.7h-4.08v-1.69h4.08v1.69zm7.78-.3h1.2v1.69h-1.2v2.28h-2.09v-2.28h-4.32l-.1-1.32 4.4-6.94h2.11v6.57zm-4.42 0h2.33v-3.72l-.14.24-2.19 3.48zm13.92-5.4l-4.08 9.37h-2.21l4.09-8.85h-5.25v-1.69h7.45v1.17zm1.97 12.02l-1.09-.58.26-.47c.33-.59.49-1.17.5-1.76v-1.62h1.77l-.01 1.45c0 .53-.14 1.08-.4 1.62-.27.55-.61 1-1.03 1.36zm3.31-7.83l.61-5.36h5.91v1.74h-4.2l-.26 2.27c.5-.27 1.03-.4 1.59-.4 1 0 1.79.31 2.36.93.57.63.85 1.5.85 2.62 0 .68-.14 1.29-.43 1.83s-.7.96-1.23 1.26c-.54.29-1.17.44-1.9.44-.64 0-1.23-.13-1.77-.39-.55-.26-.98-.62-1.3-1.09-.32-.47-.48-1-.5-1.6h2.07c.04.44.2.78.46 1.03.26.24.61.36 1.03.36.48 0 .84-.17 1.1-.51.25-.34.38-.82.38-1.45 0-.59-.15-1.05-.44-1.37-.3-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.21.19-1.66-.41zM1340.95 1164.04h1.2v1.69h-1.2v2.28h-2.09v-2.28h-4.32l-.1-1.32 4.4-6.95h2.11v6.58zm-4.42 0h2.33v-3.72l-.14.24-2.19 3.48zm13.92-5.4l-4.08 9.37h-2.21l4.09-8.85h-5.24v-1.7h7.44v1.18zm1.98 12.01l-1.1-.57.26-.47c.33-.59.49-1.17.5-1.76v-1.62h1.77l-.01 1.45c0 .53-.14 1.07-.4 1.62-.27.54-.61 1-1.02 1.35zm3.3-7.83l.61-5.36h5.91v1.75h-4.2l-.26 2.27c.5-.27 1.03-.4 1.59-.4 1 0 1.79.31 2.36.93.57.63.86 1.5.86 2.62 0 .68-.15 1.29-.44 1.83-.28.54-.69.95-1.23 1.25-.54.3-1.17.45-1.9.45-.64 0-1.23-.13-1.77-.39-.55-.26-.98-.62-1.3-1.09-.31-.47-.48-1-.5-1.6h2.07c.05.44.2.78.46 1.02.26.25.61.37 1.03.37.48 0 .84-.17 1.1-.51.25-.34.38-.82.38-1.45 0-.6-.14-1.05-.44-1.37-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.21.19-1.66-.42zm12.36 1.52h-4.07v-1.69h4.07v1.69zm7.79-.3h1.19v1.69h-1.19v2.28h-2.1v-2.28h-4.32l-.09-1.32 4.39-6.95h2.12v6.58zm-4.43 0h2.33v-3.72l-.13.24-2.2 3.48zm13.63-3.77c0 .51-.13.96-.39 1.36-.25.4-.61.71-1.05.95.51.24.91.58 1.21 1.02.3.43.45.94.45 1.52 0 .94-.32 1.68-.95 2.22-.64.54-1.51.82-2.61.82-1.09 0-1.96-.28-2.6-.82-.64-.55-.97-1.29-.97-2.22 0-.58.15-1.09.45-1.53.3-.43.7-.77 1.21-1.01-.45-.24-.8-.55-1.05-.95-.26-.4-.38-.85-.38-1.36 0-.9.3-1.61.9-2.14.6-.54 1.41-.81 2.44-.81 1.02 0 1.83.27 2.43.8.6.52.91 1.24.91 2.15zm-1.88 4.7c0-.46-.13-.83-.4-1.1-.26-.28-.62-.41-1.07-.41-.44 0-.8.13-1.06.41-.27.27-.4.63-.4 1.1 0 .45.13.81.39 1.08.26.28.62.42 1.08.42.46 0 .81-.14 1.07-.4.26-.27.39-.63.39-1.1zm-.22-4.6c0-.41-.1-.74-.32-.99s-.53-.37-.92-.37-.7.12-.92.36c-.21.24-.32.57-.32 1 0 .42.11.76.32 1.01.22.26.53.39.92.39.4 0 .7-.13.92-.39.22-.25.32-.59.32-1.01zm4.37 10.28l-1.09-.57.26-.47c.32-.59.49-1.17.5-1.76v-1.62h1.76v1.45c-.01.53-.14 1.07-.41 1.62-.26.54-.6 1-1.02 1.35zm3.3-7.83l.61-5.36h5.91v1.75h-4.19l-.26 2.27c.49-.27 1.02-.4 1.58-.4 1.01 0 1.79.31 2.36.93.57.63.86 1.5.86 2.62 0 .68-.15 1.29-.44 1.83-.28.54-.69.95-1.23 1.25-.53.3-1.17.45-1.9.45-.63 0-1.22-.13-1.77-.39-.54-.26-.98-.62-1.3-1.09-.31-.47-.48-1-.5-1.6h2.08c.04.44.19.78.45 1.02.27.25.61.37 1.04.37.47 0 .84-.17 1.09-.51.26-.34.39-.82.39-1.45 0-.6-.15-1.05-.45-1.37-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.2.19-1.67-.42zM1330.84 1208.54h1.2v1.69h-1.2v2.28h-2.09v-2.28h-4.32l-.1-1.32 4.4-6.95h2.11v6.58zm-4.42 0h2.33v-3.72l-.14.24-2.19 3.48zm13.62-3.77c0 .51-.13.96-.38 1.36-.26.4-.61.71-1.06.95.51.24.92.58 1.22 1.02.3.43.45.94.45 1.52 0 .94-.32 1.68-.96 2.22-.64.54-1.5.82-2.6.82s-1.96-.28-2.61-.82c-.64-.55-.96-1.29-.96-2.22 0-.58.15-1.09.45-1.53.3-.43.7-.77 1.21-1.01-.45-.24-.8-.55-1.06-.95-.25-.4-.38-.85-.38-1.36 0-.9.3-1.61.9-2.14.6-.54 1.42-.81 2.44-.81 1.03 0 1.84.27 2.44.8.6.52.9 1.24.9 2.15zm-1.87 4.7c0-.46-.14-.83-.4-1.1-.27-.28-.63-.41-1.07-.41-.45 0-.8.13-1.07.41-.26.27-.4.63-.4 1.1 0 .45.13.81.39 1.08.27.28.63.42 1.09.42.45 0 .81-.14 1.06-.4.27-.27.4-.63.4-1.1zm-.22-4.6c0-.41-.11-.74-.33-.99-.21-.25-.52-.37-.92-.37-.39 0-.69.12-.91.36-.22.24-.33.57-.33 1 0 .42.11.76.33 1.01.22.26.53.39.92.39.4 0 .7-.13.91-.39.22-.25.33-.59.33-1.01zm4.37 10.28l-1.1-.57.26-.47c.33-.59.49-1.17.5-1.76v-1.62h1.77l-.01 1.45c0 .53-.14 1.07-.4 1.62-.27.54-.61 1-1.02 1.35zm3.3-7.83l.61-5.36h5.91v1.75h-4.2l-.26 2.27c.5-.27 1.03-.4 1.59-.4 1 0 1.79.31 2.36.93.57.63.86 1.5.86 2.62 0 .68-.15 1.29-.44 1.83-.28.54-.69.95-1.23 1.25-.54.3-1.17.45-1.9.45-.64 0-1.23-.13-1.77-.39-.55-.26-.98-.62-1.3-1.09-.31-.47-.48-1-.5-1.6h2.07c.05.44.2.78.46 1.02.26.25.61.37 1.03.37.48 0 .84-.17 1.1-.51.25-.34.38-.82.38-1.45 0-.6-.14-1.05-.44-1.37-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.21.19-1.66-.42zm12.36 1.52h-4.07v-1.69h4.07v1.69zm7.79-.3h1.19v1.69h-1.19v2.28h-2.1v-2.28h-4.32l-.09-1.32 4.39-6.95h2.12v6.58zm-4.43 0h2.33v-3.72l-.13.24-2.2 3.48zm11.65-.25c-.55.54-1.19.81-1.91.81-.93 0-1.68-.32-2.24-.96-.56-.64-.84-1.5-.84-2.59 0-.69.15-1.32.45-1.9.3-.58.72-1.02 1.26-1.34a3.46 3.46 0 011.83-.49c.69 0 1.31.17 1.85.52s.96.85 1.26 1.5c.3.65.45 1.4.46 2.24v.77c0 1.76-.44 3.14-1.31 4.15-.87 1-2.11 1.54-3.72 1.61h-.51v-1.74l.46-.01c1.82-.08 2.81-.94 2.96-2.57zm-1.4-.79c.34 0 .63-.09.87-.26.25-.18.43-.39.56-.63v-.86c0-.71-.14-1.26-.41-1.65-.27-.4-.63-.59-1.09-.59-.41 0-.76.19-1.03.58-.27.38-.41.86-.41 1.44 0 .57.13 1.05.39 1.42.27.37.64.55 1.12.55zM1191.47 1359.36l.61-5.36h5.91v1.74h-4.19l-.27 2.27c.5-.27 1.03-.4 1.59-.4 1.01 0 1.79.31 2.36.93.57.63.86 1.5.86 2.62 0 .68-.15 1.29-.44 1.83-.28.54-.69.96-1.23 1.26-.53.29-1.17.44-1.9.44-.63 0-1.22-.13-1.77-.39s-.98-.62-1.3-1.09c-.31-.47-.48-1-.5-1.6h2.08c.04.44.19.78.45 1.03.27.24.61.36 1.04.36.47 0 .83-.17 1.09-.51.26-.34.38-.82.38-1.45 0-.6-.14-1.05-.44-1.37-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.2.19-1.67-.41zm13.29 5.18h-2.09v-8.07l-2.5.78v-1.7l4.37-1.57h.22v10.56zm7.59-3.67h-4.08v-1.69h4.08v1.69zm1.91-1.51l.6-5.36h5.91v1.74h-4.19l-.26 2.27c.5-.27 1.03-.4 1.59-.4 1 0 1.79.31 2.36.93.57.63.85 1.5.85 2.62 0 .68-.14 1.29-.43 1.83s-.7.96-1.23 1.26c-.54.29-1.17.44-1.9.44-.64 0-1.23-.13-1.78-.39a3.2 3.2 0 01-1.29-1.09c-.32-.47-.48-1-.5-1.6h2.07c.04.44.19.78.46 1.03.26.24.61.36 1.03.36.47 0 .84-.17 1.09-.51.26-.34.39-.82.39-1.45 0-.6-.15-1.05-.44-1.37-.3-.32-.72-.48-1.26-.48-.49 0-.9.13-1.21.39l-.2.19-1.66-.41zm15.43 5.18h-7.23v-1.43l3.41-3.64c.47-.51.82-.96 1.04-1.34.23-.38.34-.74.34-1.08 0-.47-.12-.84-.36-1.11-.23-.27-.57-.4-1.01-.4-.47 0-.85.16-1.12.49-.27.32-.41.75-.41 1.28h-2.1c0-.64.15-1.22.46-1.76.31-.53.74-.94 1.3-1.24.56-.31 1.2-.46 1.91-.46 1.08 0 1.93.26 2.52.78.61.52.91 1.26.91 2.21 0 .53-.14 1.06-.41 1.6-.27.54-.73 1.17-1.39 1.89l-2.39 2.52h4.53v1.69zm1.92 2.65l-1.09-.58.26-.47c.32-.59.49-1.17.5-1.76v-1.62h1.76v1.45c-.01.53-.14 1.08-.41 1.62-.27.55-.61 1-1.02 1.36zm3.3-7.83l.61-5.36h5.91v1.74h-4.19l-.26 2.27c.49-.27 1.02-.4 1.58-.4 1.01 0 1.79.31 2.36.93.57.63.86 1.5.86 2.62 0 .68-.15 1.29-.44 1.83-.28.54-.69.96-1.23 1.26-.54.29-1.17.44-1.9.44-.63 0-1.23-.13-1.77-.39-.55-.26-.98-.62-1.3-1.09-.31-.47-.48-1-.5-1.6h2.08c.04.44.19.78.45 1.03.27.24.61.36 1.04.36.47 0 .83-.17 1.09-.51.26-.34.38-.82.38-1.45 0-.6-.14-1.05-.44-1.37-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.2.19-1.67-.41zM1130.73 1379.75l.61-5.36h5.91v1.75h-4.2l-.26 2.26c.5-.26 1.03-.4 1.59-.4 1 0 1.79.32 2.36.94.57.62.86 1.49.86 2.61 0 .69-.15 1.3-.44 1.84-.28.53-.7.95-1.23 1.25-.54.29-1.17.44-1.9.44-.64 0-1.23-.13-1.77-.38-.55-.26-.98-.63-1.3-1.1-.31-.47-.48-1-.5-1.6h2.07c.05.44.2.79.46 1.03s.61.36 1.03.36c.48 0 .84-.16 1.1-.5.25-.35.38-.83.38-1.45 0-.6-.15-1.06-.44-1.38-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.4l-.21.18-1.66-.41zm15.43 5.19h-7.23v-1.44l3.42-3.63c.46-.52.81-.96 1.03-1.34.23-.38.34-.75.34-1.09 0-.47-.12-.84-.35-1.1-.24-.27-.58-.41-1.02-.41-.47 0-.84.17-1.12.5-.27.32-.4.75-.4 1.28h-2.11c0-.64.16-1.23.46-1.76.31-.53.74-.95 1.3-1.25.56-.3 1.2-.45 1.91-.45 1.08 0 1.93.26 2.53.78.6.52.9 1.26.9 2.21 0 .52-.13 1.05-.4 1.59s-.74 1.17-1.39 1.89l-2.4 2.53h4.53v1.69zm1.92 2.64l-1.09-.57.26-.47c.32-.59.49-1.18.5-1.76v-1.63h1.77l-.01 1.45c-.01.54-.14 1.08-.41 1.63-.26.54-.6.99-1.02 1.35zm3.3-7.83l.61-5.36h5.91v1.75h-4.19l-.26 2.26c.5-.26 1.02-.4 1.58-.4 1.01 0 1.8.32 2.36.94.58.62.86 1.49.86 2.61 0 .69-.14 1.3-.43 1.84-.29.53-.7.95-1.24 1.25-.53.29-1.16.44-1.89.44-.64 0-1.23-.13-1.78-.38-.54-.26-.98-.63-1.29-1.1-.32-.47-.48-1-.5-1.6h2.07c.04.44.19.79.45 1.03.27.24.61.36 1.04.36.47 0 .84-.16 1.09-.5.26-.35.39-.83.39-1.45 0-.6-.15-1.06-.44-1.38-.3-.32-.72-.48-1.26-.48-.5 0-.9.13-1.21.4l-.2.18-1.67-.41zm12.37 1.51h-4.08v-1.68h4.08v1.68zm1.9-1.51l.61-5.36h5.91v1.75h-4.19l-.26 2.26c.49-.26 1.02-.4 1.58-.4 1.01 0 1.79.32 2.36.94.57.62.86 1.49.86 2.61 0 .69-.15 1.3-.44 1.84-.28.53-.69.95-1.23 1.25-.53.29-1.17.44-1.9.44-.63 0-1.22-.13-1.77-.38-.55-.26-.98-.63-1.3-1.1-.31-.47-.48-1-.5-1.6h2.07c.05.44.2.79.46 1.03.27.24.61.36 1.04.36.47 0 .84-.16 1.09-.5.26-.35.39-.83.39-1.45 0-.6-.15-1.06-.45-1.38-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.4l-.2.18-1.67-.41zm10.34-1.01h1.11c.53 0 .93-.14 1.18-.4.26-.27.39-.62.39-1.06 0-.42-.13-.76-.39-.99-.25-.24-.6-.36-1.04-.36-.4 0-.74.11-1.01.34-.27.21-.4.5-.4.85h-2.1c0-.55.15-1.04.45-1.48.3-.44.71-.78 1.24-1.02.54-.25 1.13-.37 1.77-.37 1.11 0 1.99.26 2.62.8.63.53.95 1.27.95 2.2 0 .49-.15.93-.44 1.33-.3.41-.68.72-1.16.94.59.21 1.03.53 1.32.95.3.43.45.93.45 1.51 0 .94-.35 1.69-1.03 2.25-.68.57-1.59.85-2.71.85-1.05 0-1.92-.28-2.59-.83-.66-.56-1-1.29-1-2.2h2.1c0 .39.14.72.44.97s.67.37 1.1.37c.5 0 .89-.13 1.17-.39.28-.26.42-.61.42-1.05 0-1.05-.58-1.58-1.74-1.58h-1.1v-1.63zm7.02 8.84l-1.1-.57.26-.47c.33-.59.49-1.18.5-1.76v-1.63h1.77l-.01 1.45c0 .54-.14 1.08-.4 1.63-.27.54-.61.99-1.02 1.35zm3.3-7.83l.61-5.36h5.91v1.75h-4.2l-.26 2.26c.5-.26 1.03-.4 1.59-.4 1 0 1.79.32 2.36.94.57.62.85 1.49.85 2.61 0 .69-.14 1.3-.43 1.84-.29.53-.7.95-1.23 1.25-.54.29-1.17.44-1.9.44-.64 0-1.23-.13-1.78-.38-.54-.26-.97-.63-1.29-1.1-.31-.47-.48-1-.5-1.6h2.07c.04.44.2.79.46 1.03s.61.36 1.03.36c.48 0 .84-.16 1.1-.5.25-.35.38-.83.38-1.45 0-.6-.15-1.06-.44-1.38-.3-.32-.71-.48-1.26-.48-.49 0-.9.13-1.2.4l-.21.18-1.66-.41zM1083.03 1402l.61-5.36h5.91v1.75h-4.19l-.27 2.26c.5-.26 1.03-.4 1.59-.4 1 0 1.79.32 2.36.94.57.62.86 1.49.86 2.61 0 .69-.15 1.3-.44 1.84-.28.53-.69.95-1.23 1.25-.53.29-1.17.44-1.9.44-.64 0-1.23-.13-1.77-.38-.55-.26-.98-.63-1.3-1.1-.31-.47-.48-1-.5-1.6h2.07c.05.44.2.79.46 1.03.27.24.61.36 1.04.36.47 0 .83-.16 1.09-.5.26-.35.38-.83.38-1.45 0-.6-.14-1.06-.44-1.38-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.4l-.2.18-1.67-.41zm10.34-1.01h1.11c.53 0 .92-.14 1.18-.4.26-.27.38-.62.38-1.06 0-.42-.12-.76-.38-.99-.25-.24-.6-.36-1.04-.36-.4 0-.74.11-1.01.34-.27.21-.4.5-.4.85h-2.1c0-.55.15-1.04.45-1.48.29-.44.71-.78 1.24-1.02.54-.25 1.12-.37 1.77-.37 1.11 0 1.99.26 2.62.8.63.53.95 1.27.95 2.2 0 .49-.15.93-.44 1.33-.3.41-.68.72-1.16.94.59.21 1.03.53 1.32.95.3.43.44.93.44 1.51 0 .94-.34 1.69-1.02 2.25-.69.57-1.59.85-2.71.85-1.05 0-1.92-.28-2.59-.83-.66-.56-1-1.29-1-2.2h2.1c0 .39.14.72.44.97s.66.37 1.1.37c.5 0 .88-.13 1.16-.39.29-.26.43-.61.43-1.05 0-1.05-.58-1.58-1.74-1.58h-1.1v-1.63zm7.01 8.84l-1.09-.57.26-.47c.32-.59.49-1.18.5-1.76v-1.63h1.77l-.01 1.45c-.01.54-.14 1.08-.41 1.63-.26.54-.6.99-1.02 1.35zm3.31-7.83l.6-5.36h5.91v1.75h-4.19l-.26 2.26c.5-.26 1.03-.4 1.59-.4 1 0 1.79.32 2.36.94.57.62.85 1.49.85 2.61 0 .69-.14 1.3-.43 1.84-.29.53-.7.95-1.23 1.25-.54.29-1.17.44-1.9.44-.64 0-1.23-.13-1.78-.38-.54-.26-.97-.63-1.29-1.1-.32-.47-.48-1-.5-1.6h2.07c.04.44.2.79.45 1.03.27.24.62.36 1.04.36.47 0 .84-.16 1.1-.5.25-.35.38-.83.38-1.45 0-.6-.15-1.06-.44-1.38-.3-.32-.72-.48-1.26-.48-.49 0-.9.13-1.21.4l-.2.18-1.66-.41zm12.36 1.51h-4.08v-1.68h4.08v1.68zm1.9-1.51l.61-5.36h5.91v1.75h-4.19l-.26 2.26c.49-.26 1.02-.4 1.58-.4 1.01 0 1.8.32 2.36.94.57.62.86 1.49.86 2.61 0 .69-.15 1.3-.43 1.84-.29.53-.7.95-1.24 1.25-.53.29-1.17.44-1.89.44-.64 0-1.23-.13-1.78-.38-.54-.26-.98-.63-1.29-1.1-.32-.47-.48-1-.51-1.6h2.08c.04.44.19.79.45 1.03.27.24.61.36 1.04.36.47 0 .84-.16 1.09-.5.26-.35.39-.83.39-1.45 0-.6-.15-1.06-.45-1.38-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.4l-.2.18-1.67-.41zm14.4 1.22h1.2v1.68h-1.2v2.29h-2.09v-2.29h-4.32l-.1-1.31 4.4-6.95h2.11v6.58zm-4.42 0h2.33v-3.73l-.14.24-2.19 3.49zM984.765 1450.21l.609-5.36h5.91v1.74h-4.194l-.261 2.27c.497-.27 1.027-.4 1.587-.4 1.003 0 1.791.31 2.36.93.57.63.855 1.5.855 2.62 0 .68-.145 1.29-.434 1.83-.285.54-.695.95-1.231 1.26-.536.29-1.17.44-1.898.44a4.07 4.07 0 01-1.775-.39 3.179 3.179 0 01-1.296-1.09 3 3 0 01-.5-1.6h2.072c.043.44.195.78.457 1.03.265.24.61.36 1.034.36.473 0 .838-.17 1.094-.51.256-.34.384-.82.384-1.45 0-.6-.147-1.05-.441-1.37-.295-.32-.712-.48-1.254-.48-.497 0-.901.13-1.209.39l-.204.19-1.665-.41zm13.884-5.47v1.72h-.202c-.948.02-1.71.26-2.29.74-.573.48-.92 1.14-1.035 1.99.56-.57 1.267-.85 2.121-.85.918 0 1.647.33 2.188.98.541.66.809 1.52.809 2.6 0 .68-.15 1.3-.447 1.86-.293.55-.714.98-1.259 1.29-.542.31-1.155.47-1.841.47-1.109 0-2.008-.39-2.694-1.16-.681-.78-1.02-1.81-1.02-3.1v-.75c0-1.14.213-2.15.643-3.03.436-.87 1.055-1.55 1.862-2.03.812-.48 1.75-.73 2.818-.73h.347zm-2.042 5.28c-.339 0-.645.09-.919.27-.277.17-.479.4-.61.69v.64c0 .7.139 1.25.413 1.64.275.39.662.59 1.159.59.449 0 .812-.18 1.086-.53.28-.36.421-.82.421-1.38 0-.58-.141-1.04-.421-1.39-.28-.36-.656-.53-1.129-.53zm9.043 1.7h-4.08v-1.69h4.08v1.69zm1.9-1.51l.61-5.36h5.91v1.74h-4.2l-.26 2.27c.5-.27 1.03-.4 1.59-.4 1 0 1.79.31 2.36.93.57.63.86 1.5.86 2.62 0 .68-.15 1.29-.44 1.83-.28.54-.69.95-1.23 1.26-.54.29-1.17.44-1.9.44-.64 0-1.23-.13-1.77-.39-.55-.26-.98-.62-1.3-1.09-.31-.47-.48-1-.5-1.6h2.07c.05.44.2.78.46 1.03.27.24.61.36 1.03.36.48 0 .84-.17 1.1-.51.25-.34.38-.82.38-1.45 0-.6-.14-1.05-.44-1.37-.29-.32-.71-.48-1.25-.48-.5 0-.9.13-1.21.39l-.21.19-1.66-.41zm15.38-4.19l-4.08 9.37h-2.21l4.08-8.85h-5.24v-1.69h7.45v1.17zm1.97 12.02l-1.09-.58.26-.47c.32-.59.49-1.17.5-1.76v-1.62h1.77l-.01 1.45c-.01.53-.14 1.08-.41 1.62-.26.55-.6 1-1.02 1.36zm3.31-7.83l.6-5.36h5.91v1.74h-4.19l-.26 2.27c.5-.27 1.03-.4 1.58-.4 1.01 0 1.8.31 2.37.93.57.63.85 1.5.85 2.62 0 .68-.14 1.29-.43 1.83s-.7.95-1.24 1.26c-.53.29-1.16.44-1.89.44-.64 0-1.23-.13-1.78-.39-.54-.26-.98-.62-1.29-1.09-.32-.47-.48-1-.5-1.6h2.07c.04.44.19.78.45 1.03.27.24.62.36 1.04.36.47 0 .84-.17 1.09-.51.26-.34.39-.82.39-1.45 0-.6-.15-1.05-.44-1.37-.3-.32-.72-.48-1.26-.48-.49 0-.9.13-1.21.39l-.2.19-1.66-.41zM926.782 1472.45l.61-5.36h5.909v1.75h-4.194l-.26 2.27c.497-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.57.62.855 1.5.855 2.62 0 .68-.146 1.29-.436 1.83-.283.54-.695.95-1.231 1.25-.536.3-1.168.44-1.896.44-.638 0-1.23-.12-1.775-.38a3.172 3.172 0 01-1.298-1.09c-.313-.47-.48-1-.498-1.6h2.071c.044.44.196.78.456 1.02.265.25.612.37 1.036.37.473 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.148-1.06-.443-1.37-.293-.32-.712-.48-1.252-.48-.498 0-.901.13-1.21.39l-.203.19-1.666-.42zm15.375-4.18l-4.077 9.37h-2.208l4.085-8.85h-5.244v-1.7h7.444v1.18zm1.979 12.01l-1.094-.57.261-.47c.323-.59.49-1.18.499-1.76v-1.62h1.767l-.008 1.45c-.003.53-.139 1.07-.404 1.62-.267.54-.606 1-1.021 1.35zm3.302-7.83l.608-5.36h5.911v1.75h-4.194l-.262 2.27c.499-.27 1.027-.4 1.587-.4 1.003 0 1.791.31 2.361.93.571.62.854 1.5.854 2.62 0 .68-.144 1.29-.434 1.83a3.02 3.02 0 01-1.231 1.25c-.535.3-1.168.44-1.898.44-.636 0-1.228-.12-1.775-.38a3.179 3.179 0 01-1.296-1.09c-.313-.47-.48-1-.498-1.6h2.071c.042.44.194.78.456 1.02.265.25.61.37 1.034.37.475 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.146-1.06-.441-1.37-.295-.32-.712-.48-1.254-.48-.496 0-.899.13-1.208.39l-.202.19-1.667-.42zm12.363 1.52h-4.077v-1.69h4.077v1.69zm1.904-1.52l.61-5.36h5.909v1.75h-4.194l-.26 2.27c.497-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.57.62.855 1.5.855 2.62 0 .68-.146 1.29-.436 1.83a3.02 3.02 0 01-1.231 1.25c-.535.3-1.168.44-1.896.44-.638 0-1.23-.12-1.775-.38a3.172 3.172 0 01-1.298-1.09c-.313-.47-.48-1-.498-1.6h2.071c.042.44.196.78.456 1.02.265.25.612.37 1.036.37.473 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.148-1.06-.443-1.37-.295-.32-.712-.48-1.252-.48-.499 0-.901.13-1.21.39l-.203.19-1.666-.42zm15.079-2.55c0 .51-.128.96-.384 1.36-.256.39-.608.71-1.057.95.512.24.918.58 1.216 1.02.301.43.449.94.449 1.52 0 .94-.319 1.68-.955 2.22-.638.54-1.505.81-2.601.81s-1.965-.27-2.607-.82c-.641-.54-.962-1.28-.962-2.21 0-.58.148-1.09.449-1.53.298-.43.702-.77 1.208-1.01-.448-.24-.8-.56-1.056-.95-.252-.4-.377-.85-.377-1.36 0-.9.299-1.62.898-2.15.599-.53 1.412-.8 2.44-.8 1.025 0 1.835.26 2.434.8.602.52.905 1.24.905 2.15zm-1.877 4.7c0-.46-.131-.83-.396-1.1-.267-.28-.623-.42-1.072-.42-.445 0-.799.14-1.066.42-.265.27-.399.63-.399 1.1 0 .45.132.81.392 1.08.261.28.623.42 1.086.42.454 0 .81-.14 1.066-.4.26-.27.389-.63.389-1.1zm-.217-4.6c0-.41-.107-.74-.324-.99-.219-.25-.525-.37-.921-.37-.392 0-.696.12-.913.36-.217.24-.326.57-.326 1 0 .42.109.76.326 1.01.217.26.525.39.92.39.397 0 .701-.13.914-.39.217-.25.324-.59.324-1.01zm4.369 10.28l-1.094-.57.261-.47c.323-.59.49-1.18.499-1.76v-1.62h1.767l-.008 1.45c-.003.53-.139 1.07-.404 1.62-.267.54-.606 1-1.021 1.35zm3.302-7.83l.608-5.36h5.911v1.75h-4.194l-.262 2.27c.499-.27 1.027-.4 1.587-.4 1.003 0 1.791.31 2.361.93.569.62.854 1.5.854 2.62 0 .68-.144 1.29-.434 1.83a3.02 3.02 0 01-1.231 1.25c-.535.3-1.17.44-1.898.44-.636 0-1.228-.12-1.775-.38a3.17 3.17 0 01-1.295-1.09c-.314-.47-.481-1-.501-1.6h2.073c.042.44.194.78.456 1.02.265.25.61.37 1.034.37.475 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.146-1.06-.441-1.37-.295-.32-.712-.48-1.254-.48-.496 0-.901.13-1.208.39l-.204.19-1.665-.42zM888.354 1496.56l.608-5.36h5.911v1.74h-4.194l-.261 2.27c.497-.27 1.027-.4 1.587-.4 1.003 0 1.791.31 2.36.93.569.63.855 1.5.855 2.62 0 .68-.145 1.29-.434 1.83a3.02 3.02 0 01-1.231 1.25c-.536.3-1.17.45-1.899.45-.637 0-1.229-.13-1.774-.39a3.179 3.179 0 01-1.296-1.09c-.313-.47-.48-1-.501-1.6h2.073c.043.44.195.78.456 1.03.266.24.61.36 1.035.36.473 0 .838-.17 1.094-.51.256-.34.384-.82.384-1.45 0-.6-.147-1.05-.442-1.37-.294-.32-.712-.48-1.253-.48-.497 0-.901.13-1.209.39l-.204.19-1.665-.41zm15.079-2.56c0 .51-.128.96-.383 1.36-.256.4-.609.71-1.059.95.512.25.918.58 1.218 1.02.299.43.449.94.449 1.52 0 .94-.319 1.68-.957 2.22-.638.55-1.504.82-2.599.82-1.096 0-1.966-.28-2.607-.82-.644-.55-.964-1.29-.964-2.22 0-.58.15-1.09.448-1.53.301-.43.703-.77 1.211-1.01-.45-.24-.803-.55-1.059-.95-.25-.4-.376-.85-.376-1.36 0-.9.3-1.61.899-2.14.597-.54 1.411-.81 2.44-.81 1.024 0 1.836.27 2.433.8.604.52.906 1.24.906 2.15zm-1.876 4.7c0-.46-.133-.83-.399-1.1-.265-.28-.623-.41-1.071-.41-.445 0-.799.13-1.064.41-.266.27-.399.64-.399 1.1 0 .45.13.81.391 1.09.262.27.623.41 1.087.41.454 0 .808-.13 1.064-.4.261-.26.391-.63.391-1.1zm-.217-4.6c0-.41-.109-.74-.326-.99-.217-.25-.525-.37-.92-.37-.391 0-.695.12-.912.36-.217.24-.326.57-.326 1 0 .42.109.76.326 1.01.217.26.523.39.92.39.395 0 .699-.13.912-.39.217-.25.326-.59.326-1.01zm4.366 10.29l-1.093-.58.261-.47c.324-.59.489-1.17.501-1.76v-1.62h1.767l-.008 1.45c-.005.53-.141 1.07-.406 1.62s-.606 1-1.022 1.36zm3.304-7.83l.609-5.36h5.908v1.74h-4.193l-.26 2.27c.497-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.569.63.855 1.5.855 2.62 0 .68-.145 1.29-.436 1.83-.283.54-.695.95-1.231 1.25-.536.3-1.168.45-1.896.45a4.07 4.07 0 01-1.775-.39 3.153 3.153 0 01-1.296-1.09c-.315-.47-.482-1-.5-1.6h2.071c.044.44.196.78.456 1.03.265.24.612.36 1.036.36.473 0 .838-.17 1.094-.51.256-.34.384-.82.384-1.45 0-.6-.149-1.05-.443-1.37-.293-.32-.712-.48-1.252-.48-.499 0-.901.13-1.211.39l-.202.19-1.665-.41zm12.361 1.51h-4.077v-1.69h4.077v1.69zm1.906-1.51l.609-5.36h5.908v1.74h-4.192l-.261 2.27c.497-.27 1.025-.4 1.587-.4 1.003 0 1.791.31 2.36.93.569.63.855 1.5.855 2.62 0 .68-.145 1.29-.434 1.83a3.02 3.02 0 01-1.231 1.25c-.538.3-1.17.45-1.899.45-.637 0-1.229-.13-1.774-.39a3.179 3.179 0 01-1.296-1.09 3 3 0 01-.5-1.6h2.071c.044.44.196.78.458 1.03.265.24.609.36 1.034.36.473 0 .838-.17 1.094-.51.256-.34.384-.82.384-1.45 0-.6-.147-1.05-.441-1.37-.295-.32-.712-.48-1.254-.48-.497 0-.901.13-1.209.39l-.204.19-1.665-.41zm13.101.97c-.545.53-1.183.8-1.911.8-.933 0-1.678-.32-2.238-.96-.56-.64-.84-1.5-.84-2.59 0-.69.15-1.32.449-1.9.304-.58.726-1.02 1.268-1.34.539-.33 1.147-.49 1.824-.49.695 0 1.313.18 1.854.52.542.35.961.85 1.261 1.5.299.65.451 1.4.456 2.24v.77c0 1.76-.437 3.14-1.311 4.15-.875 1-2.113 1.54-3.715 1.61h-.516v-1.74l.464-.01c1.821-.08 2.807-.94 2.955-2.56zm-1.398-.8c.34 0 .629-.09.87-.26.246-.18.432-.39.558-.63v-.86c0-.71-.135-1.26-.406-1.65-.271-.4-.632-.59-1.087-.59-.419 0-.765.19-1.034.58-.271.38-.406.86-.406 1.44 0 .57.13 1.05.391 1.42.265.37.638.55 1.114.55zM682.357 1485.53v1.72h-.202c-.945.01-1.709.26-2.288.74-.575.48-.919 1.14-1.036 1.99.56-.57 1.268-.86 2.123-.86.916 0 1.646.33 2.186.99.541.65.812 1.52.812 2.59 0 .69-.15 1.31-.449 1.86a3.16 3.16 0 01-1.261 1.3c-.541.31-1.153.46-1.839.46-1.111 0-2.01-.38-2.694-1.16-.682-.77-1.021-1.8-1.021-3.09v-.75c0-1.15.215-2.16.643-3.03.436-.88 1.055-1.56 1.861-2.03.812-.49 1.751-.73 2.818-.73h.347zm-2.041 5.27c-.338 0-.645.09-.92.27-.276.18-.478.41-.608.7v.64c0 .69.137 1.24.412 1.64.276.39.662.59 1.159.59.448 0 .812-.18 1.086-.53.28-.36.421-.82.421-1.39s-.141-1.03-.421-1.39c-.28-.35-.656-.53-1.129-.53zm9.965 5.38h-2.093v-8.07l-2.499.77v-1.7l4.368-1.56h.224v10.56zm7.591-3.67h-4.079v-1.69h4.079v1.69zm7.27-6.98v1.72h-.202c-.946.01-1.71.26-2.288.74-.575.48-.92 1.14-1.037 1.99.56-.57 1.268-.86 2.123-.86.916 0 1.647.33 2.186.99.542.65.812 1.52.812 2.59 0 .69-.15 1.31-.448 1.86a3.16 3.16 0 01-1.261 1.3c-.542.31-1.153.46-1.839.46-1.111 0-2.01-.38-2.694-1.16-.683-.77-1.022-1.8-1.022-3.09v-.75c0-1.15.215-2.16.645-3.03.434-.88 1.055-1.56 1.86-2.03.812-.49 1.75-.73 2.818-.73h.347zm-2.042 5.27c-.337 0-.645.09-.919.27a1.6 1.6 0 00-.608.7v.64c0 .69.137 1.24.411 1.64.277.39.662.59 1.159.59.451 0 .812-.18 1.087-.53.279-.36.42-.82.42-1.39s-.141-1.03-.42-1.39c-.28-.35-.657-.53-1.13-.53zm12.109 5.38h-7.227v-1.44l3.412-3.63c.467-.51.812-.96 1.034-1.34.228-.38.341-.74.341-1.09 0-.47-.118-.83-.356-1.1-.235-.27-.574-.4-1.014-.4-.473 0-.847.16-1.122.49-.27.32-.406.75-.406 1.28h-2.1c0-.64.152-1.23.458-1.76.308-.53.743-.95 1.303-1.25.56-.3 1.194-.45 1.904-.45 1.087 0 1.928.26 2.527.78.605.52.907 1.26.907 2.21 0 .52-.135 1.05-.406 1.59s-.734 1.17-1.391 1.89l-2.397 2.53h4.533v1.69zm1.919 2.64l-1.094-.57.262-.47c.324-.59.489-1.18.5-1.76v-1.62h1.767l-.007 1.44c-.006.54-.141 1.08-.406 1.63-.265.54-.606.99-1.022 1.35zm3.304-7.83l.608-5.36h5.909v1.75h-4.194l-.259 2.27c.497-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.569.62.855 1.5.855 2.62 0 .68-.145 1.29-.436 1.83-.284.53-.695.95-1.231 1.25-.536.3-1.168.44-1.897.44-.638 0-1.229-.12-1.774-.38a3.243 3.243 0 01-1.296-1.09 3.003 3.003 0 01-.501-1.6h2.071c.045.44.197.78.456 1.02.267.25.612.37 1.037.37.473 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.149-1.06-.442-1.38-.295-.31-.714-.47-1.253-.47-.497 0-.901.13-1.211.39l-.202.19-1.665-.42zM629.937 1465.13v1.72h-.202c-.947.02-1.709.26-2.29.74-.574.48-.919 1.15-1.034 1.99.56-.56 1.266-.85 2.121-.85.918 0 1.646.33 2.188.98.541.66.81 1.53.81 2.6 0 .68-.149 1.3-.449 1.86-.295.55-.714.99-1.261 1.3-.539.31-1.153.46-1.839.46-1.11 0-2.008-.39-2.694-1.16-.68-.77-1.021-1.8-1.021-3.09v-.76c0-1.14.215-2.15.645-3.02.434-.88 1.055-1.56 1.861-2.04.811-.48 1.751-.73 2.817-.73h.348zm-2.043 5.28c-.337 0-.643.09-.92.27-.274.17-.476.4-.608.69v.64c0 .7.138 1.25.414 1.64.274.4.662.59 1.159.59.448 0 .81-.17 1.086-.53.28-.35.419-.82.419-1.38 0-.57-.139-1.04-.419-1.39-.28-.35-.656-.53-1.131-.53zm12.111 5.37h-7.229v-1.43l3.411-3.64c.469-.51.814-.96 1.037-1.34.226-.38.339-.74.339-1.08 0-.47-.119-.84-.354-1.1-.237-.27-.575-.41-1.014-.41-.473 0-.848.17-1.122.49-.271.33-.406.76-.406 1.29h-2.101c0-.65.152-1.23.456-1.76.31-.53.744-.95 1.304-1.25a3.98 3.98 0 011.906-.46c1.084 0 1.928.27 2.527.79.602.52.905 1.25.905 2.2 0 .53-.136 1.06-.406 1.6-.271.54-.735 1.17-1.391 1.89l-2.397 2.53h4.535v1.68zm1.919 2.65l-1.094-.57.261-.48c.323-.59.49-1.17.499-1.76V1474h1.767l-.008 1.45a3.7 3.7 0 01-.404 1.62c-.267.55-.606 1-1.021 1.36zm3.302-7.83l.608-5.36h5.911v1.74h-4.194l-.262 2.27c.499-.26 1.028-.4 1.587-.4 1.003 0 1.791.31 2.361.94.571.62.854 1.49.854 2.61 0 .68-.144 1.29-.433 1.83-.286.54-.696.96-1.232 1.26-.535.29-1.168.44-1.898.44-.636 0-1.228-.13-1.774-.38-.546-.27-.978-.63-1.296-1.1-.314-.47-.481-1-.499-1.6h2.071c.042.44.194.78.456 1.03.265.24.61.36 1.034.36.475 0 .838-.17 1.094-.51.256-.34.384-.82.384-1.44 0-.6-.146-1.06-.441-1.38-.295-.32-.712-.48-1.254-.48-.496 0-.899.13-1.208.39l-.202.19-1.667-.41zm12.363 1.51h-4.077v-1.69h4.077v1.69zm7.271-6.98v1.72h-.202c-.947.02-1.709.26-2.29.74-.574.48-.919 1.15-1.034 1.99.56-.56 1.266-.85 2.121-.85.918 0 1.646.33 2.188.98.539.66.81 1.53.81 2.6 0 .68-.148 1.3-.449 1.86-.295.55-.714.99-1.261 1.3-.539.31-1.153.46-1.839.46-1.11 0-2.008-.39-2.694-1.16-.68-.77-1.021-1.8-1.021-3.09v-.76c0-1.14.215-2.15.645-3.02.434-.88 1.055-1.56 1.861-2.04.811-.48 1.751-.73 2.817-.73h.348zm-2.043 5.28c-.337 0-.643.09-.92.27-.274.17-.478.4-.608.69v.64c0 .7.138 1.25.414 1.64.274.4.662.59 1.159.59.448 0 .81-.17 1.086-.53.28-.35.419-.82.419-1.38 0-.57-.139-1.04-.419-1.39-.28-.35-.656-.53-1.131-.53zm7.012-.83h1.114c.533 0 .926-.13 1.181-.39.256-.27.384-.62.384-1.06 0-.43-.128-.76-.384-.99-.252-.24-.598-.36-1.043-.36-.401 0-.736.11-1.007.33-.269.22-.404.51-.404.86h-2.094c0-.55.147-1.04.442-1.48.3-.44.714-.78 1.246-1.03a4.276 4.276 0 011.767-.37c1.116 0 1.989.27 2.621.81.632.53.95 1.26.95 2.2 0 .48-.149.93-.442 1.33a2.88 2.88 0 01-1.159.94c.594.21 1.035.53 1.324.95.295.43.443.93.443 1.51 0 .94-.343 1.69-1.029 2.25-.68.57-1.583.85-2.708.85-1.054 0-1.916-.28-2.585-.83-.667-.56-1.001-1.29-1.001-2.21h2.093c0 .4.148.72.443.98.299.25.666.37 1.1.37.498 0 .886-.13 1.166-.39.285-.26.428-.61.428-1.05 0-1.05-.58-1.58-1.739-1.58h-1.107v-1.64zm7.018 8.85l-1.094-.57.261-.48c.323-.59.49-1.17.499-1.76V1474h1.767l-.007 1.45c-.004.54-.14 1.08-.405 1.62-.267.55-.606 1-1.021 1.36zm3.302-7.83l.608-5.36h5.911v1.74h-4.194l-.262 2.27c.499-.26 1.028-.4 1.588-.4 1.003 0 1.79.31 2.36.94.569.62.854 1.49.854 2.61 0 .68-.144 1.29-.433 1.83-.286.54-.696.96-1.232 1.26-.535.29-1.169.44-1.898.44-.636 0-1.227-.13-1.774-.38-.546-.27-.978-.63-1.296-1.1-.314-.47-.481-1-.501-1.6h2.073c.042.44.195.78.456 1.03.265.24.61.36 1.034.36.475 0 .839-.17 1.094-.51.256-.34.384-.82.384-1.44 0-.6-.146-1.06-.441-1.38-.295-.32-.712-.48-1.253-.48-.497 0-.901.13-1.209.39l-.204.19-1.665-.41zM597.071 1442.88v1.73h-.203c-.945.01-1.709.26-2.287.74-.575.48-.92 1.14-1.037 1.99.56-.57 1.268-.86 2.123-.86.916 0 1.646.33 2.186.99.541.65.812 1.52.812 2.59 0 .69-.15 1.31-.449 1.86a3.15 3.15 0 01-1.26 1.3c-.542.31-1.154.46-1.84.46-1.11 0-2.009-.38-2.694-1.16-.682-.77-1.021-1.8-1.021-3.09v-.75c0-1.15.215-2.16.643-3.03.436-.88 1.055-1.56 1.862-2.03.812-.49 1.75-.73 2.818-.74h.347zm-2.042 5.28c-.337 0-.645.09-.919.27-.277.18-.479.41-.608.7v.64c0 .69.137 1.24.411 1.64.276.39.662.59 1.159.59.449 0 .812-.18 1.086-.53.28-.36.421-.82.421-1.39s-.141-1.03-.421-1.39c-.28-.35-.656-.53-1.129-.53zm7.01-.82h1.117c.53 0 .923-.14 1.179-.4.256-.27.384-.62.384-1.06 0-.42-.128-.75-.384-.99-.251-.24-.599-.36-1.042-.36-.401 0-.736.12-1.007.34-.271.22-.406.5-.406.85h-2.093c0-.55.148-1.04.443-1.47.298-.44.714-.79 1.244-1.03a4.129 4.129 0 011.769-.37c1.114 0 1.987.27 2.621.8.633.53.948 1.27.948 2.2 0 .49-.147.93-.441 1.34-.295.4-.681.71-1.159.93.593.21 1.036.53 1.325.96.295.42.442.92.442 1.5 0 .94-.343 1.69-1.029 2.26-.681.56-1.584.84-2.707.84-1.053 0-1.916-.28-2.587-.83-.665-.56-.999-1.29-.999-2.2h2.093c0 .39.147.72.441.97.301.25.668.38 1.102.38.497 0 .886-.14 1.166-.4.284-.26.426-.61.426-1.05 0-1.05-.578-1.57-1.737-1.57h-1.109v-1.64zm7.018 8.84l-1.094-.57.262-.47c.324-.59.489-1.18.5-1.76v-1.62h1.767l-.007 1.44c-.006.54-.141 1.08-.406 1.63-.266.54-.607.99-1.022 1.35zm3.304-7.83l.608-5.36h5.909v1.75h-4.194l-.259 2.26a3.367 3.367 0 011.585-.39c1.005 0 1.791.31 2.362.93.569.62.855 1.49.855 2.62 0 .68-.145 1.29-.436 1.83-.284.53-.695.95-1.231 1.25-.536.29-1.168.44-1.897.44-.638 0-1.229-.13-1.774-.38a3.23 3.23 0 01-1.296-1.09 3.003 3.003 0 01-.501-1.6h2.071c.045.43.197.78.456 1.02.265.25.612.37 1.037.37.472 0 .838-.17 1.094-.51.255-.35.383-.83.383-1.45 0-.6-.148-1.06-.443-1.38-.293-.31-.712-.47-1.251-.47-.499 0-.901.13-1.211.39l-.202.19-1.665-.42zm12.361 1.52h-4.077v-1.69h4.077v1.69zm7.272-6.99v1.73h-.202c-.946.01-1.71.26-2.288.74-.575.48-.92 1.14-1.037 1.99.56-.57 1.268-.86 2.123-.86.916 0 1.646.33 2.186.99.541.65.812 1.52.812 2.59 0 .69-.15 1.31-.449 1.86a3.15 3.15 0 01-1.26 1.3c-.542.31-1.155.46-1.84.46-1.11 0-2.009-.38-2.693-1.16-.683-.77-1.022-1.8-1.022-3.09v-.75c0-1.15.215-2.16.643-3.03.436-.88 1.055-1.56 1.862-2.03.812-.49 1.75-.73 2.818-.74h.347zm-2.042 5.28c-.337 0-.645.09-.919.27-.277.18-.479.41-.608.7v.64c0 .69.137 1.24.411 1.64.276.39.662.59 1.159.59.449 0 .812-.18 1.086-.53.28-.36.421-.82.421-1.39s-.141-1.03-.421-1.39c-.28-.35-.656-.53-1.129-.53zm11.073 1.41h1.196v1.69h-1.196v2.28h-2.092v-2.28h-4.323l-.095-1.32 4.396-6.95h2.114v6.58zm-4.424 0h2.332v-3.72l-.139.23-2.193 3.49zM495.097 1400.24v1.72h-.202c-.946.02-1.71.26-2.288.74-.575.48-.92 1.14-1.037 1.99.56-.57 1.269-.85 2.123-.85.916 0 1.647.33 2.186.98.542.66.812 1.52.812 2.6 0 .68-.15 1.3-.448 1.86-.295.55-.716.98-1.261 1.29-.541.31-1.153.47-1.839.47-1.111 0-2.01-.39-2.694-1.16-.682-.78-1.022-1.81-1.022-3.1v-.75c0-1.14.215-2.15.644-3.03.435-.87 1.055-1.55 1.861-2.03.812-.48 1.75-.73 2.818-.73h.347zm-2.041 5.28c-.338 0-.646.09-.92.27-.276.17-.478.4-.608.69v.64c0 .7.137 1.25.411 1.64.277.39.662.59 1.159.59.449 0 .812-.18 1.087-.53.28-.36.421-.82.421-1.38 0-.58-.141-1.04-.421-1.39-.28-.36-.657-.53-1.129-.53zm10.558-5.28v1.72h-.202c-.947.02-1.709.26-2.289.74-.573.48-.92 1.14-1.035 1.99.56-.57 1.266-.85 2.121-.85.918 0 1.647.33 2.188.98.541.66.812 1.52.812 2.6 0 .68-.15 1.3-.451 1.86-.292.55-.713.98-1.258 1.29-.542.31-1.156.47-1.842.47-1.108 0-2.007-.39-2.693-1.16-.681-.78-1.02-1.81-1.02-3.1v-.75c0-1.14.213-2.15.643-3.03.436-.87 1.055-1.55 1.862-2.03.812-.48 1.75-.73 2.818-.73h.346zm-2.041 5.28c-.339 0-.645.09-.919.27-.277.17-.479.4-.61.69v.64c0 .7.139 1.25.413 1.64.274.39.662.59 1.159.59.448 0 .812-.18 1.086-.53.28-.36.421-.82.421-1.38 0-.58-.141-1.04-.421-1.39-.28-.36-.656-.53-1.129-.53zm9.039 1.7h-4.079v-1.69h4.079v1.69zm7.27-6.98v1.72h-.203c-.945.02-1.709.26-2.287.74-.575.48-.92 1.14-1.037 1.99.56-.57 1.268-.85 2.123-.85.916 0 1.646.33 2.186.98.541.66.812 1.52.812 2.6 0 .68-.15 1.3-.449 1.86-.294.55-.715.98-1.26 1.29-.542.31-1.154.47-1.84.47-1.11 0-2.009-.39-2.694-1.16-.682-.78-1.021-1.81-1.021-3.1v-.75c0-1.14.215-2.15.645-3.03a4.806 4.806 0 011.86-2.03c.812-.48 1.75-.73 2.818-.73h.347zm-2.042 5.28c-.337 0-.645.09-.919.27-.277.17-.479.4-.609.69v.64c0 .7.138 1.25.412 1.64.276.39.662.59 1.159.59.45 0 .812-.18 1.086-.53.28-.36.421-.82.421-1.38 0-.58-.141-1.04-.421-1.39-.28-.36-.656-.53-1.129-.53zm12.052-4l-4.077 9.37h-2.211l4.085-8.85h-5.243v-1.69h7.446v1.17zm1.976 12.02l-1.094-.58.262-.47c.324-.59.489-1.17.5-1.76v-1.62h1.767l-.007 1.45a3.78 3.78 0 01-.406 1.62c-.266.55-.607 1-1.022 1.36zm3.304-7.83l.608-5.36h5.909v1.74h-4.194l-.259 2.27c.496-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.569.63.855 1.5.855 2.62 0 .68-.145 1.29-.436 1.83-.284.54-.695.95-1.231 1.26-.536.29-1.168.44-1.897.44-.638 0-1.229-.13-1.774-.39a3.166 3.166 0 01-1.296-1.09c-.315-.47-.482-1-.501-1.6h2.071c.045.44.197.78.456 1.03.267.24.612.36 1.037.36.472 0 .838-.17 1.094-.51.255-.34.383-.82.383-1.45 0-.6-.148-1.05-.441-1.37-.295-.32-.714-.48-1.253-.48-.497 0-.901.13-1.211.39l-.202.19-1.665-.41zM438.969 1379.85v1.72h-.202c-.948.01-1.71.26-2.29.74-.575.48-.92 1.14-1.034 1.99.559-.57 1.266-.86 2.121-.86.917 0 1.646.33 2.187.99.542.66.811 1.52.811 2.59 0 .69-.149 1.31-.449 1.86-.295.56-.714.99-1.261 1.3-.539.31-1.153.46-1.839.46-1.111 0-2.008-.38-2.694-1.16-.68-.77-1.022-1.8-1.022-3.09v-.75c0-1.15.215-2.15.646-3.03.433-.88 1.055-1.56 1.861-2.03.81-.49 1.75-.73 2.816-.73h.349zm-2.043 5.27c-.338 0-.644.09-.92.27-.274.18-.476.41-.608.7v.64c0 .7.137 1.24.413 1.64.275.39.662.59 1.159.59.449 0 .81-.18 1.087-.53.28-.36.419-.82.419-1.39s-.139-1.03-.419-1.39c-.28-.35-.657-.53-1.131-.53zm12.051-3.99l-4.077 9.37h-2.208l4.084-8.85h-5.243v-1.7h7.444v1.18zm1.978 12.01l-1.093-.57.261-.47c.323-.59.489-1.18.499-1.76v-1.62h1.767l-.008 1.45c-.003.53-.139 1.07-.404 1.62-.267.54-.606 1-1.022 1.35zm3.303-7.83l.608-5.36h5.91v1.75h-4.193l-.262 2.27c.499-.27 1.027-.4 1.587-.4 1.003 0 1.791.31 2.36.93.571.62.855 1.5.855 2.62 0 .68-.144 1.29-.434 1.83a3.08 3.08 0 01-1.231 1.25c-.536.3-1.168.44-1.898.44-.636 0-1.228-.12-1.775-.38a3.179 3.179 0 01-1.296-1.09 3.009 3.009 0 01-.498-1.6h2.071c.042.44.194.78.456 1.02.265.25.61.37 1.034.37.475 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.147-1.06-.441-1.38-.295-.31-.712-.47-1.254-.47-.497 0-.899.13-1.209.39l-.202.19-1.666-.42zm12.362 1.52h-4.077v-1.69h4.077v1.69zm7.272-6.98v1.72h-.202c-.947.01-1.709.26-2.29.74-.575.48-.919 1.14-1.034 1.99.56-.57 1.266-.86 2.121-.86.917 0 1.646.33 2.187.99.54.66.811 1.52.811 2.59 0 .69-.149 1.31-.449 1.86-.295.56-.714.99-1.261 1.3-.539.31-1.153.46-1.839.46-1.111 0-2.008-.38-2.694-1.16-.68-.77-1.022-1.8-1.022-3.09v-.75c0-1.15.216-2.15.646-3.03.434-.88 1.055-1.56 1.861-2.03.81-.49 1.75-.73 2.816-.73h.349zm-2.043 5.27c-.338 0-.644.09-.92.27-.274.18-.478.41-.608.7v.64c0 .7.137 1.24.414 1.64.274.39.661.59 1.158.59.449 0 .811-.18 1.087-.53.28-.36.419-.82.419-1.39s-.139-1.03-.419-1.39c-.28-.35-.657-.53-1.131-.53zm11.755-2.36c0 .51-.128.96-.384 1.36-.256.39-.608.71-1.057.95.512.24.918.58 1.216 1.02.301.43.449.93.449 1.52 0 .94-.319 1.68-.955 2.22-.638.54-1.505.81-2.601.81s-1.965-.27-2.607-.82c-.641-.54-.962-1.28-.962-2.21 0-.59.148-1.1.449-1.53.298-.43.702-.77 1.208-1.01a2.839 2.839 0 01-1.056-.95 2.48 2.48 0 01-.377-1.36c0-.9.299-1.62.897-2.15.599-.53 1.413-.8 2.44-.8 1.026 0 1.836.26 2.435.8.602.52.905 1.24.905 2.15zm-1.877 4.7c0-.46-.131-.83-.396-1.1-.267-.28-.623-.42-1.072-.42-.445 0-.799.14-1.066.42-.265.27-.399.63-.399 1.1 0 .45.132.81.391 1.08.262.28.623.42 1.087.42.454 0 .81-.14 1.066-.4.26-.27.389-.63.389-1.1zm-.217-4.6c0-.41-.107-.74-.324-.99-.219-.25-.525-.37-.922-.37-.391 0-.695.12-.912.36-.217.24-.326.57-.326 1 0 .42.109.76.326 1.01.217.26.525.39.92.39.397 0 .701-.13.914-.39.217-.25.324-.59.324-1.01zm4.369 10.28l-1.094-.57.261-.47c.323-.59.49-1.18.499-1.76v-1.62h1.767l-.008 1.45c-.003.53-.139 1.07-.404 1.62-.267.54-.606 1-1.021 1.35zm3.302-7.83l.608-5.36h5.911v1.75h-4.194l-.262 2.27c.499-.27 1.027-.4 1.587-.4 1.003 0 1.791.31 2.36.93.57.62.855 1.5.855 2.62 0 .68-.144 1.29-.434 1.83a3.08 3.08 0 01-1.231 1.25c-.536.3-1.17.44-1.898.44-.636 0-1.228-.12-1.775-.38a3.179 3.179 0 01-1.296-1.09 3.028 3.028 0 01-.5-1.6h2.073c.042.44.194.78.456 1.02.265.25.61.37 1.034.37.475 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.147-1.06-.441-1.38-.295-.31-.712-.47-1.254-.47-.497 0-.901.13-1.208.39l-.204.19-1.665-.42zM385.707 1355.74v1.73h-.202c-.945.01-1.709.26-2.288.74-.574.47-.919 1.14-1.036 1.99.56-.57 1.268-.86 2.123-.86.916 0 1.646.33 2.186.99.541.65.812 1.52.812 2.59 0 .69-.15 1.31-.449 1.86a3.16 3.16 0 01-1.261 1.3c-.541.31-1.153.46-1.839.46-1.11 0-2.01-.38-2.694-1.16-.682-.77-1.021-1.8-1.021-3.09v-.75c0-1.15.215-2.16.643-3.03.436-.88 1.055-1.56 1.861-2.04.813-.48 1.751-.72 2.819-.73h.346zm-2.041 5.28c-.337 0-.645.09-.92.27-.276.18-.478.41-.608.7v.63c0 .7.137 1.25.412 1.65.276.39.662.58 1.159.58.448 0 .812-.17 1.086-.52.28-.36.421-.82.421-1.39s-.141-1.03-.421-1.39c-.28-.35-.656-.53-1.129-.53zm11.755-2.36c0 .51-.128.96-.384 1.36-.256.39-.608.71-1.059.95.512.24.918.58 1.218 1.02.299.43.449.93.449 1.52 0 .93-.319 1.67-.957 2.22-.637.54-1.503.81-2.599.81-1.096 0-1.965-.27-2.607-.82-.643-.54-.964-1.28-.964-2.21 0-.59.15-1.1.449-1.53.3-.43.702-.77 1.21-1.01-.45-.24-.802-.56-1.058-.95-.251-.4-.377-.85-.377-1.36 0-.9.301-1.62.9-2.15.597-.53 1.411-.8 2.44-.8 1.023 0 1.835.26 2.432.79.605.53.907 1.25.907 2.16zm-1.877 4.69c0-.45-.133-.82-.398-1.1-.265-.27-.623-.41-1.072-.41-.445 0-.799.14-1.064.41-.265.27-.399.64-.399 1.1 0 .45.13.82.392 1.09.261.28.622.41 1.086.41.454 0 .808-.13 1.064-.39.262-.27.391-.64.391-1.11zm-.217-4.59c0-.41-.109-.74-.326-.99-.217-.25-.525-.38-.919-.38-.392 0-.696.12-.913.37-.217.24-.326.57-.326 1 0 .42.109.75.326 1.01.217.26.523.38.92.38.395 0 .699-.12.912-.38.217-.26.326-.59.326-1.01zm4.367 10.28l-1.094-.57.261-.47c.325-.59.49-1.18.501-1.76v-1.62h1.767l-.008 1.44c-.005.54-.14 1.08-.406 1.63-.265.54-.606.99-1.021 1.35zm3.304-7.83l.608-5.36h5.909v1.75h-4.194l-.26 2.26a3.374 3.374 0 011.586-.39c1.004 0 1.791.31 2.362.93.569.62.854 1.49.854 2.62 0 .68-.144 1.29-.435 1.83a3.08 3.08 0 01-1.231 1.25c-.536.29-1.169.44-1.897.44-.638 0-1.229-.13-1.775-.38a3.178 3.178 0 01-1.295-1.1c-.316-.46-.483-1-.501-1.6h2.071c.044.44.196.79.456 1.03.265.24.612.36 1.036.36.473 0 .838-.16 1.094-.5.256-.35.384-.83.384-1.45 0-.6-.148-1.06-.443-1.38-.293-.32-.712-.48-1.252-.48-.498 0-.901.13-1.21.4l-.202.19-1.665-.42zm12.361 1.51h-4.077v-1.68h4.077v1.68zm7.271-6.98v1.73h-.202c-.945.01-1.709.26-2.288.74-.574.47-.919 1.14-1.036 1.99.56-.57 1.268-.86 2.123-.86.916 0 1.646.33 2.186.99.541.65.812 1.52.812 2.59 0 .69-.15 1.31-.449 1.86-.295.56-.715.99-1.261 1.3-.541.31-1.155.46-1.839.46-1.11 0-2.01-.38-2.694-1.16-.682-.77-1.021-1.8-1.021-3.09v-.75c0-1.15.215-2.16.643-3.03.436-.88 1.055-1.56 1.861-2.04.813-.48 1.751-.72 2.819-.73h.346zm-2.041 5.28c-.337 0-.645.09-.92.27-.276.18-.478.41-.608.7v.63c0 .7.138 1.25.412 1.65.276.39.662.58 1.159.58.448 0 .812-.17 1.086-.52.28-.36.421-.82.421-1.39s-.141-1.03-.421-1.39c-.28-.35-.656-.53-1.129-.53zm9.777 1.16c-.546.54-1.183.81-1.912.81-.933 0-1.678-.32-2.238-.96-.56-.64-.84-1.51-.84-2.59 0-.69.15-1.33.449-1.9.304-.58.727-1.03 1.268-1.35a3.51 3.51 0 011.824-.48c.696 0 1.313.17 1.855.52.541.35.96.85 1.26 1.5.299.65.451 1.4.456 2.24v.77c0 1.76-.437 3.14-1.31 4.14-.876 1.01-2.114 1.54-3.716 1.61l-.515.01v-1.75h.463c1.821-.09 2.807-.94 2.956-2.57zm-1.398-.79c.339 0 .628-.09.869-.27.247-.17.432-.38.558-.63v-.86c0-.71-.135-1.26-.406-1.65-.271-.39-.632-.59-1.086-.59-.419 0-.766.2-1.035.58-.271.38-.406.87-.406 1.45 0 .57.13 1.04.391 1.42.265.36.638.55 1.115.55zM244.438 1208.7l-4.077 9.37h-2.211l4.087-8.85h-5.245v-1.7h7.446v1.18zm6.431 9.37h-2.093V1210l-2.499.78v-1.71l4.368-1.56h.224v10.56zm7.591-3.67h-4.079v-1.69h4.079v1.69zm8.762-5.7l-4.077 9.37h-2.208l4.084-8.85h-5.243v-1.7h7.444v1.18zm8.575 9.37h-7.227v-1.44l3.412-3.63c.467-.51.812-.96 1.034-1.34.228-.38.341-.74.341-1.09 0-.47-.118-.83-.356-1.1-.235-.27-.575-.4-1.014-.4-.473 0-.847.16-1.122.49-.27.32-.406.75-.406 1.28h-2.1c0-.64.152-1.23.458-1.76.307-.53.743-.94 1.303-1.24.56-.31 1.194-.46 1.904-.46 1.087 0 1.928.26 2.527.78.605.52.907 1.26.907 2.21 0 .52-.135 1.05-.406 1.59s-.734 1.17-1.391 1.89l-2.397 2.53h4.533v1.69zm1.919 2.64l-1.094-.57.262-.47c.324-.59.489-1.18.5-1.76v-1.62h1.767l-.007 1.45c-.006.53-.141 1.07-.406 1.62-.265.54-.607 1-1.022 1.35zm3.304-7.83l.608-5.36h5.909v1.75h-4.194l-.259 2.27c.497-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.569.62.855 1.5.855 2.62 0 .68-.145 1.29-.436 1.83-.284.54-.695.95-1.231 1.25-.536.3-1.168.44-1.897.44-.638 0-1.229-.12-1.774-.38a3.166 3.166 0 01-1.296-1.09c-.315-.47-.482-1-.501-1.6h2.071c.045.44.197.78.456 1.02.267.25.612.37 1.037.37.472 0 .838-.17 1.094-.51.255-.34.383-.83.383-1.45 0-.6-.148-1.06-.441-1.37-.295-.32-.714-.48-1.253-.48-.497 0-.901.13-1.211.39l-.202.19-1.665-.42zM225.391 1162.35l-4.079 9.37h-2.208l4.084-8.85h-5.243v-1.7h7.446v1.18zm8.575 9.37h-7.229v-1.44l3.411-3.63c.469-.51.814-.96 1.037-1.34.226-.38.339-.75.339-1.09 0-.47-.119-.83-.354-1.1-.237-.27-.575-.41-1.014-.41-.473 0-.848.17-1.122.5-.271.32-.406.75-.406 1.28h-2.101c0-.64.152-1.23.456-1.76.31-.53.744-.95 1.304-1.25.56-.3 1.196-.45 1.906-.45 1.084 0 1.928.26 2.527.78.602.52.905 1.26.905 2.21 0 .52-.136 1.05-.406 1.59-.271.54-.735 1.17-1.391 1.89l-2.397 2.53h4.535v1.69zm1.919 2.64l-1.094-.57.261-.47c.323-.59.49-1.18.499-1.76v-1.62h1.767l-.008 1.44c-.003.54-.139 1.08-.404 1.63-.267.54-.606.99-1.021 1.35zm3.302-7.83l.608-5.36h5.911v1.75h-4.194l-.262 2.26a3.384 3.384 0 011.587-.39c1.003 0 1.791.31 2.361.93.571.62.854 1.49.854 2.62 0 .68-.144 1.29-.433 1.83-.286.53-.696.95-1.232 1.25-.535.29-1.168.44-1.898.44-.636 0-1.228-.13-1.774-.38a3.188 3.188 0 01-1.296-1.1c-.314-.46-.481-1-.499-1.6h2.071c.042.44.194.79.456 1.03.265.24.61.37 1.034.37.475 0 .838-.17 1.094-.51.256-.35.384-.83.384-1.45 0-.6-.146-1.06-.441-1.38-.295-.32-.712-.47-1.253-.47-.497 0-.9.13-1.209.39l-.202.19-1.667-.42zm12.363 1.52h-4.077v-1.69h4.077v1.69zm8.764-5.7l-4.079 9.37h-2.208l4.084-8.85h-5.243v-1.7h7.446v1.18zm3.476 3.17h1.114c.533 0 .926-.14 1.181-.4.256-.27.384-.62.384-1.06 0-.42-.128-.75-.384-.99-.252-.24-.598-.36-1.043-.36-.401 0-.736.12-1.007.34-.269.22-.404.5-.404.85h-2.094c0-.55.147-1.04.442-1.47.3-.44.714-.79 1.246-1.03a4.123 4.123 0 011.767-.37c1.116 0 1.989.27 2.621.8.632.53.949 1.27.949 2.2 0 .49-.148.93-.441 1.34-.295.4-.682.71-1.159.93.594.21 1.035.53 1.324.96.295.42.443.92.443 1.5 0 .94-.343 1.69-1.029 2.26-.68.56-1.583.84-2.708.84-1.054 0-1.916-.28-2.585-.83-.667-.56-1.001-1.29-1.001-2.2h2.093c0 .39.148.72.443.97.299.25.666.38 1.1.38.498 0 .886-.14 1.166-.4.285-.26.428-.61.428-1.05 0-1.05-.58-1.57-1.739-1.57h-1.107v-1.64zm7.018 8.84l-1.094-.57.261-.47c.323-.59.49-1.18.499-1.76v-1.62h1.767l-.007 1.44c-.004.54-.14 1.08-.405 1.63-.267.54-.606.99-1.021 1.35zm3.302-7.83l.608-5.36h5.911v1.75h-4.194l-.262 2.26a3.387 3.387 0 011.587-.39c1.004 0 1.792.31 2.361.93.569.62.854 1.49.854 2.62 0 .68-.144 1.29-.433 1.83-.286.53-.696.95-1.232 1.25-.535.29-1.169.44-1.898.44-.636 0-1.227-.13-1.774-.38a3.194 3.194 0 01-1.296-1.1c-.314-.46-.481-1-.501-1.6h2.073c.042.44.195.79.456 1.03.265.24.61.37 1.034.37.475 0 .839-.17 1.094-.51.256-.35.384-.83.384-1.45 0-.6-.146-1.06-.441-1.38-.295-.32-.712-.47-1.253-.47-.497 0-.902.13-1.209.39l-.204.19-1.665-.42zM211.065 1115.99l-4.078 9.38h-2.21l4.087-8.85h-5.245v-1.7h7.446v1.17zm3.476 3.18h1.116c.53 0 .923-.14 1.179-.4.256-.27.384-.62.384-1.06 0-.42-.128-.76-.384-.99-.25-.24-.599-.36-1.042-.36-.4 0-.736.11-1.006.34-.271.21-.407.5-.407.85h-2.093c0-.55.149-1.04.443-1.48.299-.44.714-.78 1.244-1.03a4.28 4.28 0 011.769-.36c1.115 0 1.988.26 2.622.8.632.53.947 1.26.947 2.2 0 .49-.146.93-.441 1.33-.295.41-.68.72-1.159.94.594.21 1.037.53 1.326.95.295.43.441.93.441 1.51 0 .94-.343 1.69-1.029 2.25-.68.57-1.583.85-2.707.85-1.053 0-1.915-.28-2.586-.83-.666-.56-1-1.29-1-2.2h2.094c0 .39.146.72.441.97.3.25.667.37 1.101.37.497 0 .887-.13 1.166-.39.284-.26.427-.61.427-1.05 0-1.05-.579-1.58-1.737-1.58h-1.109v-1.63zm7.018 8.84l-1.094-.57.261-.47c.325-.59.49-1.18.501-1.76v-1.63h1.767l-.008 1.45a3.73 3.73 0 01-.406 1.62c-.265.55-.606 1-1.021 1.36zm3.303-7.83l.609-5.36h5.909v1.75h-4.194l-.26 2.26a3.38 3.38 0 011.585-.4c1.005 0 1.791.32 2.362.94.57.62.855 1.49.855 2.61 0 .68-.145 1.29-.436 1.84-.283.53-.695.95-1.231 1.25-.536.29-1.168.44-1.896.44a4.21 4.21 0 01-1.775-.38 3.175 3.175 0 01-1.296-1.1c-.315-.47-.482-1-.5-1.6h2.071c.044.44.196.79.456 1.03.265.24.612.36 1.036.36.473 0 .838-.16 1.094-.5.256-.35.384-.83.384-1.45 0-.6-.148-1.06-.443-1.38-.293-.32-.712-.48-1.252-.48-.499 0-.901.13-1.21.39l-.203.19-1.665-.41zm12.362 1.51h-4.078v-1.68h4.078v1.68zm8.764-5.7l-4.077 9.38h-2.21l4.086-8.85h-5.245v-1.7h7.446v1.17zm7.538 5.41h1.196v1.68h-1.196v2.29h-2.091v-2.29h-4.324l-.094-1.31 4.396-6.95h2.113v6.58zm-4.424 0h2.333v-3.73l-.139.24-2.194 3.49zM168.421 1012.17l-4.077 9.37h-2.209l4.085-8.85h-5.244v-1.7h7.445v1.18zm7.025-1.28v1.72h-.202c-.947.01-1.71.26-2.289.74-.575.48-.92 1.14-1.036 1.99.56-.57 1.268-.85 2.122-.85.918 0 1.647.32 2.188.98.54.66.811 1.52.811 2.59 0 .69-.15 1.31-.449 1.87-.295.55-.715.98-1.26 1.29-.541.31-1.154.46-1.84.46-1.111 0-2.009-.38-2.694-1.15-.681-.78-1.021-1.81-1.021-3.1v-.75c0-1.15.215-2.15.644-3.03a4.75 4.75 0 011.861-2.03c.812-.48 1.751-.73 2.818-.73h.347zm-2.042 5.28c-.338 0-.644.08-.92.26-.275.18-.478.41-.608.7v.64c0 .7.137 1.24.413 1.64.275.39.661.59 1.158.59.449 0 .812-.18 1.087-.53.28-.36.42-.82.42-1.39s-.14-1.03-.42-1.39c-.28-.35-.657-.52-1.13-.52zm9.039 1.7h-4.078v-1.69h4.078v1.69zm8.763-5.7l-4.077 9.37h-2.21l4.086-8.85h-5.244v-1.7h7.445v1.18zm8.517 0l-4.077 9.37h-2.21l4.085-8.85h-5.244v-1.7h7.446v1.18zm1.977 12.01l-1.094-.57.261-.47c.325-.59.49-1.18.501-1.76v-1.62h1.767l-.008 1.45c-.005.53-.141 1.07-.406 1.62-.265.54-.606 1-1.021 1.35zm3.304-7.83l.608-5.36h5.909v1.75h-4.194l-.26 2.27c.497-.27 1.025-.4 1.585-.4 1.005 0 1.791.31 2.362.93.57.63.855 1.5.855 2.62 0 .68-.144 1.29-.436 1.83-.283.54-.695.95-1.231 1.25-.535.3-1.168.44-1.896.44-.638 0-1.23-.12-1.775-.38a3.166 3.166 0 01-1.296-1.09c-.315-.47-.482-1-.5-1.6h2.071c.044.44.196.78.456 1.02.267.25.612.37 1.036.37.473 0 .838-.17 1.094-.51.256-.34.384-.83.384-1.45 0-.6-.148-1.06-.441-1.37-.295-.32-.714-.48-1.254-.48-.497 0-.901.13-1.21.39l-.203.19-1.664-.42zM141.958 962.107l-4.078 9.373h-2.209l4.085-8.852h-5.244v-1.694h7.446v1.173zm8.517 0l-4.078 9.373h-2.209l4.085-8.852h-5.244v-1.694h7.446v1.173zm1.977 12.016l-1.094-.572.261-.471c.323-.59.49-1.176.5-1.76v-1.622h1.767l-.007 1.448c-.005.536-.141 1.077-.406 1.622a4.174 4.174 0 01-1.021 1.355zm3.302-7.829l.609-5.36h5.909v1.746h-4.193l-.261 2.266a3.327 3.327 0 011.586-.399c1.005 0 1.792.312 2.362.935.569.623.854 1.494.854 2.616 0 .68-.145 1.29-.434 1.832a3.059 3.059 0 01-1.232 1.253c-.536.293-1.168.441-1.897.441a4.13 4.13 0 01-1.775-.384 3.195 3.195 0 01-1.296-1.094 2.992 2.992 0 01-.5-1.6h2.072c.043.44.195.783.456 1.028.266.243.611.363 1.036.363.473 0 .837-.169 1.093-.508.256-.343.384-.825.384-1.448 0-.599-.147-1.057-.442-1.376-.294-.319-.712-.478-1.253-.478-.497 0-.9.13-1.209.391l-.203.189-1.666-.413zm12.363 1.513h-4.077v-1.688h4.077v1.688zm8.763-5.7l-4.077 9.373h-2.209l4.085-8.852h-5.244v-1.694h7.445v1.173zm8.221 1.63c0 .512-.128.966-.384 1.361a2.76 2.76 0 01-1.058.949 3.04 3.04 0 011.217 1.022c.3.43.449.936.449 1.52 0 .936-.319 1.678-.956 2.223-.637.541-1.504.812-2.6.812s-1.965-.272-2.607-.819c-.642-.545-.964-1.283-.964-2.216 0-.584.15-1.094.45-1.528a3 3 0 011.209-1.014 2.758 2.758 0 01-1.057-.949 2.484 2.484 0 01-.377-1.361c0-.897.299-1.613.898-2.143.599-.536 1.412-.805 2.441-.805 1.023 0 1.835.265 2.433.797.604.527.906 1.243.906 2.151zm-1.876 4.7c0-.458-.133-.825-.399-1.101-.265-.275-.622-.412-1.071-.412-.445 0-.8.137-1.065.412-.266.27-.398.638-.398 1.101 0 .449.13.812.391 1.087.26.274.623.413 1.086.413.454 0 .809-.134 1.065-.399.261-.265.391-.632.391-1.101zm-.217-4.598c0-.412-.109-.74-.326-.986-.218-.251-.524-.377-.92-.377-.391 0-.695.121-.913.364-.217.241-.326.573-.326.999 0 .419.109.756.326 1.014.218.256.524.384.92.384s.7-.128.913-.384c.217-.258.326-.595.326-1.014zm4.367 10.284l-1.094-.572.262-.471c.322-.59.489-1.176.498-1.76v-1.622h1.767l-.007 1.448c-.004.536-.139 1.077-.404 1.622a4.19 4.19 0 01-1.022 1.355zm3.302-7.829l.608-5.36h5.911v1.746h-4.194l-.261 2.266a3.334 3.334 0 011.587-.399c1.003 0 1.791.312 2.36.935s.855 1.494.855 2.616c0 .68-.145 1.29-.434 1.832a3.062 3.062 0 01-1.231 1.253c-.536.293-1.17.441-1.899.441a4.132 4.132 0 01-1.774-.384 3.195 3.195 0 01-1.296-1.094 3.01 3.01 0 01-.501-1.6h2.073c.043.44.195.783.456 1.028.265.243.61.363 1.035.363.475 0 .838-.169 1.094-.508.256-.343.384-.825.384-1.448 0-.599-.147-1.057-.442-1.376-.294-.319-.712-.478-1.253-.478-.497 0-.901.13-1.209.391l-.204.189-1.665-.413zM123.924 912.049l-4.078 9.372h-2.209l4.085-8.851h-5.243v-1.695h7.445v1.174zm8.22 1.629c0 .512-.128.966-.384 1.361a2.768 2.768 0 01-1.057.95c.511.246.917.585 1.216 1.021.3.43.449.936.449 1.52 0 .937-.318 1.678-.956 2.223-.637.542-1.504.813-2.6.813s-1.965-.273-2.607-.82c-.642-.545-.963-1.283-.963-2.216 0-.584.15-1.093.449-1.527a3 3 0 011.209-1.014 2.768 2.768 0 01-1.057-.95 2.484 2.484 0 01-.377-1.361c0-.897.3-1.613.898-2.143.599-.536 1.413-.805 2.441-.805 1.024 0 1.835.266 2.434.798.603.526.905 1.242.905 2.15zm-1.876 4.7c0-.457-.133-.825-.398-1.101-.266-.274-.623-.411-1.072-.411-.444 0-.799.137-1.065.411-.265.271-.398.638-.398 1.101 0 .449.13.813.391 1.087s.623.413 1.086.413c.454 0 .809-.133 1.065-.398.261-.265.391-.632.391-1.102zm-.217-4.598c0-.411-.109-.739-.326-.986-.217-.25-.524-.376-.92-.376-.391 0-.695.12-.913.363-.217.241-.325.573-.325.999 0 .419.108.757.325 1.015.218.255.524.383.92.383s.7-.128.913-.383c.217-.258.326-.596.326-1.015zm4.367 10.285l-1.094-.573.261-.471c.324-.59.49-1.175.5-1.759v-1.623h1.767l-.007 1.448a3.764 3.764 0 01-.406 1.623 4.17 4.17 0 01-1.021 1.355zm3.302-7.83l.609-5.36h5.91v1.747h-4.194l-.26 2.265a3.323 3.323 0 011.586-.398c1.004 0 1.791.311 2.361.934.569.623.854 1.494.854 2.616 0 .681-.145 1.291-.434 1.832a3.05 3.05 0 01-1.231 1.253c-.536.293-1.169.442-1.898.442a4.122 4.122 0 01-1.774-.384 3.207 3.207 0 01-1.297-1.094 2.982 2.982 0 01-.499-1.6h2.071c.043.439.195.782.456 1.027.266.243.611.363 1.036.363.473 0 .838-.168 1.093-.508.256-.343.384-.825.384-1.448 0-.598-.147-1.056-.441-1.375-.295-.319-.713-.479-1.253-.479-.498 0-.901.13-1.21.392l-.203.189-1.666-.414zm12.363 1.513h-4.077v-1.687h4.077v1.687zm8.764-5.699l-4.078 9.372h-2.209l4.085-8.851h-5.244v-1.695h7.446v1.174zm6.243 5.156c-.546.536-1.183.805-1.912.805-.932 0-1.678-.319-2.238-.957-.56-.642-.84-1.506-.84-2.592 0-.692.149-1.324.449-1.899a3.319 3.319 0 011.267-1.346 3.482 3.482 0 011.825-.486c.695 0 1.313.175 1.854.521.541.349.961.848 1.26 1.5.3.653.452 1.398.457 2.238v.775c0 1.758-.437 3.139-1.311 4.142-.874 1.005-2.113 1.541-3.716 1.61l-.514.005v-1.745l.464-.007c1.82-.082 2.805-.936 2.955-2.564zm-1.398-.796c.338 0 .628-.087.869-.261.246-.174.432-.384.558-.63v-.863c0-.71-.136-1.258-.406-1.65-.27-.391-.632-.587-1.086-.587-.42 0-.766.192-1.036.58-.27.38-.406.862-.406 1.441 0 .574.131 1.047.392 1.42.265.367.637.55 1.115.55z"
                      fill="#65696F"
                    ></path>
                    <path
                      d="M1362.38 248.088h1.95c.93 0 1.62-.232 2.07-.697.44-.466.67-1.081.67-1.851 0-.743-.23-1.321-.67-1.737-.44-.413-1.05-.621-1.83-.621-.7 0-1.29.195-1.76.584-.47.38-.71.879-.71 1.496h-3.66c0-.964.25-1.826.77-2.586.52-.769 1.25-1.368 2.18-1.8.94-.43 1.97-.646 3.09-.646 1.96 0 3.48.47 4.59 1.406 1.11.931 1.66 2.215 1.66 3.854 0 .844-.26 1.623-.77 2.331a5.033 5.033 0 01-2.03 1.635c1.04.373 1.81.931 2.32 1.674.51.744.77 1.623.77 2.635 0 1.641-.6 2.954-1.8 3.942-1.19.99-2.77 1.483-4.74 1.483-1.84 0-3.35-.486-4.52-1.457-1.17-.972-1.75-2.257-1.75-3.853h3.66c0 .693.26 1.259.78 1.698.52.44 1.16.659 1.92.659.87 0 1.55-.229 2.04-.685.5-.463.75-1.077.75-1.837 0-1.841-1.01-2.763-3.04-2.763h-1.94v-2.864zM1385.98 251.307c0 2.553-.53 4.503-1.59 5.857-1.05 1.351-2.6 2.026-4.64 2.026-2.01 0-3.54-.662-4.61-1.989-1.06-1.326-1.61-3.228-1.63-5.703v-3.397c0-2.577.53-4.533 1.59-5.868 1.08-1.335 2.62-2.003 4.63-2.003s3.55.662 4.61 1.99c1.07 1.318 1.61 3.215 1.64 5.69v3.397zm-3.67-3.725c0-1.53-.21-2.642-.63-3.334-.41-.702-1.06-1.053-1.95-1.053-.86 0-1.5.334-1.91 1.001-.41.66-.63 1.695-.65 3.106v4.487c0 1.503.2 2.623.61 3.359.41.727 1.07 1.089 1.97 1.089.9 0 1.55-.351 1.94-1.052.4-.701.61-1.774.62-3.218v-4.385zM1366.59 267.684v9.796h-2.61v-7.677h-2.31l-.17 3.024c-.1 1.611-.41 2.785-.95 3.521-.53.736-1.32 1.114-2.37 1.132h-.89l-.02-2.128.32-.028c.47-.035.82-.313 1.04-.832.21-.519.35-1.404.4-2.652l.19-4.156h7.37zM1373.4 277.657c-1.44 0-2.61-.44-3.51-1.322-.9-.881-1.35-2.055-1.35-3.521v-.254c0-.983.19-1.862.57-2.635.38-.779.91-1.376 1.61-1.793.7-.421 1.5-.632 2.39-.632 1.34 0 2.39.423 3.16 1.266.77.846 1.16 2.043 1.16 3.595v1.068h-6.24c.08.64.34 1.154.76 1.539.43.386.97.58 1.62.58 1.01 0 1.8-.365 2.36-1.095l1.29 1.438c-.39.557-.93.991-1.59 1.304a5.33 5.33 0 01-2.23.462zm-.3-8.04c-.52 0-.94.176-1.27.525-.32.35-.52.851-.61 1.504h3.64v-.208c-.02-.58-.17-1.027-.47-1.34-.31-.319-.74-.481-1.29-.481zM1387.22 269.784h-3.14v7.696h-2.63v-7.696h-3.08v-2.1h8.85v2.1zM1356.21 544.346h1.95c.93 0 1.62-.232 2.07-.697.44-.466.67-1.081.67-1.851 0-.743-.23-1.322-.67-1.737-.44-.413-1.05-.621-1.83-.621-.7 0-1.29.195-1.76.584-.47.38-.71.879-.71 1.496h-3.66c0-.964.25-1.826.77-2.586.52-.77 1.25-1.369 2.18-1.801.94-.43 1.97-.645 3.09-.645 1.95 0 3.48.469 4.59 1.406 1.11.93 1.66 2.213 1.66 3.854 0 .844-.26 1.623-.77 2.331a5.033 5.033 0 01-2.03 1.635c1.04.373 1.81.931 2.32 1.674.52.744.77 1.623.77 2.635 0 1.641-.6 2.953-1.8 3.942-1.19.99-2.77 1.483-4.74 1.483-1.84 0-3.35-.486-4.52-1.457-1.17-.972-1.75-2.257-1.75-3.853h3.66c0 .693.26 1.259.77 1.698.53.44 1.17.658 1.93.658.87 0 1.55-.228 2.04-.684.5-.463.75-1.077.75-1.837 0-1.841-1.01-2.763-3.04-2.763h-1.94v-2.864zM1367.93 546.122l1.07-9.38h10.34v3.056H1372l-.46 3.966c.87-.464 1.8-.698 2.78-.698 1.76 0 3.14.545 4.13 1.636 1 1.09 1.5 2.616 1.5 4.576 0 1.192-.26 2.26-.76 3.207a5.346 5.346 0 01-2.16 2.192c-.94.515-2.04.773-3.32.773-1.11 0-2.15-.225-3.1-.672-.96-.456-1.71-1.093-2.27-1.913-.55-.819-.84-1.754-.88-2.801h3.63c.07.769.34 1.368.8 1.8.46.421 1.07.632 1.81.632.83 0 1.47-.295 1.91-.886.45-.601.68-1.444.68-2.535 0-1.047-.26-1.85-.78-2.408-.51-.558-1.25-.836-2.19-.836-.87 0-1.58.228-2.12.684l-.35.33-2.92-.723zM1400.84 541.48v13.713h-3.67v-10.746h-3.23l-.23 4.233c-.14 2.256-.59 3.899-1.33 4.93-.74 1.031-1.85 1.559-3.32 1.583h-1.24l-.04-2.978.46-.037c.66-.052 1.14-.439 1.44-1.166.31-.727.5-1.965.57-3.713l.26-5.819h10.33zM1409.97 555.447c-2.01 0-3.65-.615-4.92-1.85-1.25-1.233-1.88-2.878-1.88-4.93v-.354c0-1.378.26-2.607.79-3.69.54-1.09 1.29-1.926 2.26-2.508.98-.592 2.1-.888 3.35-.888 1.87 0 3.35.591 4.42 1.774 1.08 1.183 1.62 2.861 1.62 5.032v1.496h-8.73c.12.896.47 1.613 1.07 2.154.59.542 1.35.811 2.26.811 1.41 0 2.52-.51 3.31-1.534l1.8 2.016c-.55.777-1.29 1.387-2.23 1.826-.94.43-1.98.645-3.12.645zm-.42-11.254c-.72 0-1.31.245-1.77.734-.45.492-.74 1.192-.86 2.105h5.09v-.291c-.01-.813-.23-1.437-.65-1.877-.43-.447-1.03-.671-1.81-.671zM1428.93 544.421h-4.39v10.772h-3.68v-10.772h-4.32v-2.941h12.39v2.941zM1587.22 802.735h2.09v2.951h-2.09v3.994h-3.66v-3.994h-7.57l-.16-2.306 7.69-12.153h3.7v11.508zm-7.74 0h4.08v-6.515l-.24.419-3.84 6.096zM1603.71 802.051c0 2.551-.53 4.503-1.58 5.855-1.06 1.351-2.6 2.028-4.64 2.028-2.01 0-3.55-.664-4.61-1.991-1.07-1.326-1.61-3.228-1.64-5.703v-3.397c0-2.577.53-4.533 1.6-5.868s2.61-2.002 4.62-2.002c2.02 0 3.55.663 4.62 1.989 1.06 1.318 1.61 3.215 1.63 5.692v3.397zm-3.66-3.727c0-1.53-.21-2.64-.63-3.334-.42-.7-1.07-1.051-1.96-1.051-.86 0-1.5.334-1.91 1.001-.41.659-.62 1.693-.65 3.104v4.487c0 1.505.21 2.623.61 3.359.41.727 1.07 1.091 1.98 1.091.9 0 1.54-.351 1.94-1.053.4-.701.6-1.775.62-3.219v-4.385zM1584.33 818.426v9.795h-2.62v-7.678h-2.31l-.16 3.024c-.1 1.611-.42 2.785-.95 3.521-.53.738-1.32 1.114-2.37 1.133h-.89l-.03-2.129.33-.026c.47-.037.81-.315 1.03-.834.22-.517.35-1.402.41-2.651l.18-4.155h7.38zM1591.13 828.403c-1.44 0-2.6-.44-3.51-1.32-.9-.883-1.35-2.057-1.35-3.523v-.254c0-.983.19-1.862.57-2.633.38-.779.92-1.377 1.61-1.793.7-.423 1.5-.634 2.39-.634 1.34 0 2.39.423 3.16 1.268.77.844 1.16 2.042 1.16 3.593v1.068h-6.24c.09.64.34 1.154.76 1.539.43.388.97.581 1.62.581 1.01 0 1.8-.366 2.37-1.096l1.28 1.439c-.39.556-.92.99-1.59 1.303-.67.308-1.41.462-2.23.462zm-.3-8.038c-.52 0-.94.175-1.26.525-.32.35-.53.851-.62 1.502h3.64v-.208c-.01-.58-.17-1.025-.47-1.34-.3-.319-.73-.479-1.29-.479zM1604.95 820.525h-3.14v7.696h-2.62v-7.696h-3.09v-2.099h8.85v2.099zM1364.2 1064.44h2.09v2.95h-2.09v3.99h-3.66v-3.99h-7.57l-.17-2.31 7.7-12.15h3.7v11.51zm-7.75 0h4.09v-6.52l-.25.42-3.84 6.1zM1368.81 1062.31l1.07-9.38h10.34v3.05h-7.34l-.46 3.97c.87-.46 1.8-.7 2.78-.7 1.76 0 3.13.55 4.13 1.64 1 1.09 1.5 2.61 1.5 4.57 0 1.2-.26 2.26-.76 3.21a5.3 5.3 0 01-2.16 2.19c-.94.52-2.04.78-3.32.78-1.11 0-2.15-.23-3.1-.68a5.526 5.526 0 01-2.27-1.91c-.55-.82-.84-1.75-.88-2.8h3.63c.07.77.34 1.37.8 1.8.46.42 1.06.63 1.81.63.83 0 1.46-.29 1.91-.88.45-.6.67-1.45.67-2.54 0-1.05-.25-1.85-.77-2.41-.51-.56-1.24-.83-2.19-.83-.87 0-1.58.22-2.12.68l-.35.33-2.92-.72zM1401.71 1057.67v13.71h-3.66v-10.75h-3.23l-.23 4.24c-.14 2.25-.59 3.9-1.33 4.93-.74 1.03-1.85 1.56-3.32 1.58h-1.24l-.04-2.98.46-.03c.66-.06 1.14-.44 1.44-1.17.31-.73.49-1.97.57-3.71l.25-5.82h10.33zM1410.85 1071.64c-2.01 0-3.65-.62-4.91-1.85-1.26-1.24-1.89-2.88-1.89-4.93v-.36c0-1.38.26-2.6.8-3.69.53-1.09 1.28-1.92 2.25-2.51.98-.59 2.1-.88 3.35-.88 1.87 0 3.35.59 4.42 1.77 1.08 1.19 1.62 2.86 1.62 5.03v1.5h-8.73c.12.89.47 1.61 1.06 2.15.61.54 1.36.82 2.27.82 1.41 0 2.52-.52 3.31-1.54l1.8 2.02c-.55.77-1.29 1.38-2.23 1.82-.94.43-1.98.65-3.12.65zm-.42-11.26c-.72 0-1.31.25-1.77.74-.45.49-.73 1.19-.86 2.1h5.09v-.29c-.01-.81-.23-1.44-.66-1.88-.42-.44-1.02-.67-1.8-.67zM1429.81 1060.61h-4.4v10.77h-3.67v-10.77h-4.32v-2.94h12.39v2.94zM997.647 1416.65l1.066-9.38h10.347v3.06h-7.34l-.46 3.96c.87-.46 1.8-.69 2.78-.69 1.75 0 3.13.54 4.13 1.63.99 1.09 1.49 2.62 1.49 4.58 0 1.19-.25 2.26-.76 3.2-.5.94-1.21 1.67-2.15 2.2-.94.51-2.05.77-3.32.77-1.12 0-2.15-.22-3.11-.67-.952-.46-1.709-1.1-2.267-1.92-.548-.82-.84-1.75-.875-2.8h3.622c.08.77.35 1.37.8 1.8.47.43 1.07.64 1.82.64.82 0 1.46-.3 1.91-.89.45-.6.67-1.45.67-2.54 0-1.04-.26-1.85-.77-2.4-.52-.56-1.25-.84-2.19-.84-.88 0-1.58.23-2.12.68l-.36.33-2.913-.72zM1012.55 1416.65l1.07-9.38h10.34v3.06h-7.34l-.45 3.96c.87-.46 1.79-.69 2.77-.69 1.76 0 3.14.54 4.13 1.63 1 1.09 1.5 2.62 1.5 4.58 0 1.19-.26 2.26-.76 3.2-.5.94-1.22 1.67-2.16 2.2-.93.51-2.04.77-3.32.77-1.11 0-2.15-.22-3.1-.67-.96-.46-1.71-1.1-2.27-1.92-.55-.82-.84-1.75-.88-2.8h3.63c.08.77.34 1.37.8 1.8.46.43 1.07.64 1.81.64.83 0 1.46-.3 1.91-.89.45-.6.67-1.45.67-2.54 0-1.04-.25-1.85-.77-2.4-.51-.56-1.24-.84-2.19-.84-.87 0-1.58.23-2.12.68l-.35.33-2.92-.72zM1045.46 1412.01v13.72h-3.67v-10.75h-3.23l-.23 4.23c-.14 2.26-.58 3.9-1.33 4.93-.74 1.03-1.85 1.56-3.32 1.59h-1.24l-.04-2.98.46-.04c.66-.05 1.14-.44 1.44-1.17.31-.72.5-1.96.57-3.71l.26-5.82h10.33zM1054.59 1425.98c-2.01 0-3.65-.62-4.91-1.85-1.26-1.24-1.89-2.88-1.89-4.93v-.36c0-1.38.26-2.6.8-3.69.53-1.09 1.28-1.92 2.25-2.51.98-.59 2.1-.88 3.35-.88 1.87 0 3.35.59 4.42 1.77 1.08 1.18 1.62 2.86 1.62 5.03v1.5h-8.73c.12.89.47 1.61 1.07 2.15.6.54 1.35.81 2.26.81 1.42 0 2.52-.51 3.31-1.53l1.8 2.02c-.55.77-1.29 1.38-2.23 1.82-.94.43-1.98.65-3.12.65zm-.41-11.26c-.73 0-1.32.25-1.78.74-.45.49-.73 1.19-.86 2.1h5.09v-.29c-.01-.81-.23-1.44-.66-1.88-.42-.44-1.02-.67-1.79-.67zM1073.55 1414.95h-4.39v10.78h-3.68v-10.78h-4.32v-2.94h12.39v2.94zM564.788 1408.91v3.02h-.354c-1.656.02-2.991.45-4.005 1.29-1.007.84-1.61 2-1.813 3.48.98-.99 2.219-1.49 3.713-1.49 1.606 0 2.881.57 3.829 1.72.945 1.15 1.418 2.67 1.418 4.54 0 1.2-.261 2.29-.786 3.26a5.606 5.606 0 01-2.204 2.27c-.946.54-2.019.81-3.219.81-1.945 0-3.515-.68-4.715-2.03-1.192-1.35-1.787-3.16-1.787-5.41v-1.32c0-2 .376-3.77 1.127-5.3.76-1.54 1.847-2.72 3.258-3.56 1.42-.84 3.063-1.27 4.93-1.28h.608zm-3.573 9.24c-.591 0-1.129.16-1.611.47-.48.3-.836.71-1.064 1.21v1.12c0 1.23.241 2.18.723 2.88.482.68 1.157 1.02 2.028 1.02.784 0 1.418-.3 1.9-.92.49-.63.735-1.43.735-2.42 0-1.01-.245-1.82-.735-2.44-.489-.61-1.149-.92-1.976-.92zM570.302 1418.48l1.064-9.38h10.342v3.05h-7.339l-.456 3.97c.872-.46 1.797-.7 2.776-.7 1.757 0 3.135.55 4.133 1.64.997 1.09 1.494 2.61 1.494 4.57 0 1.2-.252 2.26-.76 3.21a5.288 5.288 0 01-2.155 2.19c-.938.52-2.045.78-3.32.78a7.2 7.2 0 01-3.106-.68c-.955-.45-1.711-1.09-2.267-1.91-.551-.82-.842-1.75-.875-2.8h3.624c.076.77.343 1.37.799 1.8.464.42 1.068.63 1.812.63.829 0 1.466-.29 1.915-.88.447-.61.671-1.45.671-2.54 0-1.05-.258-1.85-.773-2.41s-1.246-.83-2.193-.83c-.87 0-1.576.22-2.116.68l-.356.33-2.914-.72zM603.204 1413.84v13.71h-3.664v-10.74h-3.231l-.228 4.23c-.143 2.26-.586 3.9-1.332 4.93-.743 1.03-1.85 1.56-3.32 1.58h-1.241l-.039-2.98.457-.03c.66-.05 1.14-.44 1.444-1.17.304-.73.495-1.96.571-3.71l.254-5.82h10.329zM612.342 1427.81c-2.011 0-3.65-.62-4.918-1.85-1.259-1.24-1.888-2.88-1.888-4.93v-.36c0-1.38.265-2.6.799-3.69.532-1.09 1.283-1.92 2.255-2.51.981-.59 2.097-.88 3.346-.88 1.877 0 3.351.59 4.424 1.77 1.081 1.18 1.622 2.86 1.622 5.03v1.5h-8.732c.118.89.473 1.61 1.064 2.15.601.54 1.355.81 2.269.81 1.411 0 2.513-.51 3.308-1.53l1.8 2.02c-.55.77-1.294 1.38-2.232 1.82-.936.43-1.976.65-3.117.65zm-.419-11.26c-.726 0-1.318.25-1.774.74-.447.49-.734 1.19-.862 2.1h5.095v-.29c-.017-.81-.236-1.44-.658-1.88-.423-.44-1.024-.67-1.801-.67zM631.302 1416.78h-4.398v10.77h-3.675v-10.77h-4.322v-2.94h12.395v2.94zM202.031 1063.97l-7.136 16.4h-3.866l7.148-15.49h-9.176v-2.97h13.03v2.06zM204.933 1071.29l1.064-9.38h10.342v3.06h-7.338l-.456 3.97c.871-.47 1.796-.7 2.775-.7 1.758 0 3.135.54 4.133 1.63.997 1.09 1.494 2.62 1.494 4.58 0 1.19-.252 2.26-.76 3.2a5.375 5.375 0 01-2.154 2.2c-.938.51-2.045.77-3.321.77-1.114 0-2.151-.22-3.106-.67-.954-.46-1.709-1.1-2.267-1.91-.549-.82-.842-1.76-.875-2.8h3.625c.076.76.343 1.36.799 1.79.463.43 1.068.64 1.811.64.829 0 1.467-.3 1.915-.89.447-.6.671-1.44.671-2.53 0-1.05-.257-1.85-.773-2.41-.515-.56-1.246-.84-2.193-.84-.87 0-1.576.23-2.116.69l-.355.32-2.915-.72zM237.835 1066.65v13.71h-3.663v-10.74h-3.232l-.228 4.23c-.143 2.26-.586 3.9-1.329 4.93-.746 1.03-1.853 1.56-3.323 1.58h-1.24l-.039-2.97.456-.04c.66-.05 1.14-.44 1.444-1.17.306-.72.495-1.96.571-3.71l.254-5.82h10.329zM246.974 1080.62c-2.012 0-3.651-.62-4.919-1.85-1.259-1.24-1.888-2.88-1.888-4.93v-.36c0-1.37.266-2.6.8-3.68.532-1.1 1.283-1.93 2.254-2.52.981-.59 2.097-.88 3.347-.88 1.876 0 3.35.59 4.423 1.77 1.081 1.19 1.623 2.86 1.623 5.03v1.5h-8.733c.119.9.473 1.61 1.064 2.16.601.53 1.356.81 2.27.81 1.411 0 2.512-.52 3.307-1.54l1.801 2.02c-.551.77-1.294 1.38-2.233 1.82-.936.43-1.976.65-3.116.65zm-.419-11.25c-.727 0-1.319.24-1.775.73-.446.49-.734 1.19-.862 2.1h5.095v-.29c-.016-.81-.235-1.43-.658-1.87-.423-.45-1.023-.67-1.8-.67zM265.933 1069.59h-4.397v10.77h-3.675v-10.77h-4.322v-2.94h12.394v2.94zM1352.24 1353.5l1.06-9.38h10.35v3.06h-7.34l-.46 3.96c.87-.46 1.8-.69 2.78-.69 1.75 0 3.13.54 4.13 1.63 1 1.09 1.49 2.62 1.49 4.58 0 1.19-.25 2.26-.76 3.2-.49.94-1.21 1.67-2.15 2.2-.94.51-2.05.77-3.32.77-1.12 0-2.15-.23-3.11-.67-.95-.46-1.71-1.1-2.26-1.92-.55-.82-.85-1.75-.88-2.8h3.63c.07.77.34 1.37.79 1.8.47.42 1.07.64 1.82.64.83 0 1.46-.3 1.91-.89.45-.6.67-1.45.67-2.54 0-1.05-.26-1.85-.77-2.4-.52-.56-1.25-.84-2.19-.84-.87 0-1.58.23-2.12.68l-.36.33-2.91-.72zM1379.02 1354.95c0 2.55-.53 4.5-1.58 5.85-1.06 1.35-2.61 2.03-4.64 2.03-2.01 0-3.55-.66-4.61-1.99-1.07-1.33-1.62-3.23-1.64-5.7v-3.4c0-2.58.53-4.53 1.6-5.87 1.07-1.34 2.61-2 4.62-2 2.01 0 3.55.66 4.61 1.99 1.07 1.32 1.62 3.21 1.64 5.69v3.4zm-3.66-3.73c0-1.53-.21-2.64-.64-3.33-.41-.71-1.06-1.06-1.95-1.06-.86 0-1.5.34-1.91 1-.41.66-.62 1.7-.65 3.11v4.49c0 1.5.21 2.62.61 3.36.42.72 1.07 1.09 1.98 1.09.89 0 1.54-.36 1.94-1.06.39-.7.6-1.77.62-3.21v-4.39zM1359.64 1371.32v9.8h-2.62v-7.68h-2.31l-.16 3.02c-.11 1.61-.42 2.79-.95 3.52-.53.74-1.32 1.12-2.38 1.14h-.88l-.03-2.13.33-.03c.47-.03.81-.31 1.03-.83.22-.52.35-1.4.41-2.65l.18-4.16h7.38zM1366.44 1381.3c-1.44 0-2.61-.45-3.51-1.33-.9-.88-1.35-2.05-1.35-3.52v-.25c0-.99.19-1.86.57-2.64.38-.78.92-1.37 1.61-1.79.7-.42 1.5-.63 2.39-.63 1.34 0 2.39.42 3.16 1.26.77.85 1.16 2.05 1.16 3.6v1.07h-6.24c.09.64.34 1.15.76 1.54.43.38.97.58 1.62.58 1.01 0 1.8-.37 2.36-1.1l1.29 1.44c-.39.55-.92.99-1.59 1.3-.67.31-1.41.47-2.23.47zm-.3-8.04c-.52 0-.94.17-1.27.52-.32.35-.52.85-.61 1.5h3.64v-.21c-.01-.57-.17-1.02-.47-1.33-.3-.32-.73-.48-1.29-.48zM1380.26 1373.42h-3.14v7.7h-2.63v-7.7h-3.08v-2.1h8.85v2.1zM803.299 1579.51v3.01h-.356c-1.655.03-2.99.46-4.004 1.3-1.005.83-1.61 2-1.812 3.48.979-1 2.218-1.49 3.714-1.49 1.604 0 2.881.57 3.827 1.72.945 1.15 1.42 2.66 1.42 4.54 0 1.2-.263 2.28-.786 3.25a5.493 5.493 0 01-2.207 2.27c-.945.55-2.019.81-3.218.81-1.943 0-3.516-.67-4.715-2.02-1.192-1.35-1.787-3.16-1.787-5.41v-1.32c0-2 .376-3.77 1.129-5.3.76-1.54 1.844-2.72 3.255-3.56 1.421-.85 3.063-1.27 4.932-1.28h.608zm-3.574 9.24c-.592 0-1.128.15-1.61.47-.482.3-.836.71-1.064 1.21v1.12c0 1.22.241 2.18.721 2.88.482.68 1.159 1.02 2.029 1.02.786 0 1.42-.31 1.9-.92.491-.63.736-1.44.736-2.42 0-1.01-.245-1.82-.736-2.44-.489-.61-1.148-.92-1.976-.92zM820.689 1590.52c0 2.55-.529 4.51-1.586 5.86-1.056 1.35-2.601 2.02-4.639 2.02-2.009 0-3.548-.66-4.612-1.98-1.065-1.33-1.61-3.23-1.636-5.71v-3.39c0-2.58.532-4.54 1.597-5.87 1.073-1.34 2.616-2 4.627-2 2.01 0 3.549.66 4.613 1.98 1.064 1.32 1.61 3.22 1.636 5.69v3.4zm-3.664-3.72c0-1.53-.211-2.64-.634-3.34-.414-.7-1.064-1.05-1.951-1.05-.862 0-1.5.34-1.915 1-.404.66-.621 1.7-.645 3.11v4.48c0 1.51.202 2.63.608 3.36.414.73 1.074 1.09 1.976 1.09.896 0 1.543-.35 1.94-1.05.397-.7.604-1.77.621-3.22v-4.38zM801.303 1606.9v9.79h-2.616v-7.67h-2.309l-.163 3.02c-.102 1.61-.419 2.78-.951 3.52-.53.74-1.322 1.12-2.371 1.13h-.889l-.025-2.12.324-.03c.471-.04.816-.32 1.033-.84.217-.51.354-1.4.408-2.65l.179-4.15h7.38zM808.107 1616.88c-1.435 0-2.607-.44-3.512-1.33-.899-.88-1.349-2.05-1.349-3.52v-.25c0-.98.191-1.86.571-2.64.38-.77.917-1.37 1.611-1.79.701-.42 1.496-.63 2.39-.63 1.34 0 2.393.42 3.159 1.27.773.84 1.159 2.04 1.159 3.59v1.07h-6.237c.085.64.337 1.15.76 1.54.428.38.97.58 1.62.58 1.009 0 1.797-.37 2.364-1.1l1.285 1.44c-.393.56-.923.99-1.592 1.3-.672.31-1.413.47-2.229.47zm-.298-8.04c-.52 0-.94.17-1.267.52-.321.35-.525.85-.615 1.5h3.639v-.2c-.013-.58-.17-1.03-.471-1.34-.302-.32-.73-.48-1.286-.48zM821.929 1609h-3.141v7.69h-2.625V1609h-3.087v-2.1h8.853v2.1zM245.676 1346.18l-7.134 16.39h-3.866l7.147-15.48h-9.176v-2.97h13.029v2.06zM260.455 1354.95c0 2.55-.529 4.5-1.584 5.85-1.056 1.35-2.603 2.03-4.638 2.03-2.012 0-3.549-.66-4.615-1.99-1.064-1.33-1.61-3.23-1.634-5.7v-3.4c0-2.58.533-4.53 1.597-5.87 1.073-1.34 2.614-2 4.626-2 2.011 0 3.548.66 4.613 1.99 1.066 1.32 1.609 3.21 1.635 5.69v3.4zm-3.662-3.73c0-1.53-.211-2.64-.634-3.33-.415-.71-1.064-1.06-1.952-1.06-.863 0-1.5.34-1.914 1-.406.66-.621 1.7-.647 3.11v4.49c0 1.5.204 2.62.608 3.36.416.72 1.074 1.09 1.979 1.09.895 0 1.54-.36 1.939-1.06.397-.7.603-1.77.621-3.21v-4.39zM241.069 1371.32v9.8h-2.616v-7.68h-2.309l-.163 3.02c-.102 1.61-.419 2.79-.949 3.52-.532.74-1.322 1.12-2.373 1.14h-.887l-.027-2.13.326-.03c.471-.03.814-.31 1.033-.83.217-.52.352-1.4.406-2.65l.181-4.16h7.378zM247.875 1381.3c-1.437 0-2.607-.45-3.513-1.33-.9-.88-1.348-2.05-1.348-3.52v-.25c0-.99.189-1.86.571-2.64.38-.78.916-1.37 1.611-1.79.699-.42 1.496-.63 2.39-.63 1.338 0 2.392.42 3.159 1.26.771.85 1.159 2.05 1.159 3.6v1.07h-6.237c.083.64.337 1.15.76 1.54.428.38.968.58 1.62.58 1.007 0 1.795-.37 2.363-1.1l1.286 1.44c-.393.55-.925.99-1.594 1.3-.67.31-1.413.47-2.227.47zm-.298-8.04c-.52 0-.942.17-1.269.52-.319.35-.524.85-.615 1.5h3.639v-.21c-.011-.57-.168-1.02-.471-1.33-.302-.32-.73-.48-1.284-.48zM261.697 1373.42h-3.143v7.7h-2.625v-7.7h-3.087v-2.1h8.855v2.1z"
                      fill="#222831"
                    ></path>
                    <path
                      d="M911.632 1026.22c-7.403 0-9.901 6.57-9.901 6.57s-2.493-6.57-9.898-6.57c-7.404 0-11.861 7.06-11.861 12.88 0 8.46 16.394 20.76 20.723 23.87.627.45 1.448.45 2.075 0 4.327-3.11 20.723-15.41 20.723-23.87 0-5.82-4.458-12.88-11.861-12.88z"
                      fill="#EF4141"
                    ></path>
                    <path
                      d="M1060.93 914.034c0-8.289-7.6-10.983-10.83-12.144-6.49-2.325-6.49-4.594-6.49-5.597 0-3.328 3.8-3.645 4.96-3.697 1.8-.052 3.59.791 4.81 1.583.74.477 1.74.371 2.32-.315l2.64-2.852c.74-.793.64-2.113-.26-2.746-1.48-1.056-3.8-2.377-6.66-2.957v-3.539a1.53 1.53 0 00-1.53-1.532h-3.96c-.84 0-1.53.688-1.53 1.532v3.908c-5.07 1.478-8.34 5.44-8.34 10.615 0 5.703 3.85 9.98 11.51 12.672 5.39 1.901 5.81 3.38 5.81 5.069 0 1.057 0 3.909-4.91 3.909-2.48 0-5.23-1.691-6.92-3.011-.74-.581-1.79-.475-2.43.159l-2.74 2.798c-.74.793-.69 2.008.15 2.694 1.64 1.32 4.49 3.274 7.87 4.223v3.961c0 .845.69 1.531 1.53 1.531h3.96c.85 0 1.53-.686 1.53-1.531v-3.644c5.87-.897 9.51-5.069 9.51-11.089z"
                      fill="#AFDE61"
                    ></path>
                  </svg>
                </div>

                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-a -purple"
                  data-personal-calculation-position="a"
                >
                  {A}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-a2 -blue"
                  data-personal-calculation-position="a2"
                >
                  {A1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a1 -cyan"
                  data-personal-calculation-position="a1"
                >
                  {A2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a3 -green"
                  data-personal-calculation-position="a3"
                >
                  {A3}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-b -purple"
                  data-personal-calculation-position="b"
                >
                  {B}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-b2 -blue"
                  data-personal-calculation-position="b2"
                >
                  {B1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b1 -cyan"
                  data-personal-calculation-position="b1"
                >
                  {B2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b3 -green"
                  data-personal-calculation-position="b3"
                >
                  {B3}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-c -red"
                  data-personal-calculation-position="c"
                >
                  {C}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-c2 -white"
                  data-personal-calculation-position="c2"
                >
                  {C1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-c1 -orange"
                  data-personal-calculation-position="c1"
                >
                  {C2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-d -red"
                  data-personal-calculation-position="d"
                >
                  {D}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-d2 -white"
                  data-personal-calculation-position="d2"
                >
                  {D1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-d1 -orange"
                  data-personal-calculation-position="d1"
                >
                  {D2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-e -yellow"
                  data-personal-calculation-position="e"
                >
                  {X}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-e1 -white"
                  data-personal-calculation-position="e1"
                >
                  {Y}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-e2 -white"
                  data-personal-calculation-position="e2"
                >
                  {XY}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-f -white"
                  data-personal-calculation-position="f"
                >
                  {E}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-g -white"
                  data-personal-calculation-position="g"
                >
                  {F}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-y -white"
                  data-personal-calculation-position="y"
                >
                  {G}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p1 -white"
                  data-personal-calculation-position="p1"
                >
                  {F2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p2 -white"
                  data-personal-calculation-position="p2"
                >
                  {F1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p3 -white"
                  data-personal-calculation-position="p3"
                >
                  {H2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p4 -white"
                  data-personal-calculation-position="p4"
                >
                  {H1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-k -white"
                  data-personal-calculation-position="k"
                >
                  {H}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s1 -white"
                  data-personal-calculation-position="s1"
                >
                  {E2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s2 -white"
                  data-personal-calculation-position="s2"
                >
                  {E1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s3 -white"
                  data-personal-calculation-position="s3"
                >
                  {G1}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s4 -white"
                  data-personal-calculation-position="s4"
                >
                  {G2}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x -white"
                  data-personal-calculation-position="x"
                >
                  {G4}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x1 -white"
                  data-personal-calculation-position="x1"
                >
                  {L}
                </div>
                <div
                  className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x2 -white"
                  data-personal-calculation-position="x2"
                >
                  {M}
                </div>

                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-b8"
                  data-personal-calculation-position="b8"
                >
                  {BFBF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-b7"
                  data-personal-calculation-position="b7"
                >
                  {BFB}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k2"
                  data-personal-calculation-position="k2"
                >
                  {BFBBF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k1 -bold"
                  data-personal-calculation-position="k1"
                >
                  {BF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k4"
                  data-personal-calculation-position="k4"
                >
                  {BFFBF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k3"
                  data-personal-calculation-position="k3"
                >
                  {BFF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k5"
                  data-personal-calculation-position="k5"
                >
                  {BFFF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k8"
                  data-personal-calculation-position="k8"
                >
                  {FCFF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k7"
                  data-personal-calculation-position="k7"
                >
                  {FCF}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-k6"
                  data-personal-calculation-position="k6"
                >
                  {FCFFC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-c4 -bold"
                  data-personal-calculation-position="c4"
                >
                  {FC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-c6"
                  data-personal-calculation-position="c6"
                >
                  {FCCFC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-c5"
                  data-personal-calculation-position="c5"
                >
                  {FCC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-c7"
                  data-personal-calculation-position="c7"
                >
                  {FCCC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y3"
                  data-personal-calculation-position="y3"
                >
                  {CGCC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y2"
                  data-personal-calculation-position="y2"
                >
                  {CGC}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y4"
                  data-personal-calculation-position="y4"
                >
                  {CGCCG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y1 -bold"
                  data-personal-calculation-position="y1"
                >
                  {CG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y6"
                  data-personal-calculation-position="y6"
                >
                  {CGGCG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y5"
                  data-personal-calculation-position="y5"
                >
                  {CGG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y7"
                  data-personal-calculation-position="y7"
                >
                  {CGGG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-d6"
                  data-personal-calculation-position="d6"
                >
                  {GDGG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-y8"
                  data-personal-calculation-position="y8"
                >
                  {GDG}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-d5"
                  data-personal-calculation-position="d5"
                >
                  {GDGGD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-d4 -bold"
                  data-personal-calculation-position="d4"
                >
                  {GD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-d8"
                  data-personal-calculation-position="d8"
                >
                  {GDDGD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-d7"
                  data-personal-calculation-position="d7"
                >
                  {GDD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-d9"
                  data-personal-calculation-position="d9"
                >
                  {GDDD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g3"
                  data-personal-calculation-position="g3"
                >
                  {DHDD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g2"
                  data-personal-calculation-position="g2"
                >
                  {DHD}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g4"
                  data-personal-calculation-position="g4"
                >
                  {DHDDH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g1 -bold"
                  data-personal-calculation-position="g1"
                >
                  {DH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g7"
                  data-personal-calculation-position="g7"
                >
                  {DHHDH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g5"
                  data-personal-calculation-position="g5"
                >
                  {DHH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-g6"
                  data-personal-calculation-position="g6"
                >
                  {DHHH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t3"
                  data-personal-calculation-position="t3"
                >
                  {HAHH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t2"
                  data-personal-calculation-position="t2"
                >
                  {HAH}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t4"
                  data-personal-calculation-position="t4"
                >
                  {HAHHA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t1 -bold"
                  data-personal-calculation-position="t1"
                >
                  {HA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t6"
                  data-personal-calculation-position="t6"
                >
                  {HAAHA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t5"
                  data-personal-calculation-position="t5"
                >
                  {HAA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-t7"
                  data-personal-calculation-position="t7"
                >
                  {HAAA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-a5"
                  data-personal-calculation-position="a5"
                >
                  {AEAA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-a4"
                  data-personal-calculation-position="a4"
                >
                  {AEA}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-a6"
                  data-personal-calculation-position="a6"
                >
                  {AEAAE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f1 -bold"
                  data-personal-calculation-position="f1"
                >
                  {AE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f3"
                  data-personal-calculation-position="f3"
                >
                  {AEEAE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f2"
                  data-personal-calculation-position="f2"
                >
                  {AEE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f4"
                  data-personal-calculation-position="f4"
                >
                  {AEEE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f7"
                  data-personal-calculation-position="f7"
                >
                  {EBEE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f6"
                  data-personal-calculation-position="f6"
                >
                  {EBE}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f8"
                  data-personal-calculation-position="f8"
                >
                  {EBEEB}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-f5 -bold"
                  data-personal-calculation-position="f5"
                >
                  {EB}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-b5"
                  data-personal-calculation-position="b5"
                >
                  {EBBEB}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-b4"
                  data-personal-calculation-position="b4"
                >
                  {EBB}
                </div>
                <div
                  className="matrix-diagram__number js-personal-calculation-item -position-b6"
                  data-personal-calculation-position="b6"
                >
                  {EBBB}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-with-diagram__bottom-values-row row">
          <div className="col">
            <div className="diagram-values-item">
              <div className="h6 diagram-values-item__title">Поиск себя</div>
              <div className="diagram-values-item__description text-block">
                <p>
                  Соединение мужского и женского. Выстраивание взаимоотношений.
                  Способности, навыки, умения.
                </p>
              </div>
              <div className="small-diagram-values">
                <div className="small-diagram-values__titles-block">
                  <div className="h6 small-diagram-values__title">Небо</div>
                  <div className="h6 small-diagram-values__title">Земля</div>
                </div>
                <div className="small-diagram-values__values-block">
                  <div className="small-diagram-values__path-img">
                    <svg
                      width="38"
                      height="48"
                      viewBox="0 0 38 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0V2H18V46H0V48H20V25H38V23H20V0H0Z"
                        fill="#222831"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="small-diagram-values__value js-personal-calculation-item -top-left diagram-value"
                    data-personal-calculation-position="h"
                  >
                    {LN}
                  </div>
                  <div
                    className="small-diagram-values__value js-personal-calculation-item -bottom-left diagram-value"
                    data-personal-calculation-position="j"
                  >
                    {LZ}
                  </div>
                  <div
                    className="small-diagram-values__value js-personal-calculation-item -center diagram-value"
                    data-personal-calculation-position="m"
                  >
                    {LP1}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="diagram-values-item">
              <div className="h6 diagram-values-item__title">Социализация</div>
              <div className="diagram-values-item__description text-block">
                <p>
                  Социальная и родовая системы. Результаты и признания в
                  социуме.
                </p>
              </div>
              <div className="small-diagram-values">
                <div className="small-diagram-values__titles-block">
                  <div className="h6 small-diagram-values__title">М</div>
                  <div className="h6 small-diagram-values__title">Ж</div>
                </div>
                <div className="small-diagram-values__values-block">
                  <div className="small-diagram-values__path-img">
                    <svg
                      width="38"
                      height="48"
                      viewBox="0 0 38 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0V2H18V46H0V48H20V25H38V23H20V0H0Z"
                        fill="#222831"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="small-diagram-values__value js-personal-calculation-item -top-left diagram-value"
                    data-personal-calculation-position="n"
                  >
                    {LO}
                  </div>
                  <div
                    className="small-diagram-values__value js-personal-calculation-item -bottom-left diagram-value"
                    data-personal-calculation-position="t"
                  >
                    {LM}
                  </div>
                  <div
                    className="small-diagram-values__value js-personal-calculation-item -center diagram-value"
                    data-personal-calculation-position="z"
                  >
                    {YM}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="diagram-values-item">
              <div className="h6 diagram-values-item__title">
                Духовная грамотность
              </div>
              <div className="diagram-values-item__description text-block">
                <p>Духовный зачет. Кто я для бога? Где божественное во мне?</p>
              </div>
              <div className="small-diagram-values">
                <div
                  className="diagram-value js-personal-calculation-item"
                  data-personal-calculation-position="s"
                >
                  {DG}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="print-diagram-wrap js-print-diagram-wrap"></div>
      <SimpleAccordion />
    </>
  );
};
