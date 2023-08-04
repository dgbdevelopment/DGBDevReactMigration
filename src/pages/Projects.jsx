import { useEffect, useState } from "react";
import { Project } from "../components/Projects/Project";
import "./projects.css";

export function Projects() {

  const [projects, setProjects] = useState(null)
  
  useEffect(() => {
    fetch("https://admin.dgbdevelopment.com/project/getall")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProjects(data.projects);
    })
  }, []);

  return (
    <section className="projects">
      <h1 className="projects-title neu-text primary animated">Proyectos</h1>
      <div className="projects-container">
        {projects?.map((project) => (
          <Project key={project._id} project={project}/>
        ))}
      </div>
    </section>
  );
}
