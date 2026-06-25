import { SKILLS, JOBS, EDUCATION } from "../../data/about";

export default function About() {
  return (
    <section id="about" className="section page">
      <div className="section-head">
        <h2>About <em>the engineer.</em></h2>
        <p className="sub">
          Backend-leaning full-stack. MERN + NestJS by trade. Karachi based.
          Likes systems that scale quietly.
        </p>
      </div>

      <div className="about-grid">
        <div>
          <Bio />
          <SkillsGrid />
        </div>
        <div className="experience">
          <ExperienceTimeline />
          <EducationSection />
        </div>
      </div>
    </section>
  );
}

function Bio() {
  return (
    <div className="about-bio">
      <p>
        I write software the way I'd want it written for me —{" "}
        <em>legibly, durably, and without performative complexity.</em>
      </p>
      <p>
        My natural habitat is the backend: REST APIs, schemas that earn their
        normalization, cron workers that don't make 3am pages. But I've shipped
        enough frontend (Next.js, shadcn, custom CSS) that I know what a clean
        API has to feel like from the other side.
      </p>
      <p>
        The work I'm proudest of is the work nobody points at. Multi-tenant SaaS
        that doesn't leak between customers. Biometric pipelines that just keep
        ticking. <strong>The boring infrastructure of a real business.</strong>
      </p>
    </div>
  );
}

function SkillsGrid() {
  return (
    <div className="about-skills">
      {Object.entries(SKILLS).map(([category, items]) => (
        <div className="col" key={category}>
          <h5>{category}</h5>
          <div className="list">
            {items.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <>
      <h5 className="eyebrow" style={{ marginBottom: 12 }}>Experience</h5>
      {JOBS.map((job, i) => (
        <div className="job" key={i}>
          <div className="when">{job.when}</div>
          <div>
            <div className="role-name">{job.role}</div>
            <div className="role-co">{job.company}</div>
            <div className="role-blurb">{job.blurb}</div>
          </div>
          <div className="badge">{job.tag}</div>
        </div>
      ))}
    </>
  );
}

function EducationSection() {
  return (
    <div className="education">
      <h5 className="eyebrow" style={{ marginBottom: 10, marginTop: 22 }}>Education</h5>
      {EDUCATION.map((edu, i) => (
        <div
          className="job"
          key={i}
          style={i === 0 ? { borderTop: "none", paddingTop: 0 } : undefined}
        >
          <div className="when">{edu.when}</div>
          <div>
            <div className="role-name">{edu.title}</div>
            <div className="role-co">{edu.institution}</div>
          </div>
          <div className="badge">{edu.tag}</div>
        </div>
      ))}
    </div>
  );
}
