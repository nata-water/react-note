// function doZeroFill(targetStr, size) {
//   const zeroLetter = [...Array(size)]
//     .map(() => "0")
//     .reduce((before, after) => before + after, "0");
//
//   return (zeroLetter + targetStr).slice(-size);
// }
//
// function getYyyymmddStr(dateSnapshot, delimiter = "") {
//   const year = dateSnapshot.getFullYear();
//   const month = `${dateSnapshot.getMonth() + 1}`;
//   const date = `${dateSnapshot.getDate()}`;
//
//   return `${year}${delimiter}${doZeroFill(month, 2)}${delimiter}${doZeroFill(date, 2)}`;
// }

export function doZeroFill(targetStr: string, size: number) {
  const zeroLetter = [...Array(size)]
    .map(() => '0')
    .reduce((before, after) => before + after, '0');

  return (zeroLetter + targetStr).slice(-size);
}

export function getYyyymmddStr(dateSnapshot: Date, delimiter: string = '') {
  const year = dateSnapshot.getFullYear();
  const month = `${dateSnapshot.getMonth() + 1}`;
  const date = `${dateSnapshot.getDate()}`;

  return `${year}${delimiter}${doZeroFill(month, 2)}${delimiter}${doZeroFill(
    date,
    2
  )}`;
}

export function fitStrLength(
  str: string,
  strCount: number,
  suffix: string = '...'
) {
  let result = str;
  if (str.length > strCount) {
    result = `${str.substring(0, strCount)}${suffix}`;
  }
  return result;
}
