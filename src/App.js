import { useEffect, useState } from "react";
import breakPointObserver from "./breakPointObserver";
import "./styles/_app.scss";

//nice code!
//const breakPoints = {
//  mobile: "(max-width:600px)",
//  tablet: "(min-width:600px) and (max-width:768px)",
//  laptop: "(min-width:768px) and (max-width:1024px)",
//  desktop: "(min-width:1024px)",
//};
const breakPoints = {
  small: "(max-width:800px)",
  desktop: "(min-width:800px)",
};

function App() {
  const [breakPoint, isBreakPoint] = useState();

  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  let getMarkup = (element) => {
    switch (element) {
      case "mobileHeader": {
        if (breakPoint === "small")
          return (
            <>
              <header className="main-title">
                <img className="logo" src="./images/logo.svg" alt="base apparael logo text" />
              </header>
              <img
                className="hero-mobile"
                src="./images/hero-mobile.jpg"
                alt="base appareal logo text"></img>
            </>
          );
        break;
      }
      case "header": {
        if (breakPoint !== "small")
          return (
            <header className="main-title">
              <img className="logo" src="./images/logo.svg" alt="base apparael logo text" />
            </header>
          );
        break;
      }
      case "img": {
        if (breakPoint !== "small")
          return (
            <img
              className="hero"
              src="./images/hero-desktop.jpg"
              alt="base appareal logo text"></img>
          );
        break;
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <div className="App">
      {getMarkup("mobileHeader")}
      <div className="content">
        {getMarkup("header")}
        <section className="text">
          <h1 className="title">
            <span className="text-thin">We're</span>
            Coming <br />
            Soon
          </h1>
          <p className="text-body">
            Hello fellow shoppers! We're currently building our new fashion store. Add your email
            below to stay up-to-date with announcements and our launch deals.
          </p>
        </section>
        <form className="email">
          <label></label>
          <input id="email" placeholder="Email Address" type="email" />

          <button className="button"></button>
        </form>
      </div>
      {getMarkup("img")}
    </div>
  );
}

export default App;
