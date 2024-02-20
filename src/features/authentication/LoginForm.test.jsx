import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { beforeAll, describe, expect, test } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  beforeAll(() => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </QueryClientProvider>
    );
  });

  test("Should contain email, password and a button", () => {
    const emailInput = screen.getByRole("textbox", { name: /email address/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button");
    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(loginButton).toBeVisible();
  });

  test("Email should have values", () => {
    const emailInput = screen.getByRole("textbox", { name: /email address/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button");
    userEvent.click(emailInput);
    userEvent.keyboard("hello@gmail.com");
    userEvent.click(passwordInput);
    userEvent.keyboard("123456789");
    userEvent.click(loginButton);
    
  });
});
