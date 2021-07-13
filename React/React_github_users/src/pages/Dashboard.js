import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { useGithubContext } from "../context/context";

const Dashboard = () => {
  const { loading } = useGithubContext();

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="Loading" className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
    </main>
  );
};

export default Dashboard;
