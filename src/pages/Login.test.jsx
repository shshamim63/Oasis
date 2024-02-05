import { render, screen } from "@testing-library/react";
import { beforeAll, describe, it, test } from "vitest";

import { DarkModeProvider } from "../context/DarkModeContext";
import Login from "./Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("", () => {
  beforeAll(() => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <Login />
        </DarkModeProvider>
      </QueryClientProvider>
    );
  });
  test("Should show the login page accordingly", () => {
    it("Should show a heading mentioning about logining to the account", () => {
      const heading = screen.getByRole("heading");
      console.log(heading);
    });
  });
});
