import { supabase } from "../lib/supabase";

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

export const getSermonById = async (id: string) => {
  const { data, error } = await supabase
    .from("sermons")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};