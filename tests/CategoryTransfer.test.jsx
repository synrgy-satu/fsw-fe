/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryTransfer from "../src/components/transfer/CategoryTransfer"

describe('CategoryTransfer component', () => {
  test('renders breadcrumb navigation', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CategoryTransfer />
      </MemoryRouter>
    );
    const transferElements = screen.getAllByText("Transfer");
    expect(transferElements).toHaveLength(3);
    expect(getByText('Transaksi')).toBeInTheDocument();
    
  });

  test('renders the transfer section with two categories', () => {
    const { getByText} = render(
      <MemoryRouter>
        <CategoryTransfer />
      </MemoryRouter>
    );

    // Check for the transfer section heading
    const transferElements = screen.getAllByText("Transfer");
    expect(transferElements).toHaveLength(3);

    // Check for the first category card
    const transferCard = screen.getByTestId('button-transfer-satu');
    expect(transferCard).toBeInTheDocument();
    expect(getByText('Lokal atau internasional, realtime atau terjadwal')).toBeInTheDocument();

    // Check for the second category card
    const massTransferCard = screen.getByTestId('button-transfer-mass');
    expect(massTransferCard).toBeInTheDocument();
    expect(getByText('Transfer ke beberapa rekening sekaligus')).toBeInTheDocument();
  });

  test('renders the separator line', () => {
    const { container } = render(
      <MemoryRouter>
        <CategoryTransfer />
      </MemoryRouter>
    );

    // Check for the separator line
    expect(container.querySelector('.border')).toBeInTheDocument();
  });
});
