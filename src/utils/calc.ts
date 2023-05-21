export const funcCalculation = (arr: number[]): number[] => {
  const filteredArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!filteredArr.includes(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

export function calculation(number: number): number {
  let sumNumber = number
    .toString()
    .split("")
    .reduce((previousValue, currentValue) =>
      String(parseInt(previousValue) + parseInt(currentValue))
    );
  if (number > 22 || parseInt(sumNumber) > 22) {
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

export const calculateAge = (birthday: string) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  let ageInMonths = yearDiff * 12 + monthDiff;

  if (currentDate.getDate() < birthDate.getDate()) {
    ageInMonths--;
  }

  const ageInYears = ageInMonths / 12;
  return parseFloat(ageInYears.toFixed(2));
};

export const filterCalcYear = (arr: [], gender: string) => {
  return arr.map((e: any) => {
    if (e.w && e.m) {
      if (gender === "M") {
        return e.m;
      } else if (gender === "W") {
        return e.w;
      }
    }
    return e;
  });
};
export const calcYearlyForecast = (age: number) => {
  if (age >= 16 && age <= 17.5) {
    return 0;
  } else if (age > 17.5 && age <= 18.5) {
    return 1;
  } else if (age > 18.5 && age < 20) {
    return 2;
  } else if (age >= 20 && age < 21) {
    return 3;
  } else if (age >= 21 && age <= 22.5) {
    return 4;
  } else if (age > 22.5 && age <= 23.5) {
    return 5;
  } else if (age >= 23.5 && age < 25) {
    return 6;
  } else if (age >= 25 && age < 26) {
    return 7;
  } else if (age >= 26 && age <= 27.5) {
    return 8;
  } else if (age > 27.5 && age <= 28.5) {
    return 9;
  } else if (age > 28.5 && age < 30) {
    return 10;
  } else if (age >= 30 && age < 31) {
    return 11;
  } else if (age >= 31 && age <= 32.5) {
    return 12;
  } else if (age > 32.5 && age <= 33.5) {
    return 13;
  } else if (age > 33.5 && age < 35) {
    return 14;
  } else if (age >= 35 && age < 36) {
    return 15;
  } else if (age >= 36 && age <= 37.5) {
    return 16;
  } else if (age > 37.5 && age <= 38.5) {
    return 17;
  } else if (age > 38.5 && age < 40) {
    return 18;
  } else if (age >= 40 && age < 41) {
    return 19;
  } else if (age >= 41 && age <= 42.5) {
    return 20;
  } else if (age > 42.5 && age <= 43.5) {
    return 21;
  } else if (age > 43.5 && age < 45) {
    return 22;
  } else if (age >= 45 && age < 46) {
    return 23;
  } else if (age >= 46 && age <= 47.5) {
    return 24;
  } else if (age > 47.5 && age <= 48.5) {
    return 25;
  } else if (age > 48.5 && age < 50) {
    return 26;
  } else if (age >= 50 && age < 51) {
    return 27;
  } else if (age >= 51 && age <= 52.5) {
    return 28;
  } else if (age > 52.5 && age <= 53.5) {
    return 29;
  } else if (age > 53.5 && age < 55) {
    return 30;
  } else if (age >= 55 && age < 56) {
    return 31;
  } else if (age >= 56 && age <= 57.5) {
    return 32;
  } else if (age > 57.5 && age <= 58.5) {
    return 33;
  } else if (age > 58.5 && age < 60) {
    return 34;
  } else if (age >= 60 && age < 61) {
    return 35;
  } else if (age >= 61 && age <= 62.5) {
    return 36;
  } else if (age > 62.5 && age <= 63.5) {
    return 37;
  } else if (age > 63.5 && age < 65) {
    return 38;
  } else if (age >= 65 && age < 66) {
    return 39;
  } else if (age >= 66 && age <= 67.5) {
    return 40;
  } else if (age > 67.5 && age <= 68.5) {
    return 41;
  } else if (age > 68.5 && age < 70) {
    return 42;
  } else if (age >= 70 && age < 71) {
    return 43;
  } else if (age >= 71 && age <= 72.5) {
    return 44;
  } else if (age > 72.5 && age <= 73.5) {
    return 45;
  } else if (age > 73.5 && age < 75) {
    return 46;
  } else if (age >= 75 && age < 76) {
    return 47;
  } else if (age >= 76 && age <= 77.5) {
    return 48;
  } else if (age > 77.5 && age <= 78.5) {
    return 49;
  } else if (age > 78.5 && age < 80) {
    return 50;
  } else if (age >= 80 && age < 81) {
    return 51;
  }
  return 0;
};

export const calcYearlyForecastChildren = (age: number) => {
  if (age >= 0 && age < 1) {
    return 0;
  } else if (age >= 1 && age <= 2.5) {
    return 1;
  } else if (age > 2.5 && age <= 3.5) {
    return 2;
  } else if (age > 3.5 && age < 5) {
    return 3;
  } else if (age >= 5 && age < 6) {
    return 4;
  } else if (age >= 6 && age <= 7.5) {
    return 5;
  } else if (age > 7.5 && age <= 8.5) {
    return 6;
  } else if (age > 8.5 && age < 10) {
    return 7;
  } else if (age >= 10 && age < 11) {
    return 8;
  } else if (age >= 11 && age <= 12.5) {
    return 9;
  } else if (age > 12.5 && age <= 13.5) {
    return 10;
  } else if (age > 13.5 && age < 15) {
    return 11;
  } else if (age >= 15 && age < 16) {
    return 12;
  }
  return 0;
};
