import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 968px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const samArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160",
// };

const NewList = () => {
  //useState, useEffect, axios
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //async용 함수
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://newsapi.org/v2/top-headlines?country=kr&apiKey=e5560dbd6902493281110740a388e1b6"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기 중일때
  if (loading) {
    return <NewsListBlock>대기 중..</NewsListBlock>;
  }
  // articles값이 안-유효할때
  if (!articles) {
    return null;
  }

  // articles값이 유효할때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
