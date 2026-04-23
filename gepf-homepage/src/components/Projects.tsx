type Project = {
  name: string
  desc: string
  status: 'wip' | 'live'
  tags?: string[]
  link?: string
  github?: string
  category?: string
  image?: string
}

const projects: Project[] = [
  {
    name: 'RMCD Webapp',
    desc: 'Web platform for road marking fleets. Pulls live telemetry from RMCD control units, overlays GPS and weather data, generates working reports and provides efficiency statistics via graphs and heatmaps. Includes job management, team and machine administration.',
    status: 'wip',
    tags: ['React', 'C#'],
    link: 'https://rmcd.app',
    category: 'Commercial',
  },
  {
    name: 'Highland Games Webapp',
    desc: 'Live scoring and matchup platform for the Pro Western Highland Games in Höchst, Austria. Spectators follow scores and fixtures in real time across all disciplines; organizers enter results and manage matchups through a protected admin panel.',
    status: 'wip',
    tags: ['React', 'C#'],
    link: 'https://highland-games.gepf.at',
    category: 'Open Source',
    github: 'https://github.com/GEPF-Solutions/HighlandGames',
  },
  {
    name: 'GEPF Website',
    desc: 'This website. Built it ourselves, obviously. It shows.',
    status: 'live',
    tags: ['React'],
    github: 'https://github.com/GEPF-Solutions',
    category: 'Open Source',
  },
]

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      {project.image && (
        <img src={project.image} className="project-image" alt={project.name} />
      )}
      <div className="project-card-body">
        <div className="project-card-main">
          <div className="project-card-header">
            {project.link && project.category !== 'Commercial' ? (
              <a href={project.link} className="project-name-link" target="_blank" rel="noreferrer">
                {project.name} ↗
              </a>
            ) : (
              <p className="project-name">{project.name}</p>
            )}
            {project.category && (
              <span className="project-category">{project.category}</span>
            )}
            {project.github && (
              <a href={project.github} className="project-github-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            )}
          </div>
          <p className="project-desc">{project.desc}</p>
          {project.tags && (
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className="project-card-aside">
          <span className={`project-pill ${project.status === 'wip' ? 'pill-wip' : 'pill-live'}`}>
            {project.status.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="projects">
      <div className="section-head">
        <h2 className="section-title">Projects</h2>
        <span className="section-note">← stuff we made</span>
      </div>
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </section>
  )
}
