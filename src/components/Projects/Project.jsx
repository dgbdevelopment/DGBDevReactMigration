import './project.css'

export function Project({ project }) {
  const urlImg = (img) =>
    `https://admin.dgbdevelopment.com/assets/img/imguploads/${img}`;

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img src={urlImg(project.image)} />
        </div>
        <div className="card-back">
          <div className="card-back-content">
            <h2 className="card-back-title">{project.title}</h2>
            <p className="card-back-description">{project.description}</p>
            <p className="card-back-utils">{project.languages}</p>
            <div className="card-back-buttons">
              <a href={project.links[0]} target="_blank" rel="noreferrer">
                Ir al sitio
              </a>
              <a href={project.links[1]} target="_blank" rel="noreferrer">
                Código frontend
              </a>
              {project.links.length > 2 && (
                <a href={project.links[2]} target="_blank" rel="noreferrer">
                  Código backend
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
