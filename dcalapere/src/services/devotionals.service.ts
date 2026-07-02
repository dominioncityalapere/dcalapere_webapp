import { supabase } from "./supabase";

export interface Devotional {
  id: string;
  telegram_id: number;
  text: string;
  created_at: string;
}

export async function getLatestDevotional(): Promise<Devotional | null> {
  const { data, error } = await supabase
    .from("devotionals")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching devotional:", error);
    return null;
  }

  return data;
}
