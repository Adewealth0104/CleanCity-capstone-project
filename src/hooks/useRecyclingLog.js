import { useMemo, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

function useRecyclingLog() {
  const [logs, setLogs] = useLocalStorage("cleancity-recycling-logs", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("category");
  const [sortDirection, setSortDirection] = useState("asc");

  const addEntry = ({ category, quantity }) => {
    setLogs((current) => [
      ...current,
      { id: makeId(), category, quantity: Number(quantity) }
    ]);
  };

  const editEntry = (id, { category, quantity }) => {
    setLogs((current) =>
      current.map((log) =>
        log.id === id
          ? { ...log, category, quantity: Number(quantity) }
          : log
      )
    );
  };

  const deleteEntry = (id) => {
    setLogs((current) => current.filter((log) => log.id !== id));
  };

  const filteredAndSortedLogs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const filtered = logs.filter((log) =>
      log.category.toLowerCase().includes(query)
    );

    return [...filtered].sort((a, b) => {
      const comparison =
        sortBy === "quantity"
          ? a.quantity - b.quantity
          : a.category.localeCompare(b.category);

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [logs, searchTerm, sortBy, sortDirection]);

  const categoryTotals = useMemo(
    () =>
      logs.reduce((totals, log) => {
        totals[log.category] = (totals[log.category] || 0) + log.quantity;
        return totals;
      }, {}),
    [logs]
  );

  const totalRecycled = logs.reduce((sum, log) => sum + Number(log.quantity), 0);

  return {
    logs,
    addEntry,
    editEntry,
    deleteEntry,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    filteredAndSortedLogs,
    categoryTotals,
    totalRecycled
  };
}

export default useRecyclingLog;
