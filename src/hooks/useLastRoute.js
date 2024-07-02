import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context";
import { useLocation } from "react-router-dom";

export const useLastRoute = () => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = `${pathname}${search}`;

  useEffect(() => {
    const storedLastPath = localStorage.getItem("lastPath");

    if (storedLastPath !== lastPath) {
      localStorage.setItem("lastPath", lastPath);
    }

  }, [lastPath]);

  return {
    logged,
  };
};
