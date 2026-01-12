import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen p-6 font-poppins bg-gray-50">
      {/* Title */}
      <h1 className="text-danger text-3xl font-bold mb-5">
        ℹ️ About – Routing Master
      </h1>

      {/* Description */}
      <p className="mb-5 text-base text-gray-700 leading-tight2">
        This project is created to help beginners understand how
        <b> React Router</b> works in a real-world React application.
      </p>

      {/* Router Info */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">📌 Current Route Info</h2>
        <p className="text-gray-600">
          <b>Pathname:</b> {location.pathname}
        </p>
      </section>

      {/* Concepts Covered */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          📚 Routing Concepts Covered
        </h2>

        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>BrowserRouter</li>
          <li>Routes & Route</li>
          <li>Link & NavLink</li>
          <li>useNavigate()</li>
          <li>useParams()</li>
          <li>Nested Routes</li>
          <li>Protected Routes</li>
          <li>404 Page Handling</li>
        </ul>
      </section>

      {/* Navigation Buttons */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-3">🧭 Navigation Actions</h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-white px-4 py-2 rounded-md shadow-soft hover:opacity-85 transition duration-400"
          >
            ⬅ Go Back Home
          </button>

          <button
            onClick={() => navigate("/user")}
            className="bg-secondary text-white px-4 py-2 rounded-md shadow-soft hover:opacity-85 transition duration-400"
          >
            View Users
          </button>
        </div>
      </section>

      {/* Learning Note */}
      <section className="mt-8 p-4 bg-gray-100 border-l-4 border-primary rounded-md">
        <p className="text-gray-700">
          💡 Tip: Notice how navigation happens without page reload. This is
          client-side routing.
        </p>
      </section>
    </div>
  );
};

export default About;
