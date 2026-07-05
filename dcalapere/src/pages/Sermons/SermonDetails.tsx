import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getYoutubeId } from "../../utils/youtube.ts";
import { getSermonById } from "../../services/sermons.service.ts";
import type { SermonsType } from "../../pages/Sermons/SermonsPage.types.ts";
import { VideoWrapper, SermonDetailsContainer } from "../Sermons/SermonsPage.styles.ts"
import { X } from "lucide-react";

const SermonDetails = () => {
  // Selected sermon details
  const [sermon, setSermons] = useState<SermonsType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the selected sermon when the page loads or the route changes
  useEffect(() => {
    const fetchSermon = async () => {
      if (!id) return;

      const data = await getSermonById(id);

      setSermons(data);
    };

    fetchSermon();
  }, [id]);

  // Display a loading message while the sermon is being fetched
  if (!sermon) return <p>Loading...</p>;

  // Extract the YouTube video ID from the sermon URL
  const videoId = getYoutubeId(sermon.youtube_url);

  // Convert the sermon theme to uppercase for consistent display
  const formatTheme = (text: string) => text.toUpperCase();

  // Convert text to title case for titles and preacher names
  const toTitleCase = (text: string) =>
    text.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );

  // Format the sermon date into a readable format
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <SermonDetailsContainer>
      {/* Return to the previous page */}
      <div className="closeButton" onClick={() => navigate(-1)}>
        <X size={28} />
        <p>Close</p>
      </div>

      <VideoWrapper>
        {/* Embedded YouTube sermon player */}
        <iframe
          width="99.7%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={sermon.title}
          allowFullScreen
        />

        {/* Sermon information */}
        <p className="sermonText">
          <span>THEME:</span> {formatTheme(sermon.theme)}
        </p>

        {/* Sermon topic */}
        <p className="sermonText">
          <span>TOPIC:</span> {toTitleCase(sermon.title)}
        </p>

        {/* Preacher's name */}
        <p className="sermonText">
          <span>PREACHER:</span> {toTitleCase(sermon.preacher)}
        </p>

        {/* Sermon date */}
        <p className="sermonText">
          <span>DATE:</span> {formatDate(sermon.date)}
        </p>
      </VideoWrapper>
    </SermonDetailsContainer>
  );
};

export default SermonDetails;
