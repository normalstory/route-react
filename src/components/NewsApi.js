import React, { useState } from "react";
import axios from "axios";

const NewsApi = () => {
  const [data, setData] = useState(null);
  const [sam01, setSam01] = useState("");
  const { title, description } = sam01;
  const onClick = async () => {
    try {
      const reponse = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&apiKey=e5560dbd6902493281110740a388e1b6"
      );
      setData(reponse.data);
      setSam01({
        title: reponse.data.articles.title,
        description: reponse.data.articles.description,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={onClick}>뉴스보기</button>
      <div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsApi;
