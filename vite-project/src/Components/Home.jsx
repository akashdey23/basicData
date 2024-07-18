import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="home">
      <Navbar />
      <h1>Home</h1>
      
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.image}
          desc={item.description}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Home;
