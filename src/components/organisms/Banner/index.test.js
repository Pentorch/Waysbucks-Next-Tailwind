import { render, screen } from "@testing-library/react";
import Banner from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Group Waysbucks", () => {
  test("Test Waysbucks", () => {
    render(<Banner />);
    const text = screen.getByText("WAYSBUCKS");
    expect(text).toBeInTheDocument();
  });
  test("Test Continue Waysbucks", () => {
    render(<Banner />);
    const text = screen.getByText(
      "Things are changing, but we’re still here for you"
    );
    expect(text).toBeInTheDocument();
  });
  test("Test Continue Waysbucks", () => {
    render(<Banner />);
    const text = screen.getByText(
      "We have temporarily closed our in-store cafes, but select"
    );
    expect(text).toBeInTheDocument();
  });
  it("Test Image", () => {
    render(<Banner />);
    const image = screen.getByAltText("Jumbotron");
    expect(image).toBeInTheDocument();
  });
});
