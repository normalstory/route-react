import React, { useState } from "react";

const AsyncCallback1 = () => {
  const [res, setRes] = useState("");
  const increase = (number, callback) => {
    setTimeout(() => {
      const result = number + 10;
      callback && callback(result);
    }, 1000);
  };

  // //t1
  // increase(0, (result) => {
  //   alert(result);
  // });

  //t2
  if (res === "") {
    setRes("start work");
    console.log("start work");
    increase(0, (result) => {
      console.log(result);
      setRes(result);
      increase(result, (result) => {
        console.log(result);
        setRes(result);
        increase(result, (result) => {
          console.log(result);
          setRes(result);
          increase(result, (result) => {
            console.log(result);
            setRes(result);
            console.log("end work");
            setRes("end work");
          });
        });
      });
    });
  }
  return <div>AsyncCallback1 : {res}</div>;
};

export default AsyncCallback1;
