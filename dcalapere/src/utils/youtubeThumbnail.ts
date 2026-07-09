import { getYoutubeId } from "./youtube";

// Generates the thumbnail URL for a YouTube video.
// Returns an empty string if the URL doesn't contain a valid video ID.
export const getYoutubeThumbnail = (url: string) => {
  const id = getYoutubeId(url);

  if (!id) return "";

  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};
