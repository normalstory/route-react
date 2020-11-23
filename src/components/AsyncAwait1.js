import React, { useState } from "react";
import axios from "axios";

const AsyncAwait1 = () => {
  const [data, setData] = useState(null);

  // const onClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={onClick}>불러오기</button>
      <br />
      {data && (
        <textarea row={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
};

export default AsyncAwait1;
