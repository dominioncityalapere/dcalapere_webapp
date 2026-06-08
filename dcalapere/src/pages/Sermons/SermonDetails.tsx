import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getYoutubeId } from "../../utils/youtube.ts";
import { getSermonById } from "../../services/sermons.service.ts";
import type { SermonsType } from "../../pages/Sermons/SermonsPage.types.ts";
import { VideoWrapper, SermonDetailsContainer } from "../Sermons/SermonsPage.styles.ts"
import { X } from "lucide-react";

const SermonDetails = () => {
  const [sermon, setSermons] = useState<SermonsType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSermon = async () => {
      if (!id) return;

      const data = await getSermonById(id);

      setSermons(data);
    };

    fetchSermon();
  }, [id]);

  if (!sermon) return <p>Loading...</p>;
  const videoId = getYoutubeId(sermon.youtube_url);

  const formatTheme = (text: string) => text.toUpperCase();

  const toTitleCase = (text: string) =>
    text.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
  
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
      <div className="closeButton">
        <X
          size={28}
          onClick={() => navigate(-1)}
        />
        <p>Close</p>
      </div>

      <VideoWrapper>
        <iframe
          width="99.7%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={sermon.title}
          allowFullScreen
        />

        <p className="sermonText">
          <span>THEME:</span> {formatTheme(sermon.theme)}
        </p>

        <p className="sermonText">
          <span>TOPIC:</span> {toTitleCase(sermon.title)}
        </p>

        <p className="sermonText">
          <span>PREACHER:</span> {toTitleCase(sermon.preacher)}
        </p>

        <p className="sermonText">
          <span>DATE:</span> {formatDate(sermon.date)}
        </p>
      </VideoWrapper>
    </SermonDetailsContainer>
  );
};

export default SermonDetails;
