import { render, screen } from "@testing-library/react";
import RewardsProgram from "./RewardsProgram";

describe("Rewards Program component", () => {
  test("renders header", () => {
    render(<RewardsProgram />);
    const headerElement = screen.getByText(/Rewards Program/i);
    expect(headerElement).toBeInTheDocument();
  });
});
