import { useState, useEffect, useRef } from "react";
import { supabase } from "../../services/supabase";
import { AdminContainer, Header, WhiteColor } from "../Admin/AdminDashboard";
import { useNavigate } from "react-router-dom";
import dc_logo_white from "../../assets/icons/dc_logo_white.png";
import { createSermon } from "../../services/sermons.service";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [theme, setTheme] = useState("");
  const [youtube_url, setYoutubeUrl] = useState("");
  const [date, setDate] = useState("");

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventThumbnail, setEventThumbnail] = useState<File | null>(null);
  const [eventDescription, setEventDescription] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

    const { error } = await createSermon({
      theme,
      title,
      preacher,
      date,
      youtube_url: youtube_url,
    });

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
    setDate("");
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!eventThumbnail) return;

    const MAX_FILE_SIZE = 2 * 1024 * 1024;

    if (eventThumbnail.size > MAX_FILE_SIZE) {
      alert("File must be less than 2MB");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(eventThumbnail.type)) {
      alert("Only JPG, PNG, and WEBP allowed");
      return;
    }

    const fileExt = eventThumbnail.name.split(".").pop();

    const fileName = `${Date.now()}-${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("events")
      .upload(fileName, eventThumbnail);

    if (uploadError) {
      console.error(uploadError);
      return;
    }

    const { data } = supabase.storage.from("events").getPublicUrl(fileName);

    const imageUrl = data.publicUrl;

    const { error } = await supabase.from("events").insert([
      {
        title: eventTitle,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        thumbnail: imageUrl,
        description: eventDescription,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Failed to uplaod event");
      return;
    }

    alert("Event upload successfully");

    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");

    if (eventTitle.trim().length > 30) {
      alert("Title cannot exceed 30 characters");
      return;
    }
  };

  // Automatically logs out admin after 5 minutes of inactivity or when user leaves the tab
  useEffect(() => {
    let timeout: number;

    const logoutUser = async () => {
      await supabase.auth.signOut();

      navigate("/dcalapere-login-26");
    };

    const resetTimer = () => {
      clearTimeout(timeout);

      timeout = window.setTimeout(
        () => {
          logoutUser();
        },
        5 * 60 * 1000,
      );
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        logoutUser();
      }
    };

    const events = ["mousemove", "keydown", "click", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);

    resetTimer();

    return () => {
      clearTimeout(timeout);

      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
          placeholder="Theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />

        <input
          placeholder="Preacher"
          value={preacher}
          onChange={(e) => setPreacher(e.target.value)}
          required
        />

        <input
          placeholder="YouTube URL"
          value={youtube_url}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          required
        />

        <input
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Upload Sermon</button>
      </form>

      <div className="border"></div>

      {/* ADD EVENT */}

      <h2 style={{ paddingTop: "2rem" }}>Add Event</h2>
      <form onSubmit={handleEventSubmit}>
        <div className="full">
          <input
            className="eventTitle"
            placeholder="Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            maxLength={30}
            required
          />

          <p>{eventTitle.length}/30</p>
        </div>

        <input
          placeholder="Date (eg. 21 March 2026)"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        <input
          placeholder="Time (eg. 11:00 or 23:00)"
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
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setEventThumbnail(e.target.files[0]);
            }
          }}
          required
        />

        <textarea
          className="full"
          placeholder="Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          maxLength={150}
          rows={3}
          required
        />

        <button type="submit">Upload Event</button>
      </form>
    </AdminContainer>
  );
};

export default AdminDashboard;
