import React, { Component } from "react";

class HistorySample extends Component {
  //메서드
  handleGoBack = () => {
    this.props.history.goBack(); //go back
  };
  handleGoHome = () => {
    this.props.history.push("/"); //go home
  };

  //컴포넌트 라이프
  componentDidMount() {
    this.unblock = this.props.history.block("정말 떠나시나요?");
  } //페이지에 컴포넌트가 노출될때
  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  } //페이지에 컴포넌트가 제거될때

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Back</button>
        <button onClick={this.handleGoHome}>Home</button>
      </div>
    );
  }
}

export default HistorySample;
