import React from "react";
import "./Home.css";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <>
      <div>
        <ReactTypingEffect
          text="Jessica Anocibar"
          className="name"
          typingDelay="2000ms"
          style={{ letterSpacing: "0.181818em", color: "whitesmoke" }}
        />
      </div>
      <div className="topNav">
        <a
          href="/Home"
          style={{ letterSpacing: "0.181818em", color: "whitesmoke" }}
        >
          Home{" "}
        </a>
        <a
          href="/Biography"
          style={{ letterSpacing: "0.181818em", color: "whitesmoke" }}
        >
          Biography{" "}
        </a>
        <a
          href="/Projects"
          style={{ letterSpacing: "0.181818em", color: "whitesmoke" }}
        >
          Projects{" "}
        </a>
        <a
          href="/Contact"
          style={{ letterSpacing: "0.181818em", color: "whitesmoke" }}
        >
          Contact
        </a>
      </div>
    </>
  );
}

export default Home;
