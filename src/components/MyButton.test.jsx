import { render, screen, fireEvent } from "@testing-library/react";
import Mybutton from "./Mybutton.jsx";

//tester car appel de fonction
describe("Mybutton", () => {
  it("should render with correct content", () => {
    render(<Mybutton content="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const mockClick = jest.fn();
    render(<Mybutton content="Click me" onClick={mockClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(mockClick).toHaveBeenCalled();
  });

  it("should use correct button type", () => {
    const { container } = render(<Mybutton content="Submit" type="submit" />);
    expect(container.querySelector("button")).toHaveAttribute("type", "submit");
  });
});
