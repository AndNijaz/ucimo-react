import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const developers = [
  {
    id: 1,
    name: "Nijaz Andelić",
    desc: "Najjači React developer ikad",
    devImage: "jonas.jpeg",
  },
  {
    id: 2,
    name: "Berin Fakić",
    desc: "Najjači C# developer ikad",
    devImage: "jonas.jpeg",
  },
  {
    id: 3,
    name: "Alen Bejtić",
    desc: "Najjači C++ developer ikad",
    devImage: "jonas.jpeg",
  },
];

function App() {
  return (
    <>
      {developers.map((dev) => (
        <DeveloperCard
          key={dev.id}
          name={dev.name}
          desc={dev.desc}
          devImage={dev.devImage}
        />
      ))}
    </>
  );
}

function DeveloperCard(props) {
  return (
    <div className="developer-card">
      <Avatar devImage={props.devImage} />
      <DeveloperData name={props.name} desc={props.desc} />
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
    <div className="skill" style={{ backgroundColor: props.color }}>
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
