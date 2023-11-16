import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth";
import { getAuthUser } from "@/lib/auth";
import { useRouter } from "next/router";
export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setAuthUser } = useAuthStore();

  useEffect(() => {
    const asyncFunc = async () => {
      setLoading(true);
      const [data, error] = await getAuthUser();
      setLoading(false);
      if (error) {
        setUser(null);
        setAuthUser(null);
        router.push("/login");
      } else {
        setUser(data);
        setAuthUser(data);
      }
    };

    asyncFunc();
  }, []);

  return { user, isLoading: loading };
};
