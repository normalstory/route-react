import React, { useState } from "react";
import axios from "axios";

const NewsApi = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const reponse = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&apiKey=e5560dbd6902493281110740a388e1b6"
      );
      setData(reponse.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={onClick}>뉴스보기</button>
      <div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
        {/* <h4>{JSON.stringify(data.articles.title, null, 2)}</h4>
        <p>{JSON.stringify(data.articles.description, null, 2)}</p> */}
      </div>
    </div>
  );
};

export default NewsApi;
