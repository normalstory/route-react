import React from "react";
// import { Route, Link } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import "../style/nav.scss";
import "../style/navLink.css";

const Profiles = () => {
  const activeStyle = {
    //NavLink가 활성화 되었을 때
    background: "black", //여기서는 ';' 아니고, ','
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            className="nonSelected"
            //activeClassName="selectedScss" //scss로 활성화에 대한 별도 styling
            activeClassName="selectedCSS" //css로 활성화에 대한 별도 styling
            to="/Profiles/gildong"
            active
          >
            홍길동
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nonSelected"
            activeStyle={activeStyle} //NavLink로 활성화에 대한 별도 styling
            to="/Profiles/gilseo"
          >
            홍길서
          </NavLink>
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
