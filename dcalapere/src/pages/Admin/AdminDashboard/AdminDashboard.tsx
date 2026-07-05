import { useEffect } from "react";
import { supabase } from "../../../services/supabase";
import { AdminContainer, Header, WhiteColor, A } from "./AdminDashboard";
import { useNavigate } from "react-router-dom";
import dc_logo_white from "../../../assets/icons/dc_logo_white.png";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Redirect unauthenticated users to the admin login page
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/dcalapere-login-26");
      }
    };

    checkUser();
  }, []);

  // Sign out the current admin and return to the dashboard entry page
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/dcalapere-access-26";
  };

  // Automatically logs out admin after 5 minutes of inactivity or when user leaves the tab
  useEffect(() => {
    let timeout: number;

    const logoutUser = async () => {
      await supabase.auth.signOut();

      navigate("/dcalapere-login-26");
    };

    // Reset the inactivity timer whenever the admin interacts with the page
    const resetTimer = () => {
      clearTimeout(timeout);

      timeout = window.setTimeout(
        () => {
          logoutUser();
        },
        5 * 60 * 1000,
      );
    };

    // const handleVisibilityChange = () => {
    //   if (document.hidden) {
    //     logoutUser();
    //   }
    // };

    // Listen for user activity that should keep the session active
    const events = ["mousemove", "keydown", "click", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    // document.addEventListener("visibilitychange", handleVisibilityChange);

    resetTimer();

    return () => {
      clearTimeout(timeout);

      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });

      // document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <AdminContainer style={{ padding: "0 2rem" }}>
      {/* Administrator dashboard header */}
      <Header style={{ padding: "2rem 0" }}>
        <div className="adminHeader">
          <img src={dc_logo_white} alt="DC White Logo" />
          <p>DC Alapere</p>
        </div>
        <div>
          <button onClick={logout}>Log out</button>
        </div>
      </Header>

      {/* Dashboard title */}
      <h1
        style={{
          paddingTop: "0.5rem",
          fontWeight: 800,
          borderBottom: `0.2rem solid ${WhiteColor}`,
          lineHeight: 1.3,
        }}
      >
        Admin Dashboard
      </h1>

      {/* Administrative guidelines for managing website content */}
      <div>
        <p>Admin Guidelines</p>
        <ul>
          <li>Keep event and sermon information accurate and up to date.</li>
          <li>Use clear, descriptive titles for events and sermons.</li>
          <li>
            Upload high-quality but compressed images that represent the event.
          </li>
          <li>Verify all dates, times, and locations before publishing. </li>
          <li>
            Ensure YouTube links are valid and publicly accessible or unlisted.
          </li>
          <li>Keep Event descriptions concise and informative.</li>
          <li>Avoid creating duplicate events or sermons.</li>
          <li>Review all information before uploading changes.</li>
          <li>Sign out after completing administrative tasks.</li>
          <li>Changes made here are reflected on the public website.</li>
        </ul>
      </div>

      {/* Content management shortcuts */}
      <div className="uploadContainer">
        {/* Navigate to the sermon upload page */}
        <A to="/dcalapere-access-26-add-sermon" className="upload">
          Upload Sermon
        </A>

        {/* Navigate to the event upload page */}
        <A to="/dcalapere-access-26-add-event" className="upload">
          Upload Event
        </A>
      </div>

      {/* Reminder to review content before publishing */}
      <div>
        <p>Note:</p>
        <p>
          Changes made here are immediately visible on the website. Please
          review all information carefully before publishing.
        </p>
      </div>
    </AdminContainer>
  );
};

export default AdminDashboard;
