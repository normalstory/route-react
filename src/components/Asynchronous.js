import React, { Route, Link, useRouteMatch } from "react-router-dom";
import AsyncSetTime1 from "./AsyncSetTime1";
import AsyncCallback1 from "./AsyncCallback1";
import AsyncPromise1 from "./AsyncPromise1";
import AsyncAwait1 from "./AsyncAwait1";

const Asynchronous = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <p>비동기 유형</p>
      <ul>
        <li>
          <Link to={`${url}/setTimeout`}>setTimeout</Link>
        </li>
        <li>
          <Link to={`${url}/call-back`}>function of call-back</Link>
        </li>
        <li>
          <Link to={`${url}/promise01`}>promise</Link>
        </li>
        <li>
          <Link to={`${url}/async-await1`}>async/await</Link>
        </li>
      </ul>

      <Route
        exact
        path={path}
        render={() => <div>비동기 테스트 항목을 선택해주세요</div>}
      />

      <Route exact path={`${path}/:setTimeout`} component={AsyncSetTime1} />
      <Route exact path={`${path}/:call-back`} component={AsyncCallback1} />
      <Route exact path={`${path}/:promise01`} component={AsyncPromise1} />
      <Route exact path={`${path}/:async-await1`} component={AsyncAwait1} />
    </div>
  );
};

export default Asynchronous;
