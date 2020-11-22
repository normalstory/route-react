import React from "react";

const AsyncAwait1 = () => {
  const result = 0;
  const increase = (number, callback) => {
    setTimeout(() => {
      const result = number + 10;
      callback && callback(result);
    }, 1000);
  };
  increase(0, (result) => {
    alert(result);
  });
  return <div>{result}</div>;
};

export default AsyncAwait1;
