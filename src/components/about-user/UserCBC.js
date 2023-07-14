import React from "react";

class UserCBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatar_url: "https://img.me/",
        name: "user",
        location: "Sydney",
        bio: "Developer",
      },
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("React");
    }, 1000);

    // const data = await fetch("https://api.github.com/users/bishalk21");
    // const json = await data.json();

    // this.setState({
    //   userInfo: json,
    // });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { avatar_url, name, location, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="image" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
      </div>
    );
  }
}

export default UserCBC;
