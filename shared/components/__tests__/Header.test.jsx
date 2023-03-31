import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Header", async () => {
  render(<Header />);

  expect(await screen.findByText(/title/i)).toBeInTheDocument();
});
