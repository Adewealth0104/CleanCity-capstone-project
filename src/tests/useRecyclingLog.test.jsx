import { renderHook, act } from "@testing-library/react";
import useRecyclingLog from "../hooks/useRecyclingLog";

describe("useRecyclingLog search and sort", () => {
  beforeEach(() => localStorage.clear());

  test("filters by category and sorts quantities", () => {
    const hook = renderHook(() => useRecyclingLog());

    act(() => {
      hook.result.current.addEntry({ category: "Plastic", quantity: 10 });
      hook.result.current.addEntry({ category: "Paper", quantity: 5 });
      hook.result.current.addEntry({ category: "Plastic", quantity: 3 });
    });

    act(() => {
      hook.result.current.setSearchTerm("plastic");
      hook.result.current.setSortBy("quantity");
      hook.result.current.setSortDirection("asc");
    });

    expect(hook.result.current.filteredAndSortedLogs.map((log) => log.quantity))
      .toEqual([3, 10]);
  });
});
