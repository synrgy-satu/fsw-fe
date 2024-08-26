import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import LoginForm from "../src/components/authentication/login/LoginForm";

jest.mock("../src/context/AuthContext");

describe("LoginForm", () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetIsResetPassword = jest.fn();

  beforeEach(() => {
    useAuth.mockReturnValue({
      login: mockLogin,
      error: null,
      isResetPassword: false,
      setIsResetPassword: mockSetIsResetPassword,
      authState: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

  test("renders login form with email and password inputs", () => {
    renderComponent();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/kata sandi/i)).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    renderComponent();

    fireEvent.click(screen.getByRole("button", { name: /masuk/i }));

    await waitFor(() => {
      expect(screen.getByText(/email wajib diisi/i)).toBeInTheDocument();
      expect(screen.getByText(/password wajib diisi/i)).toBeInTheDocument();
    });
  });

  test("submits form with valid data", async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/kata sandi/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /masuk/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@example.com", "password123");
    });
  });

  test("toggles password visibility when clicking show/hide button", () => {
    renderComponent();

    const passwordInput = screen.getByLabelText(/kata sandi/i);
    const toggleButton = screen.getByLabelText(/show password/i);

    // Initial state should be password type
    expect(passwordInput.type).toBe("password");

    // Click to show password
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("text");

    // Click to hide password
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("password");
  });

  test('displays forgot password form when clicking "Lupa Kata Sandi?"', () => {
    renderComponent();

    fireEvent.click(screen.getByText(/lupa kata sandi\?/i));

    expect(mockSetIsResetPassword).toHaveBeenCalledWith(true);
  });
});
