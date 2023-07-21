import React from "react";
import UserCBC from "../../components/about-user/UserCBC";
import "./about.css";
import UserContext from "../../context/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>About us</h1>
        <h1>
          LoggedIn User:
          {/* <UserContext.Consumer>{() => console.log(data)}</UserContext.Consumer> */}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </h1>
        <h2>This is F-Order App</h2>
        <UserCBC name={"Bishal Karki (CBC)"} />
      </>
    );
  }
}

export default About;
