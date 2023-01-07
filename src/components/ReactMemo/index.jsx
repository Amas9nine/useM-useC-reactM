import React from "react";
export const ReactMemo = React.memo(({ count }) => {
  console.log("ReactMemo:", count);
  let i = 0;
  if (count === 1) {
    return count;
  }
  else if (count === 2) {
    return count;
  } else if (count === 3) {
    return count
  } else {
    while (i < 2000000000) i++;
    return count
  }
},
  function areEqual({ prevcount, nextcount }) {
    let i = 0;
    if (nextcount === 1) {
      return false
    }
    else if (nextcount === 2) {
      return true
    } else if (nextcount === 3) {
      return false
    } else {
      while (i < 2000000000) i++;
      return true
    }
  }
)
