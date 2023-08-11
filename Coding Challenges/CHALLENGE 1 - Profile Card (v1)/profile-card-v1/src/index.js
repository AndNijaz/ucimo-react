import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <DeveloperCard />;
}

function DeveloperCard() {
  return (
    <div className="developer-card">
      <Avatar devImage="jonas.jpeg" />
      <DeveloperData
        name="Jonas Schmedtmann"
        desc="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
      />
    </div>
  );
}

function Avatar(props) {
  return (
    <img src={props.devImage} alt="Developer" className="developer-avatar" />
  );
}

function DeveloperData(props) {
  return (
    <div className="developer-data">
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <SkillsList />
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      <Skill skill="React 💪" color="blue" />
      <Skill skill="HTML + CSS 💪" color="orange" />
      <Skill skill="JavaScript 💪" color="yellow" />
      <Skill skill="Svelte 💪" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div class="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
