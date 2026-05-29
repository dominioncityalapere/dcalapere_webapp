import { supabase } from "../lib/supabase";

export const getEvents = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(7);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};


export const getEventsSection = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};
