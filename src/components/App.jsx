import "./App.css";
import React, { useState } from "react";


function App() {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {

    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>

        <button className="btn" onClick={getUsers}>
          Get Users
        </button>

      <div className="row">
        {users?.map((current, index) => {

          return (
            <div className="container" key={index}>
              <div className="card">
                <img src={current.avatar} className="card-img-top" alt="..." />
                <h3 className="card-title">
                   {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">E-mail: {current.email}</h4><br></br>
                <button class="info">Info</button><br></br><br></br>
                <div class="social">
                  <ul>
                    <li><a href=""><i class="facebook fa fa-facebook-square"></i></a></li>
                    <li><a href=""><i class="instagram fa fa-instagram"></i></a></li>
                    <li><a href=""><i class="twitter fa fa-twitter-square"></i></a></li>
                    <li><a href=""><i class="linkedin fa fa-linkedin-square"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="Specialization">
              <hr></hr><h1>specialization</h1><hr></hr>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
            </div>

          );

        })}
      </div>
    </div>
  );
}



export default App;
