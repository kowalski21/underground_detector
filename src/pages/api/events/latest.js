import { supabase } from "@/lib/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { error, data } = await supabase
      .from("event")
      .select()
      .order("created_at", { ascending: false })
      .limit(1)
      .single();
    // Handle GET request
    console.log("Handling GET request");
    return res.status(200).json(data);
  }
}
