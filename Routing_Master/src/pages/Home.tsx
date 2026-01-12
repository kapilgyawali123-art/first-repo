import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>🚦 Routing Master</h1>
        <p>
          A learning-focused React project to master <b>React Router</b> by
          exploring real routing examples.
        </p>
      </section>

      {/* What You Will Learn */}
      <section style={styles.section}>
        <h2>📚 What You Will Learn</h2>
        <ul>
          <li>Basic Routing using Routes & Route</li>
          <li>Navigation using Link & NavLink</li>
          <li>Dynamic Routing with URL Params</li>
          <li>Programmatic Navigation</li>
          <li>Nested Routes</li>
          <li>Protected Routes</li>
          <li>404 Page Handling</li>
        </ul>
      </section>

      {/* Routing Examples */}
      <section style={styles.section}>
        <h2>🧭 Routing Examples</h2>

        <div style={styles.links}>
          <Link to="/about" style={styles.link}>
            Go to About Page
          </Link>
          <Link to="/user" style={styles.link}>
            View Users
          </Link>
          <Link to="/user/1" style={styles.link}>
            User Profile (ID: 1)
          </Link>
          <Link to="/dashboard" style={styles.link}>
            Dashboard (Protected)
          </Link>
        </div>
      </section>

      {/* Programmatic Navigation */}
      <section style={styles.section}>
        <h2>⚡ Programmatic Navigation</h2>
        <button style={styles.button} onClick={() => navigate("/user/2")}>
          Go to User 2 Profile
        </button>
      </section>

      {/* Try Invalid Route */}
      <section style={styles.section}>
        <h2>❌ 404 Demo</h2>
        <button style={styles.button} onClick={() => navigate("/random-page")}>
          Try Invalid Route
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Built with React Router v6</p>
        <p>Learning Project – Routing Master</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  hero: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
  },
  section: {
    marginTop: "30px",
  },
  links: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  link: {
    padding: "10px 15px",
    background: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
  },
  button: {
    padding: "10px 15px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "40px",
    paddingTop: "10px",
    borderTop: "1px solid #ccc",
  },
};

export default Home;
