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
  // {
  //   id: 2,
  //   name: "Berin Fakić",
  //   desc: "Najjači C# developer ikad",
  //   devImage: "jonas.jpeg",
  // },
  // {
  //   id: 3,
  //   name: "Alen Bejtić",
  //   desc: "Najjači C++ developer ikad",
  //   devImage: "jonas.jpeg",
  // },
];

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <>
      {developers.map((dev) => (
        <DeveloperCard devObj={dev} />
      ))}
    </>
  );
}

function DeveloperCard({ devObj }) {
  return (
    <div className="developer-card">
      <Avatar devImage={devObj.devImage} />
      <DeveloperData name={devObj.name} desc={devObj.desc} />
    </div>
  );
}

function Avatar({ devImage }) {
  return <img src={devImage} alt="Developer" className="developer-avatar" />;
}

function DeveloperData({ name, desc }) {
  return (
    <div className="developer-data">
      <h2>{name}</h2>
      <p>{desc}</p>
      <SkillsList />
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill color={skill.color} skill={skill.skill} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ color, skill, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill}{" "}
      <span>
        {level === "beginner" ? "👶" : null}
        {level === "advanced" ? "💪" : null}
        {level === "intermediate" ? "👍" : null}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
