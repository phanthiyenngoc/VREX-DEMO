import dayjs from "dayjs";

export function formatNumber(number) {
  if (!number) return 0;
  return number.toLocaleString();
}

export function formatDatetime(date, format = "DD/MM/YYYY") {
  if (!date) return "";
  return dayjs(date).format(format);
}

export const toVietNameseCurrencyFormat = (number, numberRounded = 1) => {
  if (!number || isNaN(number)) {
    return "0";
  }
  number = number.toFixed(0);
  let s = number.toString(),
    i,
    j = 0,
    unit,
    dozens,
    hundred,
    str = "",
    decS = number;

  if (decS < 0) {
    decS = -1 * decS;
    s = decS.toString();
  }
  i = s.length;

  let isInt = (n) => {
    return typeof n === "number" && Number.isInteger(n);
  };

  if (i !== 0) {
    while (i > 0) {
      unit = parseInt(s.substring(i - 1, 1));
      i--;
      if (i > 0) dozens = parseInt(s.substring(i - 1, 1));
      i--;

      if (i > 0) hundred = parseInt(s.substring(i - 1, 1));
      i--;

      j++;
    }

    if (j == 0 || j == 1) {
      return decS.toString();
    }

    if (j == 2) {
      let number = decS / 1000;
      if (isInt(number)) return number + " nghìn";
      return (str = (decS / 1000).toFixed(numberRounded) + " nghìn");
    }

    if (j == 3) {
      let number = decS / 1000000;
      if (isInt(number)) return number + " triệu";
      return (str = (decS / 1000000).toFixed(numberRounded) + " triệu");
    }

    if (j > 3) {
      let number = decS / 1000000000;
      if (isInt(number)) return number + " tỷ";
      return (str = (decS / 1000000000).toFixed(numberRounded) + " tỷ");
    }
  }
  return str;
};
