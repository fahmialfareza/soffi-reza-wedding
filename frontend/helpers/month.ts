export default function convertToMonth(month: number) {
  if (month === 0) {
    return "JAN";
  } else if (month === 1) {
    return "FEB";
  } else if (month === 2) {
    return "MAR";
  } else if (month === 3) {
    return "APR";
  } else if (month === 4) {
    return "MEI";
  } else if (month === 5) {
    return "JUN";
  } else if (month === 6) {
    return "JUL";
  } else if (month === 7) {
    return "AUG";
  } else if (month === 8) {
    return "SEP";
  } else if (month === 9) {
    return "OKT";
  } else if (month === 10) {
    return "NOV";
  } else if (month === 11) {
    return "DES";
  }
}
