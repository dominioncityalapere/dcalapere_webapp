// Supabase client instance
import { supabase } from "./supabase";

// Fetch the latest events for the Events page
export const getEvents = async () => {
  // Query the latest 7 events
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(7);

  // Return an empty array if the request fails
  if (error) {
    console.error(error);
    return [];
  }

  // Return the fetched events
  return data;
};

// Fetch the latest events for the homepage Events section
export const getEventsSection = async () => {
  // Query the latest 4 events
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  // Return an empty array if the request fails
  if (error) {
    console.error(error);
    return [];
  }

  // Return the fetched events
  return data;
};
