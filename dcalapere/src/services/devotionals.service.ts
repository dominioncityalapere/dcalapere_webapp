// Supabase client instance
import { supabase } from "./supabase";

// Type definition for a devotional record
export interface Devotional {
  id: string;
  telegram_id: number;
  text: string;
  created_at: string;
}

// Fetch the most recently added devotional from the database
export async function getLatestDevotional(): Promise<Devotional | null> {
  // Query the latest devotional
  const { data, error } = await supabase
    .from("devotionals")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  // Return null if the request fails
  if (error) {
    console.error("Error fetching devotional:", error);
    return null;
  }

  // Return the latest devotional
  return data;
}
