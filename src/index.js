import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";

import "./styles.css";

function App() {
  return (
    <div className="title">
      <Header
        image=""
        name="Space Wonders"
        tagline="This Week's Space Encounters"
      />
      <Articles>
        <News
          name="https://www.space.com/hubble-elusive-11-billion-year-old-galaxy-light-absorption"
          title="11 Billion Year Old Galaxy Light Absorption"
          author="Robert Lea"
          desciption="Astronomers normally observe galaxies by observing light these objects emit, but some tricky galaxies require a different approach."
          image="https://cdn.mos.cms.futurecdn.net/CCkkon9zfgaeueokNmVPo8-1920-80.jpg.webp"
        />
        <News
          name="https://www.space.com/dark-matter-haloes-ancient-galaxy-1st-weight-measurements"
          title="Dark Matter Haloes Ancient Galaxy"
          author="Robert Lea"
          desciption="The measurement of the mysterious form of matter around these quasar galaxies could have profound implications for our understanding of how the cosmos has evolved."
          image="https://cdn.mos.cms.futurecdn.net/zzRZutctSVdMKZR5jRuBwH-1920-80.jpg.webp"
        />
        <News
          name="https://www.space.com/planet-nine-explain-odd-icy-body-behavior-beyond-neptune"
          title="Planet Nine Explains Odd Icy Body Behavior"
          author="Paul Sutter"
          desciption="Astronomers struggle to explain all of the properties of trans-Neptunian objects."
          image="https://cdn.mos.cms.futurecdn.net/ewHXX9BMeGHnMukE2jewPV-1920-80.jpg.webp"
        />
        <News
          name="https://www.space.com/annular-solar-eclipse-2023-guide-ring-of-fire"
          title="Annular Solar Eclipse 2023"
          author="Jamie Carter"
          desciption="The annular solar eclipse will be visible from eight states in the U.S. Southwest."
          image="https://cdn.mos.cms.futurecdn.net/xVN5pcgAtdxyKVFDt23qBn-1920-80.jpg.webp"
        />
        <News
          name="https://www.space.com/venus-lightning-meteor-strikes-atmosphere"
          title="Venus Lightning Meteor Strikes Atmosphere"
          author="Sharmila Kuthunur"
          desciption="But future missions, scientists say, are safe from both rare lightning strikes and meteors known to burn up high above the planet's clouds."
          image="https://cdn.mos.cms.futurecdn.net/PBrYfzLHanUSgrjNYJeSH5-1920-80.jpg.webp"
        />
      </Articles>
    </div>
  );
}

function Header(props) {
  return (
    <div className="header-container">
      <div className="header-img">
        <img src={props.image} alt="" />
      </div>
      <div className="header-name">
        <h1 className="header-title">{props.name}</h1>
        <p className="header-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function Articles(props) {
  return (
    <div>
      <ul className="con">{props.children}</ul>
    </div>
  );
}

function handleDelete(e) {
  if (e.target.tagName === "SPAN" && e.target.textContent === "x") {
    e.currentTarget.remove();
  }
}

function News(props) {
  return (
    <div className="news" onClick={handleDelete}>
      <span>x</span>
      <li className="list">
        <div className="news-con">
          <img className="news-img" src={props.image} alt="" />
          <div>
            <h2 className="news-title">
              <a href={props.name} className="news-name">
                {props.title}
              </a>
            </h2>
            <p className="news-author">By: {props.author}</p>
          </div>
        </div>

        <p className="news-description">{props.desciption}</p>
      </li>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
