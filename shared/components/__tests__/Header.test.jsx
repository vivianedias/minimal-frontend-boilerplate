import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Header", async () => {
  render(<Header />);

  expect(screen.getByRole("heading", { name: /title/i })).toBeInTheDocument();
});
