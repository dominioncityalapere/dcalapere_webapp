import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabase";
import {
  AddSermonContainer,
  Header,
  WhiteColor,
  A,
} from "./AdminAddSermon.styles";
import { useNavigate } from "react-router-dom";
import dc_logo_white from "../../../assets/icons/dc_logo_white.png";
import { createSermon } from "../../../services/sermons.service";

const AdminAddSermon = () => {
  // Form state
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [theme, setTheme] = useState("");
  const [youtube_url, setYoutubeUrl] = useState("");
  const [date, setDate] = useState("");
  
  const navigate = useNavigate();

  // Global alert state for success, warning, and error messages
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

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

  // Sign out the current admin and redirect to the sermon access page
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/dcalapere-access-26-add-sermon";
  };

  // Validate that the provided URL is a valid YouTube video link
  const isValidYouTubeUrl = (url: string) => {
    const regex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}.*$/;

    return regex.test(url);
  };

  // Save sermon details to the database after validating the YouTube URL
  const handleSermonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure only valid YouTube links are accepted
    if (!isValidYouTubeUrl(youtube_url)) {
      setAlert({
        type: "error",
        message: "Please enter a valid YouTube URL.",
      });
      return;
    }

    // Create a new sermon record in the database
    const { error } = await createSermon({
      theme,
      title,
      preacher,
      date,
      youtube_url: youtube_url,
    });

    if (error) {
      console.log(error);
      setAlert({
        type: "error",
        message: "Failed to upload Sermon",
      });
      return;
    }

    setAlert({
      type: "success",
      message: "Sermon uploaded successfully",
    });

    // Clear the form after a successful upload
    setTitle("");
    setPreacher("");
    setTheme("");
    setYoutubeUrl("");
    setDate("");
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

  // Automatically dismiss alerts after 3 seconds
  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <AddSermonContainer style={{ padding: "0 2rem" }}>
      <Header style={{ padding: "2rem 0" }}>
        <div className="adminHeader">
          <img src={dc_logo_white} alt="DC White Logo" />
          <p>DC Alapere</p>
        </div>
        <div>
          <A to="/dcalapere-access-26" style={{ paddingRight: "1rem" }}>
            <button>Back</button>
          </A>
          <button onClick={logout}>Log out</button>
        </div>
      </Header>

      <h1
        style={{
          paddingTop: "0.5rem",
          fontWeight: 800,
          borderBottom: `0.2rem solid ${WhiteColor}`,
          lineHeight: 1.3,
        }}
      >
        Add Sermon
      </h1>

      {/* Sermon upload form */}
      <form onSubmit={handleSermonSubmit} className="formContainer">
        {/* Display success, warning, or error messages */}
        <>
          {alert && (
            <div className={`alert ${alert.type}`}>
              <button onClick={() => setAlert(null)}>X</button>

              <span>{alert.message}</span>
            </div>
          )}
        </>

        {/* Sermon title */}
        <input
          className="full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Sermon theme */}
        <input
          placeholder="Theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />

        {/* Preacher's name */}
        <input
          placeholder="Preacher"
          value={preacher}
          onChange={(e) => setPreacher(e.target.value)}
          required
        />

        {/* YouTube video URL */}
        <input
          placeholder="YouTube URL"
          value={youtube_url}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          required
        />

        {/* Sermon date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Upload Sermon</button>
      </form>

      {/* Reminder for administrators before publishing */}
      <div className="note">
        <p>Note:</p>
        <p>
          Changes made here are immediately visible on the website. Please
          review all information carefully before publishing.
        </p>
      </div>
    </AddSermonContainer>
  );
};

export default AdminAddSermon;
