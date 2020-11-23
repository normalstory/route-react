import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

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

const samArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={samArticle} />
      <NewsItem article={samArticle} />
      <NewsItem article={samArticle} />
      <NewsItem article={samArticle} />
      <NewsItem article={samArticle} />
    </NewsListBlock>
  );
};

export default NewList;
