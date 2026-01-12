import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={styles.container}>
      <h1 className="text-danger">ℹ️ About – Routing Master</h1>

      <p style={styles.text}>
        This project is created to help beginners understand how
        <b> React Router</b> works in a real-world React application.
      </p>

      {/* Router Info */}
      <section style={styles.section}>
        <h2>📌 Current Route Info</h2>
        <p>
          <b>Pathname:</b> {location.pathname}
        </p>
      </section>

      {/* Concepts Covered */}
      <section style={styles.section}>
        <h2>📚 Routing Concepts Covered</h2>
        <ul>
          <li>BrowserRouter</li>
          <li fontFamily= "">Routes & Route</li>
          <li>Link & NavLink</li>
          <li>useNavigate()</li>
          <li>useParams()</li>
          <li>Nested Routes</li>
          <li>Protected Routes</li>
          <li>404 Page Handling</li>
        </ul>
      </section>

      {/* Navigation Buttons */}
      <section style={styles.section}>
        <h2>🧭 Navigation Actions</h2>

        <button style={styles.button} onClick={() => navigate("/")}>
          ⬅ Go Back Home
        </button>

        <button style={styles.button} onClick={() => navigate("/user")}>
          View Users
        </button>
      </section>

      {/* Learning Note */}
      <section style={styles.note}>
        <p>
          💡 Tip: Notice how navigation happens without page reload. This is
          client-side routing.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  text: {
    marginBottom: "20px",
    fontSize: "16px",
  },
  section: {
    marginTop: "25px",
  },
  button: {
    marginRight: "10px",
    padding: "10px 15px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  note: {
    marginTop: "30px",
    padding: "15px",
    background: "#f1f1f1",
    borderLeft: "4px solid #007bff",
  },
};

export default About;
