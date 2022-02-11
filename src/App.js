import { useEffect, useState } from "react";
import breakPointObserver from "./breakPointObserver";
import "./styles/_app.scss";

const breakPoints = {
  mobile: "(max-width:600px)",
  tablet: "(min-width:599px) and (max-width:768px)",
  laptop: "(min-width:769px) and (max-width:1024)",
  desktop: "(min-width:1025)",
};

function App() {
  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);
  return (
    <div className="App">
      {breakPoint === "mobile" && <h1>Mobile</h1>}
      {breakPoint === "tablet" && <h1>tablet</h1>}
      {breakPoint === "laptop" && <h1>laptop</h1>}
      {breakPoint === "desktop" && <h1>desktop</h1>}
      <header className="main-title">
        <img src="./images/logo.svg" alt="base apparael logo text" />
      </header>
      <section className="text">
        <h1 className="title">
          <span className="text-thin">We're</span>
          Coming <br />
          Soon
        </h1>
        <p className="text-body">
          Hello shoppers! We're currently building our new fashion store. Add your email below to
          stay up-to-date with announcements and our launch deals.
        </p>
      </section>
      <section className="email">
        <form>
          <label></label>
          <input id="email" placeholder="Email Address" type="email" />

          <button className="button"></button>
        </form>
      </section>
    </div>
  );
}

export default App;
