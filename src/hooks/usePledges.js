import { useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

function usePledges() {
  const [pledges, setPledges] = useLocalStorage("cleancity-pledges", []);

  const addPledge = (text) => {
    const pledge = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      text,
      createdAt: new Date().toISOString()
    };
    setPledges((current) => [pledge, ...current]);
  };

  const pledgeCount = useMemo(() => pledges.length, [pledges]);

  return { pledges, addPledge, pledgeCount };
}

export default usePledges;
