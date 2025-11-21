export default function JourneyCard({ post }) {
  return (
    <div style={{ maxWidth: "300px" }}>
      <img
        src={post.image}
        alt={post.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem" }}>
        {post.date}
      </p>

      <h3 style={{ margin: "0.5rem 0" }}>{post.title}</h3>

      <p>{post.text}</p>

      <button
        style={{
          marginTop: "1rem",
          padding: "8px 14px",
          border: "1px solid black",
          background: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Read Article
      </button>
    </div>
  );
}
