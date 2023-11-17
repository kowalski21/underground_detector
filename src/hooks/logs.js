import { directus, fetchQuery, supabase } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

export const useLatestLogs = () => {
  return useQuery({
    queryKey: ["latest-logs"],
    // queryFn: () => fetchQuery(`/event/latest`),
    queryFn: async () => {
      try {
        const response = await directus.items("event").readByQuery({ limit: 1, sort: "-created_at" });
        return response.data[0];
      } catch (error) {
        return {};
      }
      // const { error, data } = await supabase
      //   .from("event")
      //   .select()
      //   .order("created_at", { ascending: false })
      //   .limit(1)
      //   .single();

      // return data;
    },
    refetchInterval: 1000,
  });
};

export const useLogs = (queryKey, param = {}, options = {}) => {
  return useQuery({
    queryKey: ["Logs", queryKey],
    queryFn: async () => {
      // const { error, data } = await supabase.from("event").select().order("created_at", { ascending: false }).limit(10);

      try {
        const response = await directus.items("event").readByQuery({ limit: 5, sort: "-created_at" });
        // console.log(response);
        return response.data;
      } catch (error) {
        return [];
      }
      // return data;
    },
    refetchInterval: 1000,
  });
};
