import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!

console.log(user.links);


function App() {
  return (
    <div>
      <NavBar />
      <Home 
       color = {user.color}
        username={user.name}
        city = {user.city}
     />
      <About 
        bio= {user.bio} 
        github= {user.links.github}
        linkedin= {user.links.linkedin}
      
      />
     
    </div>
  );
}

export default App;
