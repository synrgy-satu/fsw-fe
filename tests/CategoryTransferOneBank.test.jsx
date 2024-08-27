/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryTransferOneBank from "../src/components/transfer/CategoryTransferOneBank";

describe("CategoryTransferOneBank component", () => {
  test("renders breadcrumb navigation", () => {
    const { getByText } = render(
      <MemoryRouter>
        <CategoryTransferOneBank />
      </MemoryRouter>
    );
    const transferElements = screen.getAllByText("Transfer");
    expect(transferElements).toHaveLength(3);
    expect(getByText("Transaksi")).toBeInTheDocument();
  });

  test("renders the Link transfer to rekening SATU", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <CategoryTransferOneBank />
      </MemoryRouter>
    );

    // Check for the Link With Name
    const linkElement = getByRole("link", {
      name: /Transfer ke rekening SATU/i,
    });
    expect(linkElement).toHaveAttribute("href", "/satu");
  });

});
