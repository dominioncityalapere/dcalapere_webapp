import { supabase } from "./supabase";

// Creates a new sermon record in the database.
export const createSermon = async (sermon: {
  theme: string;
  title: string;
  date: string;
  preacher: string;
  youtube_url?: string;
}) => {
  const { data, error } = await supabase.from("sermons").insert([sermon]);

  return { data, error };
};

// Retrieves the latest four sermons for the homepage section.
export const getSermonsSection = async () => {
  const { data, error } = await supabase
    .from("sermons")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.log(error);
    return [];
  }

  return data;
};

// Retrieves all sermons ordered from newest to oldest.
export const getSermonsPage = async () => {
  const { data, error } = await supabase
    .from("sermons")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.log(error);
    return [];
  }

  return data;
};

// Retrieves a single sermon by its unique ID.
export const getSermonById = async (id: string) => {
  const { data, error } = await supabase
    .from("sermons")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};
