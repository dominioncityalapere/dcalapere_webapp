import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { AdminContainer, Header } from "../admin/AdminDashboard";
import { useNavigate } from "react-router-dom";
import dc_logo_white from "../assets/dc_logo_white.png";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [theme, setTheme] = useState("");
  const [youtube_url, setYoutubeUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventThumbnail, setEventThumbnail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/dcalapere-login-26");
      }
    };

    checkUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/dcalapere-access-26";
  };

  const handleSermonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("sermons").insert([
      {
        title,
        preacher,
        theme,
        youtube_url,
        thumbnail,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Failed");
      return;
    }

    alert("Sermon added");

    setTitle("");
    setPreacher("");
    setTheme("");
    setYoutubeUrl("");
    setThumbnail("");
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("events").insert([
      {
        title: eventTitle,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        thumbnail: eventThumbnail,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Failed to add event");
      return;
    }

    alert("Event added");

    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventThumbnail("");
  };

  return (
    <AdminContainer style={{ padding: "2rem" }}>
      <Header>
        <div className="adminHeader">
          <img src={dc_logo_white} alt="DC White Logo" />
          <p>DC Alapere</p>
        </div>
        <div>
          <button onClick={logout}>Log out</button>
        </div>
      </Header>

      <h1 style={{ paddingTop: "0.5rem" }}>Admin Dashboard</h1>

      <h2 style={{ paddingTop: "2rem" }}>Add Sermon</h2>

      <form onSubmit={handleSermonSubmit}>
        <input
          className="full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          placeholder="Preacher"
          value={preacher}
          onChange={(e) => setPreacher(e.target.value)}
          required
        />

        <input
          placeholder="Theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />

        <input
          placeholder="YouTube URL"
          value={youtube_url}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          required
        />

        <input
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />

        <button type="submit">Save Sermon</button>
      </form>

      {/* ADD EVENT */}

      <h2 style={{ paddingTop: "2rem" }}>Add Event</h2>
      <form onSubmit={handleEventSubmit}>
        <input
          className="full"
          placeholder="Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          required
        />

        <input
          placeholder="Date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        <input
          placeholder="Time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
        />

        <input
          placeholder="Location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />

        <input
          placeholder="Thumbnail URL"
          value={eventThumbnail}
          onChange={(e) => setEventThumbnail(e.target.value)}
          required
        />

        <button type="submit">Save Event</button>
      </form>
    </AdminContainer>
  );
};

export default AdminDashboard;
