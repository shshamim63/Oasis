import { render, screen } from "@testing-library/react";
import { it, test } from "vitest";

import Login from "./Login";

test("Should show the login page accordingly", () => {
  render(<Login />);
  it("Should show a heading mentioning about logining to the account", () => {
    const heading = screen.getByRole("heading");
    console.log(heading);
  });
});
