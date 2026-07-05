import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabase";
import { useNavigate } from "react-router-dom";
import dc_logo_white from "../../../assets/icons/dc_logo_white.png";
import { LoginContainer, LoginHeader } from "./AdminLogin";

const AdminLogin = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Global alert state for success, warning, and error messages
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  // Authenticate the admin using Supabase Authentication
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAlert({
        type: "error",
        message: error.message,
      });
      return;
    }

    // Redirect authenticated admins to the admin dashboard
    navigate("/dcalapere-access-26");
  };

  // Automatically dismiss alerts after 3 seconds
  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <LoginContainer style={{ padding: "0 2rem" }}>
      <LoginHeader style={{ padding: "2rem 0" }}>
        <div className="adminHeader">
          <img src={dc_logo_white} alt="DC White Logo" />
          <p>DC Alapere</p>
        </div>
      </LoginHeader>

      {/* Administrator login */}
      <h1>Admin Login</h1>

      {/* Administrator login form */}
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "300px",
        }}
      >
        {/* Display success, warning, or error messages */}
        <>
          {alert && (
            <div className={`alert ${alert.type}`}>
              <span>{alert.message}</span>

              <button onClick={() => setAlert(null)}>X</button>
            </div>
          )}
        </>

        {/* Admin email address */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Admin password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit login credentials */}
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};

export default AdminLogin;
