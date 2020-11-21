import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/Profiles/gildong">홍길동</Link>
        </li>
        <li>
          <Link to="/Profiles/gilseo">홍길서</Link>
        </li>
      </ul>

      {/* <Route
        path={["/Profile/:gildong", "/Profile/:gilseo"]}
        component={Profile}
      /> */}

      <Route
        path="/Profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/Profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
