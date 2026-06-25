import { CONTACT_CHANNELS } from "../../data/about";

export default function Contact() {
  return (
    <section id="contact" className="contact page">
      <div className="contact-grid">
        <div>
          <h2>
            Got something <em>tricky</em><br />
            to build<span style={{ color: "var(--accent)" }}>?</span>
          </h2>
          <p className="contact-tag">
            Backend, multi-tenant SaaS, real-time pipelines, system integrations.
            Remote work, full-time or contract. Reply within a day.
          </p>
        </div>

        <div className="contact-card">
          <div className="head">
            <span className="title">→ channels</span>
            <span className="title" style={{ color: "var(--live)" }}>
              <span className="dot" />available
            </span>
          </div>

          {CONTACT_CHANNELS.map((ch) => (
            <div className="channel" key={ch.label}>
              <span className="lab">{ch.label}</span>
              <a
                className="val"
                href={ch.href}
                {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {ch.value}
              </a>
            </div>
          ))}

          <div className="respond">
            <span><span className="resp-dot" />avg response time</span>
            <b>under 24 hours</b>
          </div>
        </div>
      </div>
    </section>
  );
}
