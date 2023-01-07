export const ReactMemo = ({ count }) => {
  console.log("ReactMemo:", count);
  let i = 0;
  if (count === 1) {
    return "count === 1";
  }
  if (count === 2) {
    return "count === 2";
  } else if (count === 3) {
    return "count === 3"
  } else {
    while (i < 2000000000) i++;
    return count
  }
}
