import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "../hooks/useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => localStorage.clear());

  test("persists a value and reads it back", () => {
    const first = renderHook(() => useLocalStorage("demo", "start"));

    act(() => {
      first.result.current[1]("saved value");
    });

    expect(localStorage.getItem("demo")).toBe(JSON.stringify("saved value"));

    first.unmount();

    const second = renderHook(() => useLocalStorage("demo", "fallback"));
    expect(second.result.current[0]).toBe("saved value");
  });
});
