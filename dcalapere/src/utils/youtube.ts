export const getYoutubeId = (url: string) => {
  if (!url) return null;
  
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);

  return match ? match[1] : null;
};
