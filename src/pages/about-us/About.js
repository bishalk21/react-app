import React from "react";
import UserCBC from "../../components/about-user/UserCBC";
import "./about.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>About us</h1>
        <h2>This is F-Order App</h2>
        <UserCBC name={"Bishal Karki (CBC)"} />
      </>
    );
  }
}

export default About;
