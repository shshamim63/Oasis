import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { beforeAll, describe, expect, test } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("LoginForm", () => {
  beforeAll(() => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
  });

  test("Should contain email and password field", () => {
    const emailInput = screen.getByRole("textbox", { name: /email address/i });
    const passwordInput = screen.getByRole("textbox", { name: /password/i });
    expect(emailInput).toHaveLength(1);
    expect(passwordInput).toHaveLength(1);
  });
});
