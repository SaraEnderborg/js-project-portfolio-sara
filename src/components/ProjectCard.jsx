export default function ProjectCard({ title, description, image, demo, code }) {
  return (
    <article style={{ textAlign: "left" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }}
      />

      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ marginBottom: "1rem" }}>{description}</p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live demo
        </a>
        <a href={code} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </div>
    </article>
  );
}
