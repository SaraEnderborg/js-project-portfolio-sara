export default function TechItem({ icon, name }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={icon}
        alt={name}
        style={{ width: "60px", height: "60px", marginBottom: "0.5rem" }}
      />
      <p style={{ fontSize: "0.9rem" }}>{name}</p>
    </div>
  );
}
