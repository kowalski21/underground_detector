import { supabase } from "@/lib/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { error, data } = await supabase.from("event").select().order("created_at", { ascending: false });
    // console.log(data);
    // Handle GET request
    console.log("Handling GET request");
    let result = data ? data : [];
    res.status(200).json(result);
  } else if (req.method === "POST") {
    let payload = req.body;
    let valid = payload ? true : false;
    // console.log(payload);
    if (valid) {
      try {
        await supabase.from("event").insert(payload);
        return res.status(400).json({ message: "Success" });
      } catch (error) {
        console.log("error occurred");
        return res.status(400).json({ message: "No payload found" });
      }
    }
    // Handle POST request
    console.log("Handling POST request");
    // You can access the request body using req.body
    // For example, if you're using JSON in the request body:
    // const data = req.body;
    // Process the data as needed
    return res.status(400).json({ message: "No payload found" });
  } else {
    // Handle other HTTP methods
    res.status(405).end(); // Method Not Allowed
  }
}
