import React from "react";
import { withRouter } from "react-router-dom";

const WithRouter = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        row={7}
        readOnly={true}
      ></textarea>
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        row={7}
        readOnly={true}
      ></textarea>
      <button onClick={() => history.push("/")}>go Home</button>
    </div>
  );
};

export default withRouter(WithRouter);
