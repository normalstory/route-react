import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./style/nav.scss";
import Profiles from "./components/Profiles";
import HistorySample from "./components/HistorySample";
import Asynchronous from "./components/Asynchronous";
import NewsApi from "./components/NewsApi";
import NewsFeed from "./components/NewsFeed";

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
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리</Link>
        </li>
        <li>
          <Link to="/asynchronous">비동기</Link>
        </li>
        <li>
          <Link to="/newsApi">뉴스api</Link>
        </li>
        <li>
          <Link to="/newsFeed">뉴스피드</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        {/* <Route path="/info" component={About}/>  react v5 이전 버전*/}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/asynchronous" component={Asynchronous} />
        <Route path="/newsApi" component={NewsApi} />
        <Route path="/newsFeed" component={NewsFeed} />

        <Route
          render={({ location }) => (
            <div>
              <h2>'~{location.pathname}'' 페이지는 존재하지 않습니다.</h2>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
