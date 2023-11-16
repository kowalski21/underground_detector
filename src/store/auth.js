import { entity, useEntity } from "simpler-state";

export const authEntity = entity(null);

export const useAuthStore = () => {
  const authUser = useEntity(authEntity);

  const setAuthUser = (val) => {
    console.log(val);
    authEntity.set(val);
  };

  return {
    authUser,
    setAuthUser,
  };
};
