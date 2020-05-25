import React from "react";
import Header from "../Components/Header.jsx";
import Welcome from "../Components/Welcome.jsx";
import Footer from "../Components/Footer.jsx";
import MenuButtons from "../Components/MenuButtons.jsx";
import "../Style/Pages/Home.css";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="home__container">
        <div className="home__buttons">
          <MenuButtons />
        </div>

        <div className="home__action">
          <Welcome />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Home;
