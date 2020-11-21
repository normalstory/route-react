//URL 쿼리 방식
import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //쿼리 시작을 알리는 문자열 '?'를 제거
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>Page Info( + URL?A=a 쿼리 방식 )</h1>
      <p>This project was created to practice the React-Router language.</p>
      {showDetail && <p>detail 값이 true 이군요?! </p>}
    </div>
  );
};

export default About;
