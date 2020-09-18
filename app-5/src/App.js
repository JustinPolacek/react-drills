import React, { Component } from 'react';
import "./App.css";
import Image from "./Component/Image";


class App extends Component{
  render(){
    return(
      <div className="App">
        <Image url={"https://i.insider.com/5f60ebd257b7da001ee11af1?width=1100&format=jpeg&auto=webp"} />
      </div>
    );
  }
}

export default App;