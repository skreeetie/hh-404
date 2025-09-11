import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useAreas = () => {
  const { area } = useParams();
  const [areasQuery, setAreasQuery] = useState<string>("");
  useEffect(() => {
    switch (area) {
      case "moscow":
        setAreasQuery("&area=1");
        break;
      case "petersburg":
        setAreasQuery("&area=2");
        break;
      default:
        setAreasQuery("");
        break;
    }
  }, [area]);

  return { areasQuery };
};
