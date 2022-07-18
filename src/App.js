import logo from "./logo.svg";
import "./App.css";
import Title from "./components/title";
import StarBean from "./components/starbean";
import Teaser from "./components/teaser";
import Ltd from "./components/ltd";
import Titd from "./components/titd";
import RoasterTitle from "./components/roastertitle";
import Card from "./components/cardcomponent";
import Footer from "./components/footer";
import Header from "./components/header";


 import React, { useState, useEffect } from "react";

 function App() {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch("http://localhost:4503/AemProject/bin/api/content/v6?page=home", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function(response) {
        //console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return(
     data !==null ? (
     <div>
      <Header value={data}/>,
      <Teaser value={data}/>,
      <Title value={data}/>,
      <Ltd value={data}/>,

      <StarBean value={data}/>,
      
     
     <Titd value={data}/>,
     <RoasterTitle />,
     <Card value={data}/>,
     <Footer />
     
     </div>
     )
      : <h1>no data found</h1>
      
  )
  // (console.log(data), 
  // (<Ltd value={data} />))
  
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //  );
}

export default App;
