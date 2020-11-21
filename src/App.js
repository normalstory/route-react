import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./style/nav.scss";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <p>hello route world</p>
      <hr />
      <ul className="nav">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="./profile/gildong">길동'프로필</Link>
        </li>
        <li>
          <Link to="./profile/gilseo">길서'프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      {/* <Route path="/info" component={About}/>  react v5 이전 버전*/}
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
