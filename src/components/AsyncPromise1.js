import React, { useState } from "react";

const AsyncPromise1 = () => {
  const [num, setNum] = useState(0);

  const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error("NumberTooBig");
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  };

  if (num === 0) {
    increase(0)
      .then((number) => {
        console.log(number);
        setNum(number);
        return increase(number);
      })
      .then((number) => {
        console.log(number);
        setNum(number);
        return increase(number);
      })
      .then((number) => {
        console.log(number);
        setNum(number);
        return increase(number);
      })
      .then((number) => {
        console.log(number);
        setNum(number);
        return increase(number);
      })
      .then((number) => {
        console.log(number);
        setNum(number);
        return increase(number);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return <div>Promise1 : {num}</div>;
};

export default AsyncPromise1;
