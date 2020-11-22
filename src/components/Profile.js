//URL 파라미터 방식
import React from "react";
import WithRouter from "./WithRouter";

const data = {
  gildong: {
    name: "홍길동",
    description: "라우터를 라우터라 하지 못하는...길동(<- URL 파라미터 방식 )",
  },
  gilseo: {
    name: "홍길서",
    description: "리액트를 리액트라 하지 못하는,,,길서(<- URL 파라미터 방식 )",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>warnning : Who are you?! </div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>

      <WithRouter />
    </div>
  );
};

export default Profile;
