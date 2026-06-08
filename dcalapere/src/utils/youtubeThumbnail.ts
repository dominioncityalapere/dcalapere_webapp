import { getYoutubeId } from "./youtube";

export const getYoutubeThumbnail = (url: string) => {
  const id = getYoutubeId(url);

  if (!id) return "";

  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};
