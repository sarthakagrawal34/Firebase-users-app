import React from "react";
import Users from "./Users";
import firebase from "firebase/compat/app";
class App extends React.Component {
  constructor() {
    // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
    super();
    this.state = {
      // Now using firebase so initialize products as an empty array
      users: [],
      // Adding loader till when the products are being loaded
      loading: true
    };
    // Declaring a new variable db which stores the database
    this.db = firebase.firestore();
  }
  // Function to fetch initial products array
  componentDidMount() {
    this.db.collection("users").onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => {
        const data = doc.data();
        //Provide a 'id' field to the data so as to provide a unique key
        data["id"] = doc.id;
        return data;
      });
      // Now update the state using this.setState
      this.setState({
        users,
        // Removing loader as the products are loaded
        loading: false
      });
    });
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Users users={users} />
        {loading && <h1>Loading Users ....</h1>}
      </div>
    );
  }
}

export default App;
