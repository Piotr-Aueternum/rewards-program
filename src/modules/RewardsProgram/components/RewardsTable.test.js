import { render, screen } from "@testing-library/react";
import RewardsTable from "./RewardsTable";

describe("Rewards Table component", () => {
  test("renders given columns", () => {
    render(
      <RewardsTable
        columns={[
          {
            title: "User",
            dataIndex: "user",
            key: "user",
          },
        ]}
        rows={[]}
      />,
    );
    const user = screen.getByText(/User/i);
    expect(user).toBeInTheDocument();
  });
  test("renders given rows", () => {
    render(
      <RewardsTable
        columns={[
          {
            title: "User",
            dataIndex: "user",
            key: "user",
          },
        ]}
        rows={[
          {
            key: "1",
            user: "Don",
          },
        ]}
      />,
    );
    const user = screen.getByText(/Don/i);
    expect(user).toBeInTheDocument();
  });
  test("renders only matching columns", () => {
    render(
      <RewardsTable
        columns={[
          {
            title: "User",
            dataIndex: "user",
            key: "user",
          },
        ]}
        rows={[
          {
            key: "1",
            user: "Don",
            unknownValue: "Missing column",
          },
        ]}
      />,
    );
    const missing = screen.queryByText(/Missing column/i);
    expect(missing).not.toBeInTheDocument();
  });
  test("renders more given rows and columns", () => {
    render(
      <RewardsTable
        columns={[
          {
            title: "User",
            dataIndex: "user",
            key: "user",
          },
          {
            title: "Total",
            dataIndex: "total",
            key: "total",
          },
        ]}
        rows={[
          {
            key: "1",
            user: "Don",
            total: 20,
          },
          {
            key: "2",
            user: "Gon",
            total: 30,
          },
        ]}
      />,
    );
    const user = screen.getByText(/Don/i);
    expect(user).toBeInTheDocument();
  });
});
