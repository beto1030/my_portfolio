import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const Home = () => {
  return (
    <div className={`text-center`}>
      <p> Hi, my name is Alberto Alvarado and I am a self taught web developer. </p>
      <p>Some of my projects</p>
      <div className="d-flex justify-content-evenly">
      {/*<Projects className="" />*/}
      </div>
      <p>My skills</p>
      {/*<Skills />*/}
    </div>

  );
};

export default Home;

