// Extracts the YouTube video ID from a YouTube URL.
// Supports both youtu.be and youtube.com/watch?v= links.
// Returns null if the URL is empty or doesn't contain a valid video ID.
export const getYoutubeId = (url: string) => {
  if (!url) return null;

  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);

  return match ? match[1] : null;
};
