import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../services/supabase";
import {
  AddEventContainer,
  Header,
  WhiteColor,
  A,
} from "./AdminAddEvent.styles";
import { useNavigate } from "react-router-dom";
import dc_logo_white from "../../../assets/icons/dc_logo_white.png";

const AdminAddEvent = () => {
  // Form state
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventThumbnail, setEventThumbnail] = useState<File | null>(null);
  const [eventDescription, setEventDescription] = useState("");

  const navigate = useNavigate();

  //   Global alert state for success, warning, and error messages
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  // Reference used to reset the file input after a successful upload
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  // Sign out the current admin and redirect to the event access page
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/dcalapere-access-26-add-event";
  };

  // Upload event image to Supabase Storage and save event details to the database
  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!eventThumbnail) return;

    // Prevent uploads larger than 2 MB
    const MAX_FILE_SIZE = 2 * 1024 * 1024;

    if (eventThumbnail.size > MAX_FILE_SIZE) {
      setAlert({
        type: "warning",
        message: "File must be less than 2MB.",
      });
      return;
    }

    // Allow only supported image formats
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(eventThumbnail.type)) {
      setAlert({
        type: "warning",
        message: "Only JPG, PNG, and WEBP allowed",
      });
      return;
    }

    const fileExt = eventThumbnail.name.split(".").pop();

    // Generate a unique filename to prevent collisions
    const fileName = `${Date.now()}-${fileExt}`;

    // Upload the selected image to the "events" storage bucket
    const { error: uploadError } = await supabase.storage
      .from("events")
      .upload(fileName, eventThumbnail);

    if (uploadError) {
      console.error(uploadError);
      return;
    }

    // Retrieve the public URL for the uploaded image
    const { data } = supabase.storage.from("events").getPublicUrl(fileName);

    const imageUrl = data.publicUrl;

    // Clear the selected file after a successful upload
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Save the event information to the database
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
      setAlert({
        type: "error",
        message: "Failed to upload event",
      });
      return;
    }

    setAlert({
      type: "success",
      message: "Event uploaded successfully",
    });

    // Clear the form after a successful upload
    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");
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
    <AddEventContainer style={{ padding: "0 2rem" }}>
      <Header style={{ padding: "2rem 0" }}>
        <div className="adminHeader">
          <img src={dc_logo_white} alt="DC White Logo" />
          <p>DC Alapere</p>
        </div>
        <div>
          <A to="/dcalapere-access-26" style={{ paddingRight: "0.5rem" }}>
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
        Add Event
      </h1>

      {/* Event upload form */}

      <form onSubmit={handleEventSubmit} className="formContainer">
        {/* Display success, warning, or error messages */}
        <>
          {alert && (
            <div className={`alert ${alert.type}`}>
              <button onClick={() => setAlert(null)}>X</button>

              <span>{alert.message}</span>
            </div>
          )}
        </>

        {/* Event title with live character counter */}
        <div className="full">
          <input
            className="eventforms"
            placeholder="Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            maxLength={30}
            required
          />

          <p className="charCount">{eventTitle.length}/30</p>
        </div>

        {/* Event date */}
        <input
          className="eventforms"
          type="date"
          placeholder="Date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        {/* Event time */}
        <input
          className="eventforms"
          type="time"
          placeholder="Time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
        />

        {/* Event location */}
        <input
          placeholder="Location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />

        {/* Event thumbnail image */}
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

        {/* Event description */}
        <div className="full">
          <textarea
            className="eventforms"
            placeholder="Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            maxLength={150}
            rows={3}
            required
          />

          <p className="charCount">{eventDescription.length}/150</p>
        </div>

        <button type="submit">Upload Event</button>
      </form>

      {/* Reminder for administrators before publishing */}
      <div className="note">
        <p>Note:</p>
        <p>
          Changes made here are immediately visible on the website. Please
          review all information carefully before publishing.
        </p>
      </div>
    </AddEventContainer>
  );
};

export default AdminAddEvent;
