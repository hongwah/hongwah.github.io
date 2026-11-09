import Bag from '../components/Bag.jsx'
import { coffees } from '../content.js'
import { education, experience, nav, profile, project, skills } from './content.js'

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top">{profile.name}</a>
      <nav aria-label="Main">
        <ul className="nav-list">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="label">{profile.role} / {profile.location}</p>
      <h1>{profile.headline}</h1>
      <p className="hero-summary">{profile.summary}</p>
      <div className="actions">
        <a className="button button-primary" href={profile.resume} download>Download resume (PDF)</a>
        <a className="button" href={`mailto:${profile.email}`}>Email me</a>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="job">
            <p className="label job-dates">{job.dates}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <ul className="job-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Project() {
  return (
    <section className="section section-tint" id="project">
      <h2>Project</h2>
      <article className="project">
        <a className="project-bags" href={project.href} aria-label={`Open ${project.name}`}>
          <Bag coffee={coffees[0]} />
          <Bag coffee={coffees[1]} />
        </a>
        <div>
          <p className="label">{project.type}</p>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="job-points">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <ul className="tags" aria-label="Built with">
            {project.stack.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <p className="project-note">{project.note}</p>
          <a className="button button-primary" href={project.href}>View the website</a>
        </div>
      </article>
    </section>
  )
}

function Skills() {
  return (
    <section className="section split" id="skills">
      <div>
        <h2>Skills</h2>
        <ul className="tags tags-large">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <h3>{education.degree}</h3>
        <p className="job-company">{education.school}</p>
        <p className="label">{education.dates}</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get in touch</h2>
      <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <ul className="contact-links">
        <li><a href={profile.linkedin}>LinkedIn</a></li>
        <li><a href={profile.github}>GitHub</a></li>
        <li><a href={profile.resume} download>Resume (PDF)</a></li>
      </ul>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Project />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
