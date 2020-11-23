import React, { useState } from "react";

const AsyncSetTime1 = () => {
  const [statePage, setStatePage] = useState("대기 중...");
  const printMe = () => {
    alert("hello world~");
    setStatePage("접속 완료!");
  };

  setTimeout(statePage === "대기 중..." && printMe, 3000);
  return <div>AsyncSetTime1 : {statePage}</div>;
};

export default AsyncSetTime1;
