import React from "react";
const User = (props) => {
  const { name, email } = props.user;
  return (
    <div className="user">
      <div className="left-block">
        <img style={styles.image} src={props.user.img} alt="" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: "30px" }}> {name} </div>
        <div style={{ color: "blue", textDecoration: "underline" }}>
          {email}
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc"
  }
};

export default User;
