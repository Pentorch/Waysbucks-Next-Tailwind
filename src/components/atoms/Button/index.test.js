import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";

describe("Button", () => {
  const props = {
    "data-testid": "button",
    children: "Sample Button Text",
  };

  test("button and label text should be rendered", () => {
    const { getByText, getByTestId } = render(<Button {...props} />);
    const buttonDom = getByTestId("button");
    const children = getByText(props.children);

    expect(buttonDom).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
